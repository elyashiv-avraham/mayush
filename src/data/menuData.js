/**
 * Mayush — Catalog & Menu Data
 * ─────────────────────────────────
 * Clean data structures designed for easy future synchronization
 * with Google Sheets, Airtable, or a headless CMS API.
 */

export const CATEGORIES = [
  { id: 'all', name: 'הכל מהתפריט', icon: '✦' },
  { id: 'cakes', name: 'עוגות ראווה ושכבות', icon: '🎂' },
  { id: 'tarts', name: 'טארטים ופטיסרי', icon: '🥧' },
  { id: 'boxes', name: 'מארזים ומתנות', icon: '🎁' },
  { id: 'events', name: 'אירועים והזמנה מראש', icon: '✨' },
];

export const PRODUCTS = [
  /* ── עוגות ראווה ושכבות ───────────────────────────── */
  {
    id: 'cake-royal-chocolate',
    name: 'רויאל שוקולד ופרלינה',
    category: 'cakes',
    badge: 'נמכר ביותר',
    description:
      'תחתית קראנץ׳ לוז פייטה פריך, קרמו שוקולד בלגי 70%, מוס פרלינה אגוזי לוז קטיפתי וציפוי גלאסאז׳ מראה מבריק.',
    price: 240,
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'cake-pistachio-crown',
    name: 'כתר פיסטוק ופירות יער',
    category: 'cakes',
    badge: 'חדש',
    description:
      'ביסקוויט שקדים רך, קונפי פטל אדום טבעי, מוס פיסטוק קלוי מסיציליה ועיטור שנטילי וניל מדגסקר.',
    price: 260,
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'cake-red-velvet',
    name: 'רד ולווט רויאל וגבינה',
    category: 'cakes',
    badge: 'נמכר ביותר',
    description:
      'שכבות ספוג רד ולווט קטיפתי עשיר, קרם גבינת שמנת ניו-יורקית אוורירי ועיטור שושני קרם עדינים.',
    price: 230,
    image:
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'cake-caramel-pecan',
    name: 'דולצ׳ה קרמל ופקאן מוזהב',
    category: 'cakes',
    badge: 'נמכר ביותר',
    description:
      'עוגת שכבות שוקולד בלונדי, גנאש קרמל מלוח מבושל בעבודת יד, שברי פקאן מקורמל וקראנץ׳ עוגיות חמאה.',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=700&h=700&fit=crop&q=80',
  },

  /* ── טארטים ופטיסרי ─────────────────────────────── */
  {
    id: 'tart-lemon-meringue',
    name: 'טארט לימון ומרנג שוויצרי',
    category: 'tarts',
    badge: 'קלאסיקה',
    description:
      'קלתית סבלה ברטון פריכה מחמאה צרפתית, קרד לימונים טריים חמצמץ-מתוק ומרנג שוויצרי צרוב בלהבה.',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'tart-strawberry-creme',
    name: 'טארט תותים ודיפלומט וניל',
    category: 'tarts',
    badge: 'עונתי',
    description:
      'בצק פריך נימוח, קרם שקדים אפוי, קרם דיפלומט מנוקד במקלות וניל טבעיים ושפע תותים רעננים מזוגגים.',
    price: 195,
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'tart-chocolate-noisette',
    name: 'טארטלט שוקולד ואגוזי לוז',
    category: 'tarts',
    badge: null,
    description:
      'גנאש שוקולד מריר עמוק, פרלינה אגוזי לוז תוצרת בית ומלח מאלדון על בסיס קקאו כהה.',
    price: 175,
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'tart-exotic-mango',
    name: 'טארט אקזוטי מנגו ופסיפלורה',
    category: 'tarts',
    badge: 'חדש',
    description:
      'קרם פסיפלורה חמצמץ, קוביות מנגו טרי, גנאש מוקצף שוקולד לבן וקוקוס קלוי.',
    price: 190,
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&h=700&fit=crop&q=80',
  },

  /* ── מארזים ומתנות ──────────────────────────────── */
  {
    id: 'box-macarons-12',
    name: 'מארז מאקרונים פריזאי (12 יח׳)',
    category: 'boxes',
    badge: 'חדש',
    description:
      '12 מאקרונים פריכים ונימוחים בטעמים מובחרים: פיסטוק, פטל, שוקולד מריר, וניל, קרמל מלוח וקפה.',
    price: 140,
    image:
      'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'box-petit-fours',
    name: 'מארז פטיפורים וקינוחי כוסות',
    category: 'boxes',
    badge: 'מארז חגיגי',
    description:
      'מבחר 16 קינוחי ביס אלגנטיים: מיני טארטים, מוסים בכוסות קריסטל אישיות וטראפלס שוקולד עבודת יד.',
    price: 220,
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'box-cookies-truffles',
    name: 'מארז עוגיות שף וטראפלס',
    category: 'boxes',
    badge: null,
    description:
      'צנצנת עוגיות חמאה שקדים נימוחות, עוגיות שוקולד צ׳יפס דולצ׳ה וקופסת טראפלס שוקולד בלגי 70%.',
    price: 135,
    image:
      'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=700&h=700&fit=crop&q=80',
  },

  /* ── אירועים והזמנה מראש ───────────────────────── */
  {
    id: 'event-wedding-cake',
    name: 'עוגת חתונה / אירוסין קומות',
    category: 'events',
    badge: 'הזמנה מראש',
    description:
      'עוגת קומות אצילית בעיצוב אישי לפי פלטת צבעי האירוע, פרחי סוכר בעבודת יד ושכבות טעמים מותאמות אישית.',
    price: 1200,
    image:
      'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'event-sweet-table',
    name: 'שולחן קינוחים מפואר לאירועים',
    category: 'events',
    badge: 'חוויית VIP',
    description:
      'עיצוב והקמה של שולחן קינוחי פרימיום מלא: עוגת מרכזית, מגוון פטיפורים, מאקרונים, מוסים אישיים ומעמדים יוקרתיים.',
    price: 2500,
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=700&h=700&fit=crop&q=80',
  },
  {
    id: 'event-bento-cupcakes',
    name: 'מארז בנטו קייק וקאפקייקס',
    category: 'events',
    badge: 'הכי טרנדי',
    description:
      'עוגת בנטו אישית עם כיתוב לבחירתכם + 5 קאפקייקס מעוצבים תואמים. מושלם לחגיגות יום הולדת אינטימיות.',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=700&h=700&fit=crop&q=80',
  },
];
