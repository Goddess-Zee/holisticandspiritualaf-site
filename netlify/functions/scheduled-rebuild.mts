// Rebuilds the site twice a day so new podcast episodes (from the Podbean feed)
// appear on their own, without anyone pushing code.
//
// Setup (one time, in Netlify):
//   1. Project configuration → Build & deploy → Build hooks → Add build hook
//      (name it "Scheduled rebuild", branch main) and copy its URL.
//   2. Project configuration → Environment variables → Add variable
//      BUILD_HOOK_URL = that URL.
// Schedule is in UTC: 1:00 and 13:00 UTC = 8 PM and 8 AM Eastern (9 PM / 9 AM in summer),
// so Friday evening episodes show up the same night.

export default async () => {
  const hook = Netlify.env.get('BUILD_HOOK_URL');
  if (!hook) {
    console.log('[rebuild] BUILD_HOOK_URL is not set; skipping.');
    return new Response('BUILD_HOOK_URL not set', { status: 200 });
  }
  const res = await fetch(hook, { method: 'POST' });
  console.log('[rebuild] Build hook answered', res.status);
  return new Response(`Build hook answered ${res.status}`);
};

export const config = { schedule: '0 1,13 * * *' };
