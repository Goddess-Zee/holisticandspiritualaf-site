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
  email: 'holisticandspiritualaf@gmail.com',
  verification: {
    google: 'qAj3K12_AwtSqnEn92dNIdW4ZGlSmbZyKfvECCwZcOk',
    facebook: '0n8o2b1u326bmx25b7bxgent9zahiy',
    pinterest: 'fa21011034aa3a0a1234557ff4327bf3',
  },
};

export const nav = [
  { label: 'Podcast', href: '/podcast' },
  { label: 'Classes & Events', href: '/events' },
  { label: 'Consultations', href: '/consultations' },
  { label: 'Books & Courses', href: '/books-and-courses' },
  { label: 'Meditations', href: '/meditations' },
  { label: 'Ancestral Library', href: 'https://afroindenginousresearchlibrary.netlify.app/', external: true },
  { label: 'Writings', href: '/writings' },
];

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
export const events = [
  {
    title: 'Tarot: The Language of Intuition',
    kind: 'Divination workshop · Online',
    date: 'Sunday, November 22, 2026',
    time: '12:00–2:30 PM EST',
    startISO: '2026-11-22T12:00:00-05:00',
    endISO: '2026-11-22T14:30:00-05:00',
    href: 'https://www.eventbrite.com/e/divination-workshop-tarot-the-language-of-intuition-tickets-2003857039347',
    image: '/images/events/tarot-language-of-intuition.webp',
    blurb:
      'Strengthen your intuitive voice and learn to read the cards with confidence in this live divination workshop.',
  },
];

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
  offer: 'Join the Circle and get 10% off your first course, consultation or masterclass',
  note: 'Monthly energy updates, early access to classes and new episodes in your inbox. Your code arrives in your welcome email.',
};
