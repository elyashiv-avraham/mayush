import { useState, useEffect, useRef, useCallback } from 'react';
import config from './data/config';
import menuData from './data/menuData';

/* ═══════════════════════════════════════════════════════════
   ICONS — inline SVG components (no external icon dependency)
   ═══════════════════════════════════════════════════════════ */

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
);
const TikTokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.1a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.47z"/></svg>
);
const ChevronUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
);
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.39 7.61L22 12l-7.61 2.39L12 22l-2.39-7.61L2 12l7.61-2.39z"/></svg>
);

/* ═══════════════════════════════════════════════════════════
   HEADER COMPONENT
   ═══════════════════════════════════════════════════════════ */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a className="header__brand" href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <img src={config.brand.logo} alt={config.brand.nameHe} className="header__logo" />
          <span className="header__name">{config.brand.nameHe}</span>
        </a>

        <nav className="header__nav" aria-label="ניווט ראשי">
          {config.nav.map((item) => (
            <button key={item.id} className="header__nav-link" onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button className="header__mobile-toggle" onClick={() => setMobileOpen((v) => !v)} aria-label="תפריט">
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          {config.nav.map((item) => (
            <button key={item.id} className="mobile-menu__link" onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mobile-menu__social">
          <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
          <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
        </div>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Decorative elements */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__particles">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="hero__particle" style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <SparkleIcon />
          <span>{config.brand.taglineHe}</span>
          <SparkleIcon />
        </div>
        <h1 className="hero__headline">
          {config.hero.headline.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero__subline">{config.hero.subline}</p>
        <div className="hero__cta-row">
          <button className="btn btn--primary" onClick={() => scrollTo(config.hero.ctaPrimary.targetId)}>
            {config.hero.ctaPrimary.label}
          </button>
          <a className="btn btn--outline" href={config.hero.ctaSecondary.href} target="_blank" rel="noopener noreferrer">
            {config.hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT SECTION
   ═══════════════════════════════════════════════════════════ */

function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className={`about ${visible ? 'about--visible' : ''}`} ref={ref}>
      <div className="section-container">
        <h2 className="section-heading">{config.about.heading}</h2>
        <div className="about__grid">
          <div className="about__text">
            {config.about.paragraphs.map((p, i) => (
              <p key={i} className="about__paragraph">{p}</p>
            ))}
          </div>
          <blockquote className="about__quote">
            <div className="about__quote-mark">״</div>
            <p>{config.about.highlightQuote.replace(/[״"]/g, '')}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PRODUCT CARD
   ═══════════════════════════════════════════════════════════ */

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`product-card ${visible ? 'product-card--visible' : ''}`}
      style={{ '--delay': `${index * 0.07}s` }}
    >
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
        <div className="product-card__vignette" />
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{product.price}</span>
          <a
            className="product-card__order-btn"
            href={config.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            הזמינו
          </a>
        </div>
      </div>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════
   MENU SECTION
   ═══════════════════════════════════════════════════════════ */

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? menuData.products
      : menuData.products.filter((p) => p.categoryId === activeCategory);

  return (
    <section id="menu" className="menu">
      <div className="section-container">
        <h2 className="section-heading">התפריט</h2>
        <p className="section-subheading">מבחר היצירות שלנו — כולן נוצרות בעבודת יד, מחומרי גלם מובחרים.</p>

        {/* Category Filter Pills */}
        <div className="menu__filters" role="tablist" aria-label="סנן לפי קטגוריה">
          {menuData.categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`menu__filter-pill ${activeCategory === cat.id ? 'menu__filter-pill--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="menu__filter-icon">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="menu__grid" key={activeCategory}>
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════════════════════ */

function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className={`contact ${visible ? 'contact--visible' : ''}`} ref={ref}>
      <div className="section-container">
        <h2 className="section-heading">{config.contact.heading}</h2>
        <p className="section-subheading">{config.contact.subheading}</p>

        <div className="contact__grid">
          {/* Info cards */}
          <div className="contact__cards">
            <a className="contact__card" href={config.contact.phone.href}>
              <span className="contact__card-icon"><PhoneIcon /></span>
              <span className="contact__card-label">טלפון</span>
              <span className="contact__card-value">{config.contact.phone.display}</span>
            </a>
            <a className="contact__card" href={config.contact.email.href}>
              <span className="contact__card-icon"><MailIcon /></span>
              <span className="contact__card-label">אימייל</span>
              <span className="contact__card-value">{config.contact.email.display}</span>
            </a>
            <div className="contact__card">
              <span className="contact__card-icon"><MapPinIcon /></span>
              <span className="contact__card-label">כתובת</span>
              <span className="contact__card-value">{config.contact.address}</span>
            </div>
          </div>

          {/* Working hours */}
          <div className="contact__hours-card">
            <div className="contact__hours-header">
              <ClockIcon />
              <span>שעות פעילות</span>
            </div>
            <ul className="contact__hours-list">
              {config.contact.workingHours.map((wh, i) => (
                <li key={i} className="contact__hours-row">
                  <span className="contact__hours-day">{wh.day}</span>
                  <span className="contact__hours-dot" />
                  <span className="contact__hours-time">{wh.hours}</span>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary contact__whatsapp-btn" href={config.social.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              <span>שלחו הודעה בוואטסאפ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={config.brand.logo} alt={config.brand.nameHe} className="footer__logo" />
          <span className="footer__brand-name">{config.brand.nameHe}</span>
          <span className="footer__brand-tagline">{config.brand.taglineHe}</span>
        </div>

        <div className="footer__social">
          <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
          <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
          <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
          <a href={config.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon /></a>
        </div>

        <div className="footer__copy">
          <span>{config.footer.copyright.replace('{year}', year)}</span>
          <span className="footer__made">{config.footer.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   BACK TO TOP BUTTON
   ═══════════════════════════════════════════════════════════ */

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${show ? 'back-to-top--show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="חזרה למעלה"
    >
      <ChevronUpIcon />
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP ROOT
   ═══════════════════════════════════════════════════════════ */

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
