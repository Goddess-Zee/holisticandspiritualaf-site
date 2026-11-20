// Google Analytics 4, loaded only after a visitor chooses "I'm In" on the cookie banner.
// Ads features stay off: no ad storage, no ad personalization.

type Gtag = (...args: unknown[]) => void;
const w = window as unknown as { dataLayer?: unknown[]; gtag?: Gtag; hsafGa?: string };

export function loadAnalytics(id: string) {
  if (!id || w.hsafGa) return;
  w.hsafGa = id;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() { w.dataLayer!.push(arguments); } as Gtag;
  w.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  w.gtag('js', new Date());
  w.gtag('config', id, { allow_google_signals: false, allow_ad_personalization_signals: false });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

// If someone changes their mind later, stop analytics storage for the rest of the visit
export function revokeAnalytics() {
  w.gtag?.('consent', 'update', { analytics_storage: 'denied' });
}

// Send an event only when analytics is running (i.e. the visitor said yes)
export function track(event: string, params: Record<string, unknown> = {}) {
  if (w.hsafGa) w.gtag?.('event', event, params);
}
