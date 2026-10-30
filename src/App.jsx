import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  CONTACT_INFO,
  ABOUT_INFO,
  TIME_SLOTS,
  EVENT_BUILDER_CONFIG,
  A11Y_STATEMENT,
} from './data/config';
import { CATEGORIES, PRODUCTS } from './data/menuData';

/* ═══════════════════════════════════════════════════════════
   INLINE SVG ICONS (Lightweight, pure SVG, currentColor)
   ═══════════════════════════════════════════════════════════ */

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MenuToggleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const AccessibilityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="4" r="2" />
    <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.24-.11-.49-.17-.75-.17-.67 0-1.29.35-1.63.92l-2.6 4.33c-.36.6-.27 1.37.23 1.86.5.5 1.28.58 1.87.21l1.85-1.16v6.72c0 .55.45 1 1 1s1-.45 1-1v-4.5h1.5v4.5c0 .55.45 1 1 1s1-.45 1-1v-6.66l1.23.82c.57.38 1.33.32 1.84-.15.52-.47.63-1.24.23-1.83L19 13z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0l2.39 7.61L22 12l-7.61 2.39L12 22l-2.39-7.61L2 12l7.61-2.39z" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   MAIN APP COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function App() {
  /* ── 1. Cart State ───────────────────────────────────────── */
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderMode, setOrderMode] = useState('pickup'); // 'pickup' | 'delivery'

  /* Checkout Form State */
  const [checkoutForm, setCheckoutForm] = useState({
    fullName: '',
    phone: '',
    date: '',
    timeSlot: 'morning',
    fullAddress: '',
    entranceCode: '',
    giftRecipient: '',
    courierNotes: '',
    pickupNotes: '',
    generalNotes: '',
  });
  const [checkoutErrors, setCheckoutErrors] = useState({});

  /* ── 2. Menu Filtering ───────────────────────────────────── */
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  /* ── 3. Custom Event Order Builder State ──────────────────── */
  const [eventBuilder, setEventBuilder] = useState({
    orderType: EVENT_BUILDER_CONFIG.orderTypes[0].id,
    portions: EVENT_BUILDER_CONFIG.portionSizes[0].id,
    flavor: EVENT_BUILDER_CONFIG.flavorProfiles[0].id,
    date: '',
    notes: '',
  });

  /* ── 4. Accessibility System State (ת"י 5568 AA) ─────────── */
  const [a11yOpen, setA11yOpen] = useState(false);
  const [statementOpen, setStatementOpen] = useState(false);
  const [a11y, setA11y] = useState({
    fontScale: 100, // 90 to 150
    readableFont: false,
    highlightLinks: false,
    highlightHeadings: false,
    focusIndicators: false,
    stopMotion: false,
    largeCursor: false,
  });

  /* Mobile menu open */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ── 5. Effects ──────────────────────────────────────────── */

  // Header scroll & back to top
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Escape key listener to close modals/drawers
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setCartOpen(false);
        setA11yOpen(false);
        setStatementOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when drawer or modal is open
  useEffect(() => {
    const hasModal = cartOpen || a11yOpen || statementOpen || mobileMenuOpen;
    document.body.style.overflow = hasModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [cartOpen, a11yOpen, statementOpen, mobileMenuOpen]);

  // Sync Accessibility Settings to DOM
  useEffect(() => {
    document.documentElement.style.fontSize = `${a11y.fontScale}%`;

    const bodyClass = document.body.classList;
    bodyClass.toggle('a11y-readable-font', a11y.readableFont);
    bodyClass.toggle('a11y-highlight-links', a11y.highlightLinks);
    bodyClass.toggle('a11y-highlight-headings', a11y.highlightHeadings);
    bodyClass.toggle('a11y-focus-indicators', a11y.focusIndicators);
    bodyClass.toggle('a11y-stop-motion', a11y.stopMotion);
    bodyClass.toggle('a11y-large-cursor', a11y.largeCursor);
  }, [a11y]);

  /* ── 6. Cart Actions ─────────────────────────────────────── */
  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const updateCartQty = useCallback((productId, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === productId) {
            const nextQty = item.qty + delta;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  }, []);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cart]);

  const cartItemsCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }, [cart]);

  /* ── 7. Single Product WhatsApp Inquiry ──────────────────── */
  const openProductInquiry = useCallback((productName) => {
    const text = `היי מאיוש, אשמח לברר פרטים נוספים לגבי ${productName} המופיע באתר.`;
    const url = `https://wa.me/${CONTACT_INFO.whatsappNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  /* ── 8. Consolidated Cart WhatsApp Submission ────────────── */
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!checkoutForm.fullName.trim()) errors.fullName = 'נא להזין שם מלא';
    if (!checkoutForm.phone.trim()) errors.phone = 'נא להזין מספר פלאפון ליצירת קשר';
    if (orderMode === 'delivery' && !checkoutForm.fullAddress.trim()) {
      errors.fullAddress = 'נא להזין כתובת מלאה למשלוח (עיר, רחוב ומספר בית)';
    }

    if (Object.keys(errors).length > 0) {
      setCheckoutErrors(errors);
      return;
    }
    setCheckoutErrors({});

    const selectedTimeSlotObj = TIME_SLOTS.find(
      (slot) => slot.value === checkoutForm.timeSlot
    );
    const timeSlotLabel = selectedTimeSlotObj
      ? selectedTimeSlotObj.label
      : checkoutForm.timeSlot;

    const itemsSummary = cart
      .map(
        (item) =>
          `• ${item.name} (כמות: ${item.qty}) - ₪${item.price * item.qty}`
      )
      .join('\n');

    let message = `היי מאיוש! 👋 אשמח לבצע הזמנה מהאתר:\n\n`;
    message += `🍰 *פירוט המוצרים:*\n${itemsSummary}\n\n`;
    message += `💰 *סה"כ לתשלום:* ₪${cartTotal}\n`;
    message += `──────────────────\n`;
    message += `🛍️ *אופן קבלת ההזמנה:* ${
      orderMode === 'delivery' ? 'משלוח עד הבית 🛵' : 'איסוף עצמי (טייק אוואי) 🛍️'
    }\n`;
    message += `👤 *שם המזמין:* ${checkoutForm.fullName.trim()}\n`;
    message += `📱 *טלפון:* ${checkoutForm.phone.trim()}\n`;

    if (checkoutForm.date) {
      message += `📅 *תאריך מבוקש:* ${checkoutForm.date}\n`;
    }
    if (timeSlotLabel) {
      message += `⏰ *טווח שעות מועדף:* ${timeSlotLabel}\n`;
    }

    if (orderMode === 'delivery') {
      message += `📍 *כתובת מלאה למשלוח:* ${checkoutForm.fullAddress.trim()}\n`;
      if (checkoutForm.entranceCode.trim()) {
        message += `🔑 *קוד כניסה לבניין:* ${checkoutForm.entranceCode.trim()}\n`;
      }
      if (checkoutForm.giftRecipient.trim()) {
        message += `🎁 *פרטי מקבל המתנה:* ${checkoutForm.giftRecipient.trim()}\n`;
      }
      if (checkoutForm.courierNotes.trim()) {
        message += `🛵 *הערות לשליח:* ${checkoutForm.courierNotes.trim()}\n`;
      }
    } else {
      if (checkoutForm.pickupNotes.trim()) {
        message += `📝 *הערות לאיסוף:* ${checkoutForm.pickupNotes.trim()}\n`;
      }
    }

    if (checkoutForm.generalNotes.trim()) {
      message += `🎂 *הערות לקינוחים / כיתוב על העוגה / אלרגיות:*\n${checkoutForm.generalNotes.trim()}\n`;
    }

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNum}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  /* ── 9. Custom Event Builder WhatsApp Submission ─────────── */
  const handleEventBuilderSubmit = (e) => {
    e.preventDefault();

    const selectedType = EVENT_BUILDER_CONFIG.orderTypes.find(
      (t) => t.id === eventBuilder.orderType
    )?.label;
    const selectedPortions = EVENT_BUILDER_CONFIG.portionSizes.find(
      (p) => p.id === eventBuilder.portions
    )?.label;
    const selectedFlavor = EVENT_BUILDER_CONFIG.flavorProfiles.find(
      (f) => f.id === eventBuilder.flavor
    )?.label;

    let message = `היי מאיוש! ✨ אשמח להתייעץ לגבי הזמנה מותאמת אישית לאירוע:\n\n`;
    message += `🎂 *סוג ההזמנה:* ${selectedType}\n`;
    message += `👥 *כמות סועדים משוערת:* ${selectedPortions}\n`;
    message += `🍓 *פרופיל טעמים מועדף:* ${selectedFlavor}\n`;
    if (eventBuilder.date) {
      message += `📅 *תאריך מבוקש לאירוע:* ${eventBuilder.date}\n`;
    }
    if (eventBuilder.notes.trim()) {
      message += `📝 *פרטים נוספים ובקשות מיוחדות:*\n${eventBuilder.notes.trim()}\n`;
    }

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNum}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  /* ── 10. Navigation Scroll Helper ────────────────────────── */
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ── 11. Reset Accessibility Settings ────────────────────── */
  const resetA11y = () => {
    setA11y({
      fontScale: 100,
      readableFont: false,
      highlightLinks: false,
      highlightHeadings: false,
      focusIndicators: false,
      stopMotion: false,
      largeCursor: false,
    });
  };

  return (
    <div className="app-layout">
      {/* ═════════════════════════════════════════════════════
          HEADER & NAVIGATION
          ═════════════════════════════════════════════════════ */}
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="site-header__container">
          {/* Brand */}
          <a
            href="#hero"
            className="site-header__brand"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            <img
              src={CONTACT_INFO.logo}
              alt={CONTACT_INFO.businessName}
              className="site-header__logo"
            />
            <div className="site-header__brand-text">
              <span className="site-header__brand-name">{CONTACT_INFO.businessName}</span>
              <span className="site-header__brand-tagline">
                {CONTACT_INFO.businessTagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="site-header__nav" aria-label="ניווט ראשי">
            <button
              type="button"
              className="site-header__nav-link"
              onClick={() => scrollToSection('hero')}
            >
              ראשי
            </button>
            <button
              type="button"
              className="site-header__nav-link"
              onClick={() => scrollToSection('about')}
            >
              הסיפור שלי
            </button>
            <button
              type="button"
              className="site-header__nav-link"
              onClick={() => scrollToSection('menu')}
            >
              תפריט הקינוחים
            </button>
            <button
              type="button"
              className="site-header__nav-link"
              onClick={() => scrollToSection('event-builder')}
            >
              הזמנת אירוע
            </button>
            <button
              type="button"
              className="site-header__nav-link"
              onClick={() => scrollToSection('contact')}
            >
              צרו קשר
            </button>
          </nav>

          {/* Actions: Cart Button + Mobile Hamburger */}
          <div className="site-header__actions">
            <button
              type="button"
              className="cart-trigger-btn"
              onClick={() => setCartOpen(true)}
              aria-label={`פתיחת סל הקניות, ${cartItemsCount} פריטים`}
            >
              <ShoppingBagIcon />
              <span className="cart-trigger-btn__label">סל הזמנה</span>
              {cartItemsCount > 0 && (
                <span className="cart-trigger-btn__badge">{cartItemsCount}</span>
              )}
            </button>

            <button
              type="button"
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="פתיחת תפריט ניווט במובייל"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuToggleIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`mobile-nav-menu ${
            mobileMenuOpen ? 'mobile-nav-menu--open' : ''
          }`}
        >
          <nav className="mobile-nav-menu__links">
            <button
              type="button"
              className="mobile-nav-menu__link"
              onClick={() => scrollToSection('hero')}
            >
              ראשי
            </button>
            <button
              type="button"
              className="mobile-nav-menu__link"
              onClick={() => scrollToSection('about')}
            >
              הסיפור שלי
            </button>
            <button
              type="button"
              className="mobile-nav-menu__link"
              onClick={() => scrollToSection('menu')}
            >
              תפריט הקינוחים
            </button>
            <button
              type="button"
              className="mobile-nav-menu__link"
              onClick={() => scrollToSection('event-builder')}
            >
              הזמנת אירוע מותאם
            </button>
            <button
              type="button"
              className="mobile-nav-menu__link"
              onClick={() => scrollToSection('contact')}
            >
              צרו קשר
            </button>
          </nav>

          <div className="mobile-nav-menu__footer">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNum}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <WhatsAppIcon />
              <span>הודעה ישירה בוואטסאפ</span>
            </a>
          </div>
        </div>
      </header>

      {/* ═════════════════════════════════════════════════════
          MAIN CONTENT
          ═════════════════════════════════════════════════════ */}
      <main id="main-content">
        {/* ── HERO SECTION ─────────────────────────────────── */}
        <section id="hero" className="hero-section">
          <div className="hero-section__backdrop-orb hero-section__backdrop-orb--1" />
          <div className="hero-section__backdrop-orb hero-section__backdrop-orb--2" />

          <div className="section-container hero-section__container">
            <div className="hero-section__badge">
              <SparkleIcon />
              <span>{CONTACT_INFO.businessTagline}</span>
              <SparkleIcon />
            </div>

            <h1 className="hero-section__title">
              אומנות קונדיטוריה
              <br />
              <span className="hero-section__title-accent">ברמה הגבוהה ביותר</span>
            </h1>

            <p className="hero-section__subtitle">
              עוגות ראווה מעוצבות, טארטים צרפתיים ומארזי קינוחי בוטיק —
              נאפים בעבודת יד מוקפדת מחומרי הגלם הטובים בעולם.
            </p>

            <div className="hero-section__cta-group">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => scrollToSection('menu')}
              >
                <span>לתפריט הקינוחים המלא</span>
              </button>

              <button
                type="button"
                className="btn btn--outline"
                onClick={() => scrollToSection('event-builder')}
              >
                <span>הזמנה מותאמת לאירועים</span>
              </button>
            </div>

            <div className="hero-section__stats">
              <div className="hero-section__stat">
                <span className="hero-section__stat-num">{ABOUT_INFO.experienceYears}</span>
                <span className="hero-section__stat-desc">ניסיון קולינרי</span>
              </div>
              <div className="hero-section__stat-divider" />
              <div className="hero-section__stat">
                <span className="hero-section__stat-num">100%</span>
                <span className="hero-section__stat-desc">חמאה צרפתית ושוקולד מובחר</span>
              </div>
              <div className="hero-section__stat-divider" />
              <div className="hero-section__stat">
                <span className="hero-section__stat-num">טרי בלבד</span>
                <span className="hero-section__stat-desc">אפייה לפי הזמנה אישית</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ────────────────────────────────── */}
        <section id="about" className="about-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-header__tag">נעים להכיר</span>
              <h2 className="section-header__title">{ABOUT_INFO.title}</h2>
              <p className="section-header__subtitle">{ABOUT_INFO.subtitle}</p>
            </div>

            <div className="about-section__grid">
              <div className="about-section__content">
                <p className="about-section__paragraph">{ABOUT_INFO.bioParagraph1}</p>
                <p className="about-section__paragraph">{ABOUT_INFO.bioParagraph2}</p>

                <blockquote className="about-section__quote">
                  <p>{ABOUT_INFO.highlightQuote}</p>
                  <cite>— מיה, מייסדת בוטיק מאיוש</cite>
                </blockquote>

                <div className="about-section__values">
                  {ABOUT_INFO.values.map((v, idx) => (
                    <div key={idx} className="about-section__value-card">
                      <h4 className="about-section__value-title">{v.title}</h4>
                      <p className="about-section__value-desc">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-section__visual">
                <div className="about-section__card-highlight">
                  <img
                    src={CONTACT_INFO.logo}
                    alt={CONTACT_INFO.businessName}
                    className="about-section__author-logo"
                  />
                  <h3 className="about-section__author-title">
                    {CONTACT_INFO.businessName}
                  </h3>
                  <p className="about-section__author-role">{ABOUT_INFO.currentRole}</p>
                  <span className="about-section__author-edu">{ABOUT_INFO.education}</span>

                  <div className="about-section__contact-badge">
                    <PhoneIcon />
                    <a href={`tel:${CONTACT_INFO.phoneClean}`}>
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MENU & PRODUCT CATALOG SECTION ───────────────── */}
        <section id="menu" className="menu-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-header__tag">חוויית טעמים בלתי נשכחת</span>
              <h2 className="section-header__title">תפריט הקינוחים שלנו</h2>
              <p className="section-header__subtitle">
                בחרו את הקינוח המושלם עבורכם. ניתן להוסיף ישירות לסל ההזמנות
                או להתייעץ איתנו ישירות בוואטסאפ על כל פריט.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div
              className="category-filters"
              role="tablist"
              aria-label="סינון קינוחים לפי קטגוריה"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat.id}
                  className={`category-pill ${
                    selectedCategory === cat.id ? 'category-pill--active' : ''
                  }`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="category-pill__icon">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-card__image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card__image"
                      loading="lazy"
                    />
                    <div className="product-card__vignette" />
                    {product.badge && (
                      <span className="product-card__badge">{product.badge}</span>
                    )}
                  </div>

                  <div className="product-card__body">
                    <div className="product-card__header">
                      <h3 className="product-card__title">{product.name}</h3>
                      <span className="product-card__price">₪{product.price}</span>
                    </div>

                    <p className="product-card__desc">{product.description}</p>

                    {/* Dual Action Buttons */}
                    <div className="product-card__actions">
                      {/* Button 1: Add to Cart */}
                      <button
                        type="button"
                        className="btn btn--primary btn--card-action"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingBagIcon />
                        <span>+ הוספה לסל</span>
                      </button>

                      {/* Button 2: WhatsApp Inquiry */}
                      <button
                        type="button"
                        className="btn btn--card-inquiry"
                        onClick={() => openProductInquiry(product.name)}
                        title="בירור בוואטסאפ על מוצר זה"
                      >
                        <WhatsAppIcon />
                        <span>בירור על המוצר</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CUSTOM EVENT ORDER BUILDER SECTION ────────────── */}
        <section id="event-builder" className="event-builder-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-header__tag">אירועים בהתאמה אישית</span>
              <h2 className="section-header__title">תכנון עוגה או שולחן קינוחים לאירוע</h2>
              <p className="section-header__subtitle">
                חוגגים יום הולדת, חתונה, אירוסין או אירוע חברה?
                בחרו את הפרטים המתאימים לכם ושלחו אלינו לתיאום ישיר בוואטסאפ.
              </p>
            </div>

            <form
              className="event-builder-form"
              onSubmit={handleEventBuilderSubmit}
            >
              <div className="event-builder-form__grid">
                {/* 1. Order Type */}
                <div className="form-group">
                  <label htmlFor="eb-type" className="form-label">
                    סוג ההזמנה המבוקשת:
                  </label>
                  <select
                    id="eb-type"
                    className="form-select"
                    value={eventBuilder.orderType}
                    onChange={(e) =>
                      setEventBuilder({ ...eventBuilder, orderType: e.target.value })
                    }
                  >
                    {EVENT_BUILDER_CONFIG.orderTypes.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Portions Size */}
                <div className="form-group">
                  <label htmlFor="eb-portions" className="form-label">
                    כמות סועדים משוערת:
                  </label>
                  <select
                    id="eb-portions"
                    className="form-select"
                    value={eventBuilder.portions}
                    onChange={(e) =>
                      setEventBuilder({ ...eventBuilder, portions: e.target.value })
                    }
                  >
                    {EVENT_BUILDER_CONFIG.portionSizes.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Flavor Profile */}
                <div className="form-group">
                  <label htmlFor="eb-flavor" className="form-label">
                    פרופיל טעמים מועדף:
                  </label>
                  <select
                    id="eb-flavor"
                    className="form-select"
                    value={eventBuilder.flavor}
                    onChange={(e) =>
                      setEventBuilder({ ...eventBuilder, flavor: e.target.value })
                    }
                  >
                    {EVENT_BUILDER_CONFIG.flavorProfiles.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. Requested Date */}
                <div className="form-group">
                  <label htmlFor="eb-date" className="form-label">
                    תאריך מבוקש לאירוע:
                  </label>
                  <input
                    type="date"
                    id="eb-date"
                    className="form-input"
                    value={eventBuilder.date}
                    onChange={(e) =>
                      setEventBuilder({ ...eventBuilder, date: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* 5. Free Text Notes */}
              <div className="form-group" style={{ marginTop: '1.25rem' }}>
                <label htmlFor="eb-notes" className="form-label">
                  פרטים נוספים, רעיון לעיצוב או שאלות:
                </label>
                <textarea
                  id="eb-notes"
                  className="form-textarea"
                  rows="3"
                  placeholder="לדוגמה: עוגה בצבעי ורוד עתיק וזהב, כיתוב 'מזל טוב ליובל', אלרגיה לבוטנים..."
                  value={eventBuilder.notes}
                  onChange={(e) =>
                    setEventBuilder({ ...eventBuilder, notes: e.target.value })
                  }
                />
              </div>

              <div className="event-builder-form__submit-row">
                <button type="submit" className="btn btn--primary btn--large">
                  <WhatsAppIcon />
                  <span>שליחת מפרט האירוע לוואטסאפ לתיאום</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ── CONTACT & HOURS SECTION ──────────────────────── */}
        <section id="contact" className="contact-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-header__tag">אנחנו כאן עבורכם</span>
              <h2 className="section-header__title">יצירת קשר והזמנות</h2>
              <p className="section-header__subtitle">
                נשמח לענות על כל שאלה, לתאם משלוח או לייעץ בבחירת הקינוחים.
              </p>
            </div>

            <div className="contact-section__grid">
              <div className="contact-cards">
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="contact-card"
                >
                  <div className="contact-card__icon">
                    <PhoneIcon />
                  </div>
                  <div className="contact-card__info">
                    <span className="contact-card__label">שיחת טלפון ישירה</span>
                    <span className="contact-card__value">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNum}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-card--highlight"
                >
                  <div className="contact-card__icon">
                    <WhatsAppIcon />
                  </div>
                  <div className="contact-card__info">
                    <span className="contact-card__label">וואטסאפ מהיר להזמנות</span>
                    <span className="contact-card__value">
                      זמינות מהירה בימים א׳-ו׳
                    </span>
                  </div>
                </a>

                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-card__icon">
                    <InstagramIcon />
                  </div>
                  <div className="contact-card__info">
                    <span className="contact-card__label">אינסטגרם</span>
                    <span className="contact-card__value">
                      {CONTACT_INFO.instagramHandle}
                    </span>
                  </div>
                </a>

                <div className="contact-card">
                  <div className="contact-card__icon">
                    <MapPinIcon />
                  </div>
                  <div className="contact-card__info">
                    <span className="contact-card__label">אזור פעילות</span>
                    <span className="contact-card__value">
                      {CONTACT_INFO.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="hours-card">
                <div className="hours-card__header">
                  <ClockIcon />
                  <h3>שעות פעילות הסטודיו</h3>
                </div>
                <ul className="hours-card__list">
                  {CONTACT_INFO.workingHours.map((item, idx) => (
                    <li key={idx} className="hours-card__item">
                      <span className="hours-card__day">{item.day}</span>
                      <span className="hours-card__line" />
                      <span className="hours-card__hours">{item.hours}</span>
                    </li>
                  ))}
                </ul>
                <div className="hours-card__note">
                  * כל המוצרים נאפים לפי הזמנה מראש להבטחת טריות מרבית.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═════════════════════════════════════════════════════
          FOOTER
          ═════════════════════════════════════════════════════ */}
      <footer className="site-footer">
        <div className="section-container site-footer__container">
          <div className="site-footer__brand">
            <img
              src={CONTACT_INFO.logo}
              alt={CONTACT_INFO.businessName}
              className="site-footer__logo"
            />
            <span className="site-footer__title">{CONTACT_INFO.businessName}</span>
            <span className="site-footer__tagline">
              {CONTACT_INFO.businessTagline}
            </span>
          </div>

          <div className="site-footer__links">
            <button
              type="button"
              className="site-footer__link"
              onClick={() => scrollToSection('hero')}
            >
              ראשי
            </button>
            <button
              type="button"
              className="site-footer__link"
              onClick={() => scrollToSection('about')}
            >
              הסיפור שלי
            </button>
            <button
              type="button"
              className="site-footer__link"
              onClick={() => scrollToSection('menu')}
            >
              תפריט
            </button>
            <button
              type="button"
              className="site-footer__link"
              onClick={() => scrollToSection('event-builder')}
            >
              הזמנת אירוע
            </button>
            <button
              type="button"
              className="site-footer__link"
              onClick={() => setStatementOpen(true)}
            >
              הצהרת נגישות
            </button>
          </div>

          <div className="site-footer__social">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNum}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              aria-label="Phone"
            >
              <PhoneIcon />
            </a>
          </div>

          <div className="site-footer__copy">
            © {new Date().getFullYear()} {CONTACT_INFO.businessName} — כל הזכויות
            שמורות. נאפה באהבה ובתשוקה ❤️
          </div>
        </div>
      </footer>

      {/* ═════════════════════════════════════════════════════
          SLIDE-OUT SHOPPING CART DRAWER
          ═════════════════════════════════════════════════════ */}
      <div
        className={`drawer-backdrop ${cartOpen ? 'drawer-backdrop--open' : ''}`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`cart-drawer ${cartOpen ? 'cart-drawer--open' : ''}`}
        aria-label="סל ההזמנה שלך"
        role="dialog"
        aria-modal="true"
      >
        <div className="cart-drawer__header">
          <div className="cart-drawer__title-wrap">
            <ShoppingBagIcon />
            <h2 className="cart-drawer__title">סל ההזמנה שלך</h2>
            {cartItemsCount > 0 && (
              <span className="cart-drawer__count-badge">{cartItemsCount}</span>
            )}
          </div>
          <button
            type="button"
            className="cart-drawer__close-btn"
            onClick={() => setCartOpen(false)}
            aria-label="סגירת סל ההזמנה"
          >
            <CloseIcon />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-drawer__empty">
            <div className="cart-drawer__empty-icon">🧁</div>
            <h3 className="cart-drawer__empty-title">הסל שלך עדיין ריק</h3>
            <p className="cart-drawer__empty-desc">
              בחרו קינוחים מהתפריט המפנק שלנו והם יתווספו לכאן ישירות.
            </p>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                setCartOpen(false);
                scrollToSection('menu');
              }}
            >
              חזרה לתפריט הקינוחים
            </button>
          </div>
        ) : (
          <div className="cart-drawer__body">
            {/* Cart Items List */}
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item__image"
                  />
                  <div className="cart-item__details">
                    <h4 className="cart-item__name">{item.name}</h4>
                    <span className="cart-item__price-calc">
                      ₪{item.price} ליח׳ •{' '}
                      <strong className="cart-item__subtotal">
                        ₪{item.price * item.qty}
                      </strong>
                    </span>

                    <div className="cart-item__qty-controls">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateCartQty(item.id, -1)}
                        aria-label={`הפחתת כמות מ-${item.name}`}
                      >
                        -
                      </button>
                      <span className="qty-value">{item.qty}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateCartQty(item.id, 1)}
                        aria-label={`הגדלת כמות עבור ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-drawer__divider" />

            {/* Fulfillment Toggle */}
            <div className="fulfillment-toggle">
              <span className="fulfillment-toggle__label">
                איך תרצו לקבל את ההזמנה?
              </span>
              <div className="fulfillment-toggle__buttons">
                <button
                  type="button"
                  className={`fulfillment-btn ${
                    orderMode === 'pickup' ? 'fulfillment-btn--active' : ''
                  }`}
                  onClick={() => setOrderMode('pickup')}
                >
                  🛍️ איסוף עצמי (טייק אוואי)
                </button>
                <button
                  type="button"
                  className={`fulfillment-btn ${
                    orderMode === 'delivery' ? 'fulfillment-btn--active' : ''
                  }`}
                  onClick={() => setOrderMode('delivery')}
                >
                  🛵 משלוח עד הבית
                </button>
              </div>
            </div>

            {/* Checkout Customer Form */}
            <form id="checkout-form" onSubmit={handleCheckoutSubmit}>
              <div className="form-group">
                <label htmlFor="co-name" className="form-label">
                  שם מלא (חובה):
                </label>
                <input
                  type="text"
                  id="co-name"
                  className={`form-input ${
                    checkoutErrors.fullName ? 'form-input--error' : ''
                  }`}
                  placeholder="למשל: דניאל ישראלי"
                  value={checkoutForm.fullName}
                  onChange={(e) =>
                    setCheckoutForm({ ...checkoutForm, fullName: e.target.value })
                  }
                />
                {checkoutErrors.fullName && (
                  <span className="form-error">{checkoutErrors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="co-phone" className="form-label">
                  מספר פלאפון ליצירת קשר (חובה):
                </label>
                <input
                  type="tel"
                  id="co-phone"
                  className={`form-input ${
                    checkoutErrors.phone ? 'form-input--error' : ''
                  }`}
                  placeholder="למשל: 050-1234567"
                  value={checkoutForm.phone}
                  onChange={(e) =>
                    setCheckoutForm({ ...checkoutForm, phone: e.target.value })
                  }
                />
                {checkoutErrors.phone && (
                  <span className="form-error">{checkoutErrors.phone}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="co-date" className="form-label">
                    תאריך מבוקש:
                  </label>
                  <input
                    type="date"
                    id="co-date"
                    className="form-input"
                    value={checkoutForm.date}
                    onChange={(e) =>
                      setCheckoutForm({ ...checkoutForm, date: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="co-time" className="form-label">
                    טווח שעות מועדף:
                  </label>
                  <select
                    id="co-time"
                    className="form-select"
                    value={checkoutForm.timeSlot}
                    onChange={(e) =>
                      setCheckoutForm({ ...checkoutForm, timeSlot: e.target.value })
                    }
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Conditional Delivery Fields */}
              {orderMode === 'delivery' ? (
                <div className="delivery-fields-box">
                  <div className="form-group">
                    <label htmlFor="co-address" className="form-label">
                      כתובת מלאה למשלוח (עיר, רחוב ומספר בית) - חובה:
                    </label>
                    <input
                      type="text"
                      id="co-address"
                      className={`form-input ${
                        checkoutErrors.fullAddress ? 'form-input--error' : ''
                      }`}
                      placeholder="למשל: תל אביב, דיזנגוף 120"
                      value={checkoutForm.fullAddress}
                      onChange={(e) =>
                        setCheckoutForm({
                          ...checkoutForm,
                          fullAddress: e.target.value,
                        })
                      }
                    />
                    {checkoutErrors.fullAddress && (
                      <span className="form-error">
                        {checkoutErrors.fullAddress}
                      </span>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="co-entrance" className="form-label">
                        קוד כניסה לבניין (אופציונלי):
                      </label>
                      <input
                        type="text"
                        id="co-entrance"
                        className="form-input"
                        placeholder="קוד / אינטרקום"
                        value={checkoutForm.entranceCode}
                        onChange={(e) =>
                          setCheckoutForm({
                            ...checkoutForm,
                            entranceCode: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="co-gift" className="form-label">
                        מקבל מתנה (שם וטלפון):
                      </label>
                      <input
                        type="text"
                        id="co-gift"
                        className="form-input"
                        placeholder="אם ההזמנה היא מתנה למישהו"
                        value={checkoutForm.giftRecipient}
                        onChange={(e) =>
                          setCheckoutForm({
                            ...checkoutForm,
                            giftRecipient: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="co-courier" className="form-label">
                      הערות לשליח:
                    </label>
                    <input
                      type="text"
                      id="co-courier"
                      className="form-input"
                      placeholder="למשל: להניח ליד הדלת, לצלצל בפעמון..."
                      value={checkoutForm.courierNotes}
                      onChange={(e) =>
                        setCheckoutForm({
                          ...checkoutForm,
                          courierNotes: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="co-pickup" className="form-label">
                    הערות לאיסוף עצמי:
                  </label>
                  <input
                    type="text"
                    id="co-pickup"
                    className="form-input"
                    placeholder="מי אוסף / בקשה מיוחדת לגבי שעת האיסוף"
                    value={checkoutForm.pickupNotes}
                    onChange={(e) =>
                      setCheckoutForm({
                        ...checkoutForm,
                        pickupNotes: e.target.value,
                      })
                    }
                  />
                </div>
              )}

              {/* General Inscriptions / Allergies */}
              <div className="form-group">
                <label htmlFor="co-notes" className="form-label">
                  הערות לקינוחים, כיתוב על העוגה או אלרגיות:
                </label>
                <textarea
                  id="co-notes"
                  className="form-textarea"
                  rows="2"
                  placeholder="כיתוב להקדשה (למשל: 'מזל טוב אמא'), רגישויות למזון..."
                  value={checkoutForm.generalNotes}
                  onChange={(e) =>
                    setCheckoutForm({
                      ...checkoutForm,
                      generalNotes: e.target.value,
                    })
                  }
                />
              </div>
            </form>
          </div>
        )}

        {/* Cart Sticky Footer */}
        {cart.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total-row">
              <span className="cart-drawer__total-label">סה"כ לתשלום:</span>
              <span className="cart-drawer__total-sum">₪{cartTotal}</span>
            </div>

            <button
              type="submit"
              form="checkout-form"
              className="btn btn--primary btn--full btn--large"
            >
              <WhatsAppIcon />
              <span>שליחת ההזמנה לאישור בוואטסאפ</span>
            </button>
          </div>
        )}
      </aside>

      {/* ═════════════════════════════════════════════════════
          ACCESSIBILITY SYSTEM (ת"י 5568 AA)
          ═════════════════════════════════════════════════════ */}

      {/* Persistent Floating A11y Toggle Button */}
      <button
        type="button"
        className="a11y-trigger-btn"
        onClick={() => setA11yOpen(true)}
        aria-label="פתיחת תפריט נגישות"
        title="תפריט נגישות (ת״י 5568)"
      >
        <AccessibilityIcon />
      </button>

      {/* Accessibility Control Panel Modal */}
      <div
        className={`a11y-modal-backdrop ${
          a11yOpen ? 'a11y-modal-backdrop--open' : ''
        }`}
        onClick={() => setA11yOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`a11y-panel ${a11yOpen ? 'a11y-panel--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="חלונית הגדרות נגישות"
      >
        <div className="a11y-panel__header">
          <div className="a11y-panel__title-wrap">
            <AccessibilityIcon />
            <h2 className="a11y-panel__title">התאמות נגישות</h2>
          </div>
          <button
            type="button"
            className="a11y-panel__close-btn"
            onClick={() => setA11yOpen(false)}
            aria-label="סגירת חלונית נגישות"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="a11y-panel__body">
          {/* Font Scaling */}
          <div className="a11y-control-card">
            <span className="a11y-control-card__label">גודל טקסט באתר:</span>
            <div className="a11y-font-stepper">
              <button
                type="button"
                className="a11y-step-btn"
                onClick={() =>
                  setA11y((prev) => ({
                    ...prev,
                    fontScale: Math.max(90, prev.fontScale - 10),
                  }))
                }
                disabled={a11y.fontScale <= 90}
                aria-label="הקטנת גודל טקסט"
              >
                א-
              </button>
              <span className="a11y-font-percentage">{a11y.fontScale}%</span>
              <button
                type="button"
                className="a11y-step-btn"
                onClick={() =>
                  setA11y((prev) => ({
                    ...prev,
                    fontScale: Math.min(150, prev.fontScale + 10),
                  }))
                }
                disabled={a11y.fontScale >= 150}
                aria-label="הגדלת גודל טקסט"
              >
                א+
              </button>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="a11y-toggles-list">
            <button
              type="button"
              className={`a11y-toggle-btn ${
                a11y.readableFont ? 'a11y-toggle-btn--active' : ''
              }`}
              onClick={() =>
                setA11y((prev) => ({ ...prev, readableFont: !prev.readableFont }))
              }
            >
              <span>גופן קריא ופשוט</span>
              <span className="a11y-toggle-status">
                {a11y.readableFont ? 'פעיל ✓' : 'כבוי'}
              </span>
            </button>

            <button
              type="button"
              className={`a11y-toggle-btn ${
                a11y.highlightLinks ? 'a11y-toggle-btn--active' : ''
              }`}
              onClick={() =>
                setA11y((prev) => ({
                  ...prev,
                  highlightLinks: !prev.highlightLinks,
                }))
              }
            >
              <span>הדגשת קישורים וכפתורים</span>
              <span className="a11y-toggle-status">
                {a11y.highlightLinks ? 'פעיל ✓' : 'כבוי'}
              </span>
            </button>

            <button
              type="button"
              className={`a11y-toggle-btn ${
                a11y.highlightHeadings ? 'a11y-toggle-btn--active' : ''
              }`}
              onClick={() =>
                setA11y((prev) => ({
                  ...prev,
                  highlightHeadings: !prev.highlightHeadings,
                }))
              }
            >
              <span>הדגשת כותרות</span>
              <span className="a11y-toggle-status">
                {a11y.highlightHeadings ? 'פעיל ✓' : 'כבוי'}
              </span>
            </button>

            <button
              type="button"
              className={`a11y-toggle-btn ${
                a11y.focusIndicators ? 'a11y-toggle-btn--active' : ''
              }`}
              onClick={() =>
                setA11y((prev) => ({
                  ...prev,
                  focusIndicators: !prev.focusIndicators,
                }))
              }
            >
              <span>מחוון פוקוס מקלדת בולט</span>
              <span className="a11y-toggle-status">
                {a11y.focusIndicators ? 'פעיל ✓' : 'כבוי'}
              </span>
            </button>

            <button
              type="button"
              className={`a11y-toggle-btn ${
                a11y.stopMotion ? 'a11y-toggle-btn--active' : ''
              }`}
              onClick={() =>
                setA11y((prev) => ({ ...prev, stopMotion: !prev.stopMotion }))
              }
            >
              <span>עצירת אנימציות ותנועה</span>
              <span className="a11y-toggle-status">
                {a11y.stopMotion ? 'פעיל ✓' : 'כבוי'}
              </span>
            </button>

            <button
              type="button"
              className={`a11y-toggle-btn ${
                a11y.largeCursor ? 'a11y-toggle-btn--active' : ''
              }`}
              onClick={() =>
                setA11y((prev) => ({ ...prev, largeCursor: !prev.largeCursor }))
              }
            >
              <span>סמן עכבר מוגדל</span>
              <span className="a11y-toggle-status">
                {a11y.largeCursor ? 'פעיל ✓' : 'כבוי'}
              </span>
            </button>
          </div>

          <div className="a11y-panel__footer-actions">
            <button
              type="button"
              className="a11y-statement-link-btn"
              onClick={() => {
                setA11yOpen(false);
                setStatementOpen(true);
              }}
            >
              הצהרת נגישות והסדרי נגישות 📄
            </button>

            <button
              type="button"
              className="a11y-reset-btn"
              onClick={resetA11y}
            >
              איפוס כל הגדרות הנגישות
            </button>
          </div>
        </div>
      </div>

      {/* ── ACCESSIBILITY STATEMENT FULL MODAL ───────────── */}
      <div
        className={`a11y-modal-backdrop ${
          statementOpen ? 'a11y-modal-backdrop--open' : ''
        }`}
        onClick={() => setStatementOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`a11y-statement-modal ${
          statementOpen ? 'a11y-statement-modal--open' : ''
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={A11Y_STATEMENT.title}
      >
        <div className="a11y-statement-modal__header">
          <h2 className="a11y-statement-modal__title">{A11Y_STATEMENT.title}</h2>
          <button
            type="button"
            className="a11y-statement-modal__close"
            onClick={() => setStatementOpen(false)}
            aria-label="סגירת הצהרת נגישות"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="a11y-statement-modal__content">
          <p className="statement-p">{A11Y_STATEMENT.summary}</p>

          <h3 className="statement-h3">התאמות הנגישות שבוצעו באתר:</h3>
          <ul className="statement-ul">
            {A11Y_STATEMENT.features.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3 className="statement-h3">הסדרי נגישות פיזיים:</h3>
          <p className="statement-p">{A11Y_STATEMENT.physicalAccessibility}</p>

          <h3 className="statement-h3">פרטי רכז הנגישות ופניות:</h3>
          <p className="statement-p">
            אם נתקלתם בקושי בגלישה או שיש לכם הצעה לשיפור הנגישות, נשמח שתפנו
            אלינו:
          </p>
          <ul className="statement-ul">
            <li>
              <strong>איש קשר:</strong> {A11Y_STATEMENT.contactPerson.name}
            </li>
            <li>
              <strong>טלפון:</strong>{' '}
              <a href={`tel:${A11Y_STATEMENT.contactPerson.phone}`}>
                {A11Y_STATEMENT.contactPerson.phone}
              </a>
            </li>
            <li>
              <strong>וואטסאפ:</strong>{' '}
              <a
                href={`https://wa.me/${A11Y_STATEMENT.contactPerson.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {A11Y_STATEMENT.contactPerson.phone}
              </a>
            </li>
            <li>
              <strong>דוא"ל:</strong>{' '}
              <a href={`mailto:${A11Y_STATEMENT.contactPerson.email}`}>
                {A11Y_STATEMENT.contactPerson.email}
              </a>
            </li>
          </ul>

          <div className="statement-update">
            עדכון אחרון: {A11Y_STATEMENT.lastUpdated}
          </div>
        </div>
      </div>

      {/* ── BACK TO TOP FLOATING BUTTON ──────────────────── */}
      {showBackToTop && (
        <button
          type="button"
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="חזרה לראש הדף"
        >
          <ChevronUpIcon />
        </button>
      )}
    </div>
  );
}
