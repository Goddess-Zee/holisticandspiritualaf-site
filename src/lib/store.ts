// Tiny "remember this" helper for the cookie choice and the Circle pop-up.
// Some phones block site storage (for example Safari with "Block All Cookies", or
// some in-app browsers). We try three places in turn so a visitor's choice still
// sticks: localStorage, then a first-party cookie, then the tab's window.name
// (which survives page-to-page navigation in the same tab even when storage is off).

const COOKIE_DAYS = 365;
const NAME_PREFIX = 'hsaf:';

function fromWindowName(): Record<string, string> {
  try {
    return window.name.startsWith(NAME_PREFIX) ? JSON.parse(window.name.slice(NAME_PREFIX.length)) : {};
  } catch {
    return {};
  }
}

export function remember(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch {}
  try {
    document.cookie = `${key}=${encodeURIComponent(value)}; max-age=${COOKIE_DAYS * 86400}; path=/; SameSite=Lax; Secure`;
  } catch {}
  try {
    const all = fromWindowName();
    all[key] = value;
    window.name = NAME_PREFIX + JSON.stringify(all);
  } catch {}
}

export function recall(key: string): string | null {
  try { const v = localStorage.getItem(key); if (v) return v; } catch {}
  try {
    const hit = document.cookie.split('; ').find((c) => c.startsWith(key + '='));
    if (hit) return decodeURIComponent(hit.slice(key.length + 1));
  } catch {}
  return fromWindowName()[key] ?? null;
}

// Per-visit memory (cleared when the tab is closed)
export function rememberForVisit(key: string, value: string) {
  try { sessionStorage.setItem(key, value); return; } catch {}
  try { const all = fromWindowName(); all[key] = value; window.name = NAME_PREFIX + JSON.stringify(all); } catch {}
}

export function recallForVisit(key: string): string | null {
  try { const v = sessionStorage.getItem(key); if (v) return v; } catch {}
  return fromWindowName()[key] ?? null;
}
