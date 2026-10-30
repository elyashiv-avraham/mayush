/**
 * Mayush — Business Configuration
 * ─────────────────────────────────
 * Central config for all business-level data: branding, contact,
 * social links, about copy, and site navigation.
 * Structured for easy future migration to a CMS or external API.
 */

const config = {
  /* ── Branding ────────────────────────────────────────── */
  brand: {
    nameHe: 'מאיוש',
    nameEn: 'Mayush',
    taglineHe: 'בוטיק קונדיטוריה',
    taglineEn: 'Boutique Pâtisserie',
    logo: '/images/logo.jpeg',
  },

  /* ── Navigation Links ───────────────────────────────── */
  nav: [
    { id: 'hero', label: 'ראשי' },
    { id: 'about', label: 'אודות' },
    { id: 'menu', label: 'התפריט' },
    { id: 'contact', label: 'צרו קשר' },
  ],

  /* ── About / Bio ────────────────────────────────────── */
  about: {
    heading: 'הסיפור שלנו',
    paragraphs: [
      'מאיוש נולד מתוך אהבה עמוקה לאומנות הקונדיטוריה הצרפתית ותשוקה ליצירת חוויות טעם בלתי נשכחות. כל עוגה, קינוח ומאפה נוצרים בעבודת יד קפדנית, מחומרי גלם מובחרים ובאיכות שאינה מתפשרת.',
      'אנו מאמינים שכל אירוע ראוי ליצירת מופת קולינרית — ממסיבת יום הולדת אינטימית ועד חתונה מפוארת. בסטודיו שלנו, כל פרט מתוכנן בקפידה: מהטעם המושלם ועד לעיצוב האסתטי שמשאיר רושם.',
      'בין אם אתם מחפשים עוגת שכבות מרהיבה, מאקרון צרפתי בטעמים ייחודיים, או מגש קינוחים מעוצב — מאיוש הוא הכתובת שלכם לקונדיטוריה ברמה אחרת.',
    ],
    highlightQuote: '״כל יצירה שיוצאת מהסטודיו שלנו היא יצירת אמנות שנולדה מתוך אהבה, מסירות ותשומת לב לכל פרט.״',
  },

  /* ── Contact Details ────────────────────────────────── */
  contact: {
    heading: 'צרו קשר',
    subheading: 'נשמח לשמוע מכם ולעזור לכם ליצור את הקינוח המושלם לכל אירוע.',
    phone: {
      display: '055-668-7271',
      href: 'tel:+972556687271',
    },
    email: {
      display: 'hello@mayush.co.il',
      href: 'mailto:hello@mayush.co.il',
    },
    address: 'תל אביב, ישראל',
    workingHours: [
      { day: 'ראשון – חמישי', hours: '09:00 – 19:00' },
      { day: 'שישי', hours: '08:00 – 14:00' },
      { day: 'שבת', hours: 'סגור' },
    ],
  },

  /* ── Social Links ───────────────────────────────────── */
  social: {
    instagram: 'https://instagram.com/mayush_bakery',
    facebook: 'https://facebook.com/mayush.bakery',
    whatsapp: 'https://wa.me/972556687271',
    tiktok: 'https://tiktok.com/@mayush_bakery',
  },

  /* ── Hero Section ───────────────────────────────────── */
  hero: {
    headline: 'אומנות קונדיטוריה\nברמה אחרת',
    subline: 'עוגות מעוצבות, קינוחים וכל מה שביניהם — ביד אמן, בהשראה צרפתית.',
    ctaPrimary: { label: 'לתפריט המלא', targetId: 'menu' },
    ctaSecondary: { label: 'הזמינו עכשיו', href: 'https://wa.me/972556687271' },
  },

  /* ── Footer ─────────────────────────────────────────── */
  footer: {
    copyright: '© {year} מאיוש — כל הזכויות שמורות.',
    madeWith: 'נוצר באהבה ❤️',
  },
};

export default config;
