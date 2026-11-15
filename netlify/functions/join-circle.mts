// Adds a "Join the Circle" sign-up to MailerLite from the server, so the private
// API key never reaches the browser and no reCAPTCHA is needed.
//
// Netlify environment variables (Project configuration → Environment variables):
//   MAILERLITE_API_KEY  — MailerLite → Integrations → API → Generate new token
//   MAILERLITE_GROUP_ID — the group new subscribers join (the welcome automation
//                         should start with "When subscriber joins a group" → that group)
//   MAILERLITE_GROUP_NAME — optional; used to find the group if the ID doesn't work
//                         (default "Join the Circle")

const API = 'https://connect.mailerlite.com/api';
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const reply = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export default async (req: Request) => {
  if (req.method !== 'POST') return reply(405, { success: false, message: 'Method not allowed' });

  // Clean up copy-paste extras (spaces, line breaks, straight or curly quotes) around the values
  const clean = (v?: string) => (v ?? '').replace(/[\s'"\u2018\u2019\u201C\u201D]/g, '');
  const key = clean(Netlify.env.get('MAILERLITE_API_KEY'));
  const group = clean(Netlify.env.get('MAILERLITE_GROUP_ID'));
  if (/[^A-Za-z0-9._-]/.test(key)) {
    console.error('[join-circle] MAILERLITE_API_KEY has unexpected characters; please re-paste it');
    return reply(500, { success: false, message: 'Sign-up key needs to be re-entered' });
  }
  if (!key) {
    console.error('[join-circle] MAILERLITE_API_KEY is not set');
    return reply(500, { success: false, message: 'Sign-up is not configured yet' });
  }

  let data: { email?: string; name?: string; website?: string };
  try { data = await req.json(); } catch { return reply(400, { success: false, message: 'Bad request' }); }

  // Spam trap: the hidden "website" field is only ever filled in by bots
  if (data.website) return reply(200, { success: true });

  const email = String(data.email ?? '').trim().toLowerCase();
  const name = String(data.name ?? '').trim().slice(0, 80);
  if (!EMAIL.test(email) || email.length > 254) return reply(400, { success: false, message: 'Please enter a valid email address.' });

  const headers = { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Accept: 'application/json' };

  // 1. Create (or update) the subscriber
  const res = await fetch(`${API}/subscribers`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, ...(name ? { fields: { name } } : {}) }),
  });
  if (!res.ok) {
    console.error('[join-circle] MailerLite answered', res.status, (await res.text()).slice(0, 300));
    return reply(502, { success: false, message: 'MailerLite did not accept the sign-up' });
  }
  const subscriber = (await res.json())?.data;

  // 2. Put them in the Circle group (this is what starts the welcome automation).
  //    Uses MAILERLITE_GROUP_ID if it works; otherwise looks the group up by name.
  const groupName = Netlify.env.get('MAILERLITE_GROUP_NAME') || 'Join the Circle';
  const addTo = async (id: string) =>
    (await fetch(`${API}/subscribers/${subscriber.id}/groups/${id}`, { method: 'POST', headers })).ok;

  let grouped = false;
  let how = 'none';
  if (group && /^\d+$/.test(group)) { grouped = await addTo(group); how = grouped ? 'id' : 'id-failed'; }
  if (!grouped) {
    const list = await fetch(`${API}/groups?filter[name]=${encodeURIComponent(groupName)}&limit=10`, { headers });
    const match = list.ok ? (await list.json())?.data?.find((g: { name: string }) => g.name.trim().toLowerCase() === groupName.toLowerCase()) : null;
    if (match) { grouped = await addTo(String(match.id)); how = grouped ? 'name' : 'name-failed'; }
    else how += '+no-group-named-' + groupName;
  }
  if (!grouped) console.error('[join-circle] Could not add to group:', how);

  return reply(200, { success: true, grouped, how });
};

export const config = { path: '/api/join-circle' };
