// Brand + business settings in one place.
// Renaming the brand later = change it here (and later in Sanity), plus redirects.

export const site = {
  name: 'Holistic and Spiritual AF',
  shortName: 'Holistic & Spiritual AF',
  tagline: 'Healing and Wisdom From the Ancestors',
  description:
    'Ancestral healing, energy work, and Divine Feminine embodiment for Afro-Indigenous, Afro-Caribbean and Afro-Latina women — podcast, classes, consultations, books and meditations with Goddess Zee.',
  url: 'https://holisticandspiritualaf.com',
  founder: 'Zipporah Banyay',
  founderAlias: 'Goddess Zee',
  ogImage: '/og-image.jpg',
  verification: {
    google: 'qAj3K12_AwtSqnEn92dNIdW4ZGlSmbZyKfvECCwZcOk',
    facebook: '0n8o2b1u326bmx25b7bxgent9zahiy',
    pinterest: 'fa21011034aa3a0a1234557ff4327bf3',
  },
};

type NavLink = { label: string; href: string; external?: boolean; note?: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

export const nav: NavItem[] = [
  {
    label: 'About',
    children: [
      { label: 'My Story', href: '/about', note: 'Goddess Zee and Holistic and Spiritual AF' },
      { label: 'Contact', href: '/contact', note: 'Questions, collaborations and press' },
    ],
  },
  {
    label: 'Podcast & Videos',
    children: [
      { label: 'Podcast', href: '/podcast', note: 'New episodes every other Friday' },
      { label: 'Videos', href: '/videos', note: 'Long-form conversations on YouTube' },
      { label: 'Meditations', href: '/meditations', note: 'Guided practices for your path' },
      { label: 'Be a Guest', href: '/be-a-guest', note: 'Apply to join the podcast' },
    ],
  },
  {
    label: 'Learn',
    children: [
      { label: 'Classes & Events', href: '/events', note: 'Live online circles and workshops' },
      { label: 'Books & Courses', href: '/books-and-courses', note: 'Books, journals and masterclasses' },
      { label: 'Writings', href: '/writings', note: 'Essays on ancestral healing' },
      { label: 'Ancestral Library', href: 'https://afroindenginousresearchlibrary.netlify.app/', external: true, note: 'Afro-Indigenous research library' },
    ],
  },
];

export const navCta = { label: 'Book a Session', href: '/consultations' };

export const social = [
  { label: 'Instagram', href: 'https://www.instagram.com/holisticandspiritualaf' },
  { label: 'YouTube', href: 'https://www.youtube.com/@holisticandspiritualafpodcast' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@holisticandspiritualaf' },
  { label: 'Facebook', href: 'https://www.facebook.com/holisticandspiritualaf' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/holisticandspiritualaf/' },
];

export const podcast = {
  feedUrl: 'https://feed.podbean.com/holisticandspiritualaf/feed.xml',
  schedule: 'New episodes every other Friday',
  downloads: '6,000+',
  about:
    'Candid, heart-centered conversations on spiritual awakening, energy healing, ancestral wisdom and Divine Feminine embodiment — created for and by Afro-Indigenous and Afro-Diasporic women navigating the sacred journey home to self.',
  artwork: '/images/podcast/podcast-cover.webp',
  listen: [
    { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/holistic-and-spiritual-af/id1620257468' },
    { label: 'Spotify', href: 'https://open.spotify.com/show/11myO69q7sIzibpqPlQpUg' },
    { label: 'YouTube', href: 'https://www.youtube.com/@holisticandspiritualafpodcast' },
    { label: 'Podbean', href: 'https://holisticandspiritualaf.podbean.com' },
  ],
};

// Booking + payment via Cal.com (connected to Stripe)
// 20-minute call to help someone choose the right offering.
export const pathFinder = {
  title: '20 Min. Clarity Consultation',
  blurb: 'Not sure where to start? In 20 minutes we’ll get clear on where you are and find the right path for you — a session, class, course or mentorship.',
  length: '20 minutes',
  price: '$30',
  cta: 'Book 20 Minutes',
  href: 'https://cal.com/zipporah-banyay-enw72v/20-min.-clarity-consultation',
};

export const sessions = [
  {
    title: '30 Min Spiritual Consultation',
    short: '30 Min Consultation',
    teaser: 'A focused clarity session on one specific concern, with ancestral guidance and simple next steps.',
    price: '$55.55',
    blurb:
      'A focused clarity session to help you quickly realign. We tap into your energy and ancestral guidance to address a specific concern, highlight blocks, and offer simple steps so you can move forward with confidence and peace.',
    cta: 'Book 30 Minutes',
    href: 'https://cal.com/zipporah-banyay-enw72v/30min',
    featured: false,
  },
  {
    title: '60 Min Spiritual Consultation',
    short: '60 Min Consultation',
    teaser: 'A deep soul session exploring your energy, patterns and purpose, with ancestral messages and personalized healing tools.',
    price: '$111.11',
    blurb:
      'A deep, transformative soul session for women ready for aligned change. We explore your energy, patterns, and purpose while receiving ancestral messages. You’ll leave with clarity, guidance, and personalized tools for healing.',
    cta: 'Book 60 Minutes',
    href: 'https://cal.com/zipporah-banyay-enw72v/60min',
    featured: true,
  },
  {
    title: 'The Sovereign Matriarch',
    short: 'The Sovereign Matriarch',
    teaser: 'A private 12-week mentorship to heal the maternal line and ascend to the throne of your own life.',
    price: 'By application',
    blurb:
      'A private, 12-week container for the woman ready to stop seeking outside of herself and begin her sacred descent into the heart of her own power — healing the wounds of the maternal line and ascending to the throne of her own life.',
    cta: 'Ask About Mentorship',
    href: '/consultations#sovereign-matriarch',
    featured: false,
  },
];

export const books = [
  {
    title: 'The 5 Stages of Shadow Work',
    kind: 'Book',
    price: '$10.99',
    href: 'https://www.amazon.com/dp/B0D57DR7GX',
    image: '/images/books/5-stages-of-shadow-work.webp',
    blurb:
      'A comprehensive guide through every stage of shadow work, with the tools and insight to confront and integrate your inner shadows.',
  },
  {
    title: 'The 5 Stages of Shadow Work Journal',
    kind: 'Journal',
    price: '$12.99',
    href: 'https://www.amazon.com/dp/B0DBF6CP67',
    image: '/images/books/shadow-work-journal.webp',
    blurb:
      'The companion journal to uncover, embrace, and heal the hidden aspects of yourself that shape your thoughts, behaviors and relationships.',
  },
  {
    title: 'Ancestral Altar Guide',
    kind: 'eBook',
    price: '$7.99',
    href: 'https://www.amazon.com/dp/B0DV46KQZ5',
    image: '/images/books/ancestral-altar-guide.webp',
    blurb:
      'A practical resource for building a lasting connection with your lineage through the sacred practice of altar work.',
  },
];

export const courses = [
  {
    title: 'Back to Balance Masterclass',
    kind: '90-min masterclass',
    price: '$25.55',
    href: 'https://holisticnspiritualaf.gumroad.com/l/backtobalancemasterclass',
    image: '/images/courses/back-to-balance.webp',
    blurb:
      'Tap into the power of your energy, release the blocks holding you back, and realign with your highest self.',
  },
  {
    title: 'Scripture & Conjure: The Bible in Hoodoo Tradition',
    kind: '2-hr masterclass',
    price: '$55.55',
    href: 'https://holisticnspiritualaf.gumroad.com/l/bibleinhoodoo',
    image: '/images/courses/scripture-and-conjure.webp',
    blurb:
      'How our ancestors transformed scripture into survival, spellwork and liberation. Includes the recording and a PDF booklet of scriptures and rituals.',
  },
  {
    title: 'Rest, Release, Remember',
    kind: '3-part meditation series',
    price: '$33.33',
    href: 'https://holisticnspiritualaf.gumroad.com/l/meditationseries',
    image: '/images/courses/rest-release-remember.webp',
    blurb:
      'A guided meditation journey designed to bring Black women back into the wholeness of their bodies, their breath and their becoming.',
  },
];

// TODO: manage in Sanity; for now edit here
// Classes: list in date order. Past ones move to "Past classes" automatically.
// Images for new classes load straight from Eventbrite.
export const events = [
  {
    title: 'Tarot & The Language of Intuition',
    series: 'Divination Series · Part I',
    kind: 'Divination workshop · Online',
    date: 'Sunday, November 22, 2026',
    time: '12:00–2:30 PM EST',
    startISO: '2026-11-22T12:00:00-05:00',
    endISO: '2026-11-22T14:30:00-05:00',
    price: '$27',
    href: 'https://www.eventbrite.com/e/2003857039347?aff=oddtdtcreator',
    image: '/images/events/tarot-language-of-intuition.webp',
    blurb:
      'Learn tarot basics and practice beginner-friendly readings in small breakout groups. No experience needed.',
  },
  {
    title: 'Pendulum Dowsing & Intuition',
    series: 'Divination Series · Part II',
    kind: 'Divination workshop · Online',
    date: 'Sunday, December 13, 2026',
    time: '12:00–2:30 PM EST',
    startISO: '2026-12-13T12:00:00-05:00',
    endISO: '2026-12-13T14:30:00-05:00',
    price: '$27',
    href: 'https://www.eventbrite.com/e/2003865167659?aff=oddtdtcreator',
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1196518369%2F2322771494833%2F1%2Foriginal.20261024-220452?crop=focalpoint&fit=crop&w=1880&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=8a5d530dd36b03f20deece2651e3f09c',
    blurb:
      'Pendulum divination, spiritual protection and energy awareness in a live, interactive circle. Join the series or come on its own.',
  },
  {
    title: "Sistah's Manifesting with Intention: A Vision Board Circle",
    kind: 'Vision board circle · Online',
    date: 'Wednesday, December 16, 2026',
    time: '7:00–9:00 PM EST',
    startISO: '2026-12-16T19:00:00-05:00',
    endISO: '2026-12-16T21:00:00-05:00',
    price: '$30.65',
    href: 'https://www.eventbrite.com/e/sistahs-manifesting-with-intention-a-vision-board-circle-tickets-2004177340376?aff=oddtdtcreator&keep_tld=true',
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1196969722%2F2322771494833%2F1%2Foriginal.20261031-012842?crop=focalpoint&fit=crop&w=1880&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=feda1091e26dbd7774eaa72be3520d84',
    blurb:
      'Reflect on the year, set your intentions and create your 2027 vision board alongside other women in a two-hour live circle.',
  },
  {
    title: 'Flame Divination: The Sacred Language of Fire',
    series: 'Divination Series · Part III',
    kind: 'Divination workshop · Online',
    date: 'Sunday, January 10, 2027',
    time: '12:00–2:30 PM EST',
    startISO: '2027-01-10T12:00:00-05:00',
    endISO: '2027-01-10T14:30:00-05:00',
    price: '$27',
    href: 'https://www.eventbrite.com/e/2003882194587?aff=oddtdtcreator',
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1196545116%2F2322771494833%2F1%2Foriginal.20261025-170524?crop=focalpoint&fit=crop&w=1880&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=27f0e465be7bba0c0617feedc2f526d6',
    blurb:
      'An introduction to pyromancy: fire symbolism, reading a candle flame and grounding practices. No experience needed.',
  },
];

// The three-part divination series, sold as a bundle on the Part I ticket page
export const divinationSeries = {
  title: 'The Divination Series',
  blurb: 'Tarot, pendulum and flame — three live workshops to strengthen your intuitive voice.',
  price: '$81 for all three',
  href: 'https://www.eventbrite.com/e/2003857039347?aff=oddtdtcreator',
};

export const meditations = [
  {
    title: 'Energy Attunement Meditation',
    blurb:
      'Attune your energy field to the high-vibrational consciousness of the Age of Aquarius — unity, higher wisdom and multidimensional awareness.',
    youtubeId: '8acZNBqpGfo',
    image: '/images/meditations/energy-attunement.webp',
  },
  {
    title: 'Divine Code Meditation',
    blurb: 'Visualize and activate Divine codes within your chakra system and reconnect to your divine self.',
    youtubeId: 'F82AC85Un6I',
    image: '/images/meditations/divine-code.webp',
  },
  {
    title: 'Reprogram Your Subconscious Mind',
    blurb: 'Replace negative thought patterns and beliefs with empowering intentions to change your life.',
    youtubeId: 'cBurpDsL1VM',
    image: '/images/meditations/reprogram-subconscious.webp',
  },
];

export const insightTimer = 'https://insighttimer.com/goddesszee';

export const press = [
  { outlet: 'Voyage Tampa', href: 'https://voyagetampa.com/interview/exploring-life-business-with-zipporah-banyay-of-holistic-and-spiritual-af' },
  { outlet: 'Shoutout Atlanta', href: 'https://shoutoutatlanta.com/meet-zipporah-banyay/' },
  { outlet: 'Canvas Rebel', href: 'https://canvasrebel.com/meet-zipporah-banyay/' },
  { outlet: 'Bold Journey', href: 'https://boldjourney.com/meet-zipporah-banyay/' },
];

export const libraryTags = [
  'Gullah Geechee', 'Maroon Communities', 'Cherokee Freedmen', 'Fort Mose', 'Paper Genocide',
  'Seminole', 'All-Black Towns', 'Black Inventors', 'Timeline', 'Map',
];

// MailerLite: universal script account + the pop-up form that collects signups
export const newsletter = {
  account: '1250967',
  formId: 'bf10ui',
  // Public sign-up address for the form (no API key needed; double opt-in is on in MailerLite)
  subscribeUrl: 'https://assets.mailerlite.com/jsonp/1250967/forms/202236760251434471/subscribe',
  offer: 'Join the Circle and get 10% off your first course, consultation or masterclass',
  note: 'Monthly energy updates, early access to classes and new episodes in your inbox. Your code arrives in your welcome email.',
};

// About page + homepage "Who I work with" (in Goddess Zee's own words from the old site)
export const about = {
  bio: [
    'Zipporah Banyay — Goddess Zee — is a reiki master, meditation facilitator and intuitive energy healer, medium and channeler of the ancestors and divine source energy with over 20 years of dedicated practice.',
    'Her journey into the spiritual realm began at a young age, driven by a strong connection to her ancestors and their wisdom. She went on to heal generational trauma in her own life and deepen her spiritual development.',
    'Throughout her journey, Goddess Zee has guided countless individuals toward deeper self-awareness and empowerment — transforming personal traumas into sources of strength and healing their ancestral lineage.',
    'She is the host of the Holistic and Spiritual AF Podcast, author of The 5 Stages of Shadow Work and Ancestral Altar Guide, and offers spiritual consultations, guided meditations and classes for Afro-Indigenous, Caribbean and Afro-Latina women reclaiming and reconnecting to their ancestral wisdom.',
  ],
  mission: [
    'Holistic and Spiritual AF™ is a sacred movement, a multidimensional platform, and a sanctuary for Afro-Indigenous, Afro-Caribbean and Afro-Latina women who are reclaiming their Divine Feminine power, healing generational trauma, and walking in ancestral alignment.',
    'Founded by Goddess Zee, an Afro-Indigenous and Caribbean energy healer, author, podcast host, meditation facilitator and spiritual educator, this space exists to nurture the full spectrum of our healing — mental, emotional, spiritual and ancestral.',
  ],
  manifesto: [
    'We are not just healing, we are remembering.',
    'We are not just learning, we are reactivating ancient knowledge that lives in our bones.',
    'We reclaim softness as power, intuition as intelligence, and rest as resistance.',
  ],
  whoIntro: 'I work with Afro-Indigenous, Afro-Caribbean and Afro-Latina women — Black women and women of African descent across the Caribbean, the Americas and the ancestral homelands — who are ready to do the soul work not just for themselves, but for their bloodline.',
  who: [
    { title: 'Healing the bloodline', text: 'You’re ready to face generational trauma and break the patterns you inherited, so they stop with you.' },
    { title: 'Reclaiming the Divine Feminine', text: 'You want to embody your power with softness, intuition and rest — not hustle and self-abandonment.' },
    { title: 'Reconnecting with the ancestors', text: 'You feel the call of your lineage and want guidance building a respectful, living relationship with those who came before you.' },
    { title: 'Awakening your gifts', text: 'Your intuition is opening and you want grounded tools — divination, meditation, energy work — to trust what you receive.' },
  ],
};

// Long-form YouTube videos featured on /videos (newest first). Swap ids to change the line-up.
export const videos = [
  { id: 'rovNcaGz4dQ', title: 'Subconscious Programming & How to Break the Cycle', length: '39 min', theme: 'Mindset' },
  { id: 'R_evJ9FoN7I', title: "Why You Still Feel Your Ex's Energy: Energetic Cords Explained", length: '46 min', theme: 'Energy & relationships' },
  { id: 'Xlz_-Y44JyE', title: 'The Mother Wound Didn’t Start With Her', length: '41 min', theme: 'Ancestral healing' },
  { id: 'I_5MU0_NI5w', title: 'You Already Got the Sign… Now What?', length: '36 min', theme: 'Intuition' },
  { id: 'QcK_3nEdC_I', title: 'Healing Changed My Dating Life. Here’s Why', length: '58 min', theme: 'Divine Feminine' },
  { id: 'yc9gviUaTSk', title: 'Hoodoo as Resistance: Ancestral Power, Rootwork & Liberation', length: '50 min', theme: 'Rootwork' },
  { id: 'cbYxv0FTpNc', title: "The Ancestors Built This City: Tampa's Untold Black History", length: '45 min', theme: 'History' },
];
export const youtubeChannel = 'https://www.youtube.com/@holisticandspiritualafpodcast';
