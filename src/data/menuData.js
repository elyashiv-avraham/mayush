/**
 * Mayush — Menu / Product Data
 * ──────────────────────────────
 * All product catalog data lives here, completely decoupled from components.
 * Designed for easy future binding to Google Sheets API, Airtable, or CSV endpoint.
 *
 * Each category has:
 *   - id          (string)   Unique key
 *   - name        (string)   Display name (Hebrew)
 *   - icon        (string)   Emoji icon for the category pill
 *
 * Each product has:
 *   - id          (string)   Unique key
 *   - name        (string)   Product name (Hebrew)
 *   - description (string)   Short description
 *   - price       (string)   Display price (e.g. "₪180", "החל מ-₪350")
 *   - image       (string)   Path or URL to product image
 *   - badge       (string?)  Optional pill label ("נמכר ביותר", "חדש", "מומלץ למתנה")
 *   - tags        (string[]) Searchable tags
 */

const menuData = {
  categories: [
    { id: 'all', name: 'הכל', icon: '✦' },
    { id: 'cakes', name: 'עוגות', icon: '🎂' },
    { id: 'pastries', name: 'מאפים', icon: '🥐' },
    { id: 'desserts', name: 'קינוחים', icon: '🍰' },
    { id: 'macarons', name: 'מאקרונים', icon: '🟣' },
    { id: 'specials', name: 'ספיישלים', icon: '⭐' },
  ],

  products: [
    /* ── עוגות (Cakes) ────────────────────────────────── */
    {
      id: 'cake-chocolate-noir',
      categoryId: 'cakes',
      name: 'שוקולד נואר',
      description: 'עוגת שכבות שוקולד בלגי 70%, גנאש טראפל, וציפוי מראה מבריק.',
      price: '₪320',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop&q=80',
      badge: 'נמכר ביותר',
      tags: ['שוקולד', 'עוגה', 'יום הולדת'],
    },
    {
      id: 'cake-pistachio-rose',
      categoryId: 'cakes',
      name: 'פיסטוק ורדים',
      description: 'עוגת מוס פיסטוק עם לב קונפי ורדים, על בסיס דקואז שקדים.',
      price: '₪350',
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=600&fit=crop&q=80',
      badge: 'חדש',
      tags: ['פיסטוק', 'ורדים', 'מוס'],
    },
    {
      id: 'cake-vanilla-berries',
      categoryId: 'cakes',
      name: 'וניל ופירות יער',
      description: 'שכבות ספוג וניל מדגסקר, קרם דיפלומט ופירות יער טריים.',
      price: '₪290',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop&q=80',
      badge: null,
      tags: ['וניל', 'פירות יער', 'קלאסי'],
    },
    {
      id: 'cake-red-velvet',
      categoryId: 'cakes',
      name: 'רד ולווט רויאל',
      description: 'עוגת רד ולווט קטיפתית עם קרם גבינה שוויצרי ועיטור אלגנטי.',
      price: '₪310',
      image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&h=600&fit=crop&q=80',
      badge: null,
      tags: ['רד ולווט', 'גבינה', 'רומנטי'],
    },

    /* ── מאפים (Pastries) ──────────────────────────────── */
    {
      id: 'pastry-croissant',
      categoryId: 'pastries',
      name: 'קרואסון חמאה צרפתי',
      description: 'קרואסון מחמאה צרפתית AOP, 72 שכבות דקיקות, אפוי טרי כל בוקר.',
      price: '₪22',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=600&fit=crop&q=80',
      badge: 'נמכר ביותר',
      tags: ['קרואסון', 'חמאה', 'בוקר'],
    },
    {
      id: 'pastry-pain-chocolat',
      categoryId: 'pastries',
      name: 'פאן או שוקולה',
      description: 'מאפה שמרים פריך במילוי מקלות שוקולד בלגי מריר.',
      price: '₪24',
      image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=600&fit=crop&q=80',
      badge: null,
      tags: ['שוקולד', 'מאפה', 'שמרים'],
    },
    {
      id: 'pastry-brioche',
      categoryId: 'pastries',
      name: 'בריוש ונילה',
      description: 'בריוש רך ועשיר בניחוח וניל טהור, עם קראסט סוכר קראנצ׳י.',
      price: '₪26',
      image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=600&fit=crop&q=80',
      badge: 'חדש',
      tags: ['בריוש', 'וניל', 'מתוק'],
    },

    /* ── קינוחים (Desserts) ─────────────────────────────── */
    {
      id: 'dessert-creme-brulee',
      categoryId: 'desserts',
      name: 'קרם ברולה קלאסי',
      description: 'קרם וניל טהור עם שכבת קרמל קרנצ׳ית שנשרפת בלהבה.',
      price: '₪48',
      image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&h=600&fit=crop&q=80',
      badge: null,
      tags: ['קרם ברולה', 'קלאסי', 'צרפתי'],
    },
    {
      id: 'dessert-tarte-citron',
      categoryId: 'desserts',
      name: 'טארט לימון מרנג',
      description: 'טארט בצק פריך במילוי קרד לימון חמצמץ ומרנג שוויצרי מלובה.',
      price: '₪52',
      image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=600&fit=crop&q=80',
      badge: 'מומלץ למתנה',
      tags: ['טארט', 'לימון', 'מרנג'],
    },
    {
      id: 'dessert-panna-cotta',
      categoryId: 'desserts',
      name: 'פנה קוטה ושקדים',
      description: 'פנה קוטה קטיפתית עם רוטב פירות אדומים ושקדים קלויים.',
      price: '₪44',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop&q=80',
      badge: null,
      tags: ['פנה קוטה', 'שקדים', 'איטלקי'],
    },

    /* ── מאקרונים (Macarons) ────────────────────────────── */
    {
      id: 'macaron-assorted-box',
      categoryId: 'macarons',
      name: 'מארז מאקרונים – 12 יח׳',
      description: 'מבחר 12 מאקרונים צרפתיים בטעמים: פיסטוק, ורד, שוקולד, פסיפלורה, וניל ולבנדר.',
      price: '₪140',
      image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&h=600&fit=crop&q=80',
      badge: 'מומלץ למתנה',
      tags: ['מאקרון', 'מארז', 'מתנה'],
    },
    {
      id: 'macaron-pistachio',
      categoryId: 'macarons',
      name: 'מאקרון פיסטוק',
      description: 'מאקרון בטעם פיסטוק סיציליאני אמיתי עם גנאש פיסטוק עשיר.',
      price: '₪14',
      image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&h=600&fit=crop&q=80',
      badge: null,
      tags: ['מאקרון', 'פיסטוק'],
    },
    {
      id: 'macaron-raspberry',
      categoryId: 'macarons',
      name: 'מאקרון פטל',
      description: 'מאקרון פטל חמצמץ-מתוק עם מילוי גנאש שוקולד לבן ופטל.',
      price: '₪14',
      image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=600&fit=crop&q=80',
      badge: null,
      tags: ['מאקרון', 'פטל'],
    },

    /* ── ספיישלים (Specials) ─────────────────────────────── */
    {
      id: 'special-wedding-cake',
      categoryId: 'specials',
      name: 'עוגת חתונה מעוצבת',
      description: 'עוגת קומות מעוצבת אישית עם פרחי סוכר, ציפוי פונדנט או נייקד קייק. מחיר לפי התייעצות.',
      price: 'החל מ-₪1,200',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=600&fit=crop&q=80',
      badge: 'הזמנה מראש',
      tags: ['חתונה', 'עוגת קומות', 'מעוצבת'],
    },
    {
      id: 'special-dessert-table',
      categoryId: 'specials',
      name: 'שולחן קינוחים מעוצב',
      description: 'שולחן קינוחים מלא לאירועים: מיני עוגות, מאקרונים, טארטלטים, פטיפורים ועוד.',
      price: 'החל מ-₪2,500',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop&q=80',
      badge: 'פרימיום',
      tags: ['אירועים', 'שולחן קינוחים', 'קייטרינג'],
    },
    {
      id: 'special-gift-box',
      categoryId: 'specials',
      name: 'מארז מתנה יוקרתי',
      description: 'מארז מתנה מעוצב הכולל מאקרונים, בונבוניירות שוקולד, ומאפה הבית.',
      price: '₪280',
      image: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&h=600&fit=crop&q=80',
      badge: 'מומלץ למתנה',
      tags: ['מתנה', 'מארז', 'שוקולד'],
    },
  ],
};

export default menuData;
