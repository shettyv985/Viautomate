"use client";

import DotGrid from "@/components/DotGrid";
import PillNav from "@/components/PillNav";
import WhoWeAre from "@/components/WhoWeAre";
import AboutUs from "@/components/AboutUs";
import MarqueeSection from "@/components/Marquee";
import Team from "@/components/Team";
import MagicBento from "@/components/MagicBento";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import {
  LanguageProvider,
  LanguageSwitcher,
  useLanguage,
} from "@/components/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

function HomeContent() {
  const { t } = useLanguage();

  return (
    <main style={{ background: '#ffffff', position: 'relative' }}>

      {/* DotGrid as full page background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <DotGrid
          dotSize={1}
          gap={15}
          baseColor="#2F293A"
          activeColor="#000000"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Navbar */}
      <LanguageSwitcher />
      <div className="site-nav-shell">
        <PillNav
          logo=""
          logoAlt="Viautomate"
          items={[
            { label: t.nav.brand, href: '/#home', ariaLabel: t.nav.brandAria },
            { label: t.nav.home, href: '/#home' },
            { label: t.nav.about, href: '/#aboutus' },
            { label: t.nav.services, href: '/#services' },
            { label: t.nav.contact, href: '/#contact' }
          ]}
          activeHref="/#home"
          baseColor="#1a1a1a"
          pillColor="#ffffff"
          pillTextColor="#000000"
          hoveredPillTextColor="#ffffff"
        />
      </div>

{/* Hero Section */}
      <div id="home" style={{ width: '100vw', height: '100vh', position: 'relative', zIndex: 1 }}>

        <style>{`
          .hero-wrapper {
            position: absolute;
            inset: 0;
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 24px;
            gap: 20px;
            margin-top: 90px;
            
          }
          .hero-label {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid rgba(10, 10, 10, 0.16);
            border-radius: 999px;
            padding: 8px 18px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2.6px;
            text-transform: uppercase;
            color: #0a0a0a;
            background: rgba(255, 255, 255, 0.78);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
          .hero-label::before {
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #0a0a0a;
            box-shadow: 0 0 0 5px rgba(10, 10, 10, 0.08);
          }
          .hero-h1 {
            font-size: clamp(28px, 5.5vw, 68px);
            font-weight: 700;
            line-height: 1.25;
            color: #0a0a0a;
            max-width: 780px;
            letter-spacing: -1px;
          }
          .hero-tagline {
            position: relative;
            font-size: clamp(14px, 1.3vw, 17px);
            color: #2e2e2e;
            max-width: 560px;
            line-height: 1.8;
            margin: 0;
            text-shadow:
              0 1px 0 rgba(255, 255, 255, 0.95),
              0 12px 34px rgba(0, 0, 0, 0.16);
          }
          .hero-tagline::before {
            content: "";
            position: absolute;
            inset: -18px -34px;
            z-index: -1;
            border-radius: 999px;
            background:
              radial-gradient(ellipse at center, rgba(255, 255, 255, 0.86) 0%, rgba(255, 255, 255, 0.54) 42%, rgba(255, 255, 255, 0) 74%);
            filter: blur(12px);
            pointer-events: none;
          }
          .hero-cta {
            display: inline-block;
            background: #0a0a0a;
            color: #fff;
            padding: 14px 36px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 15px;
            text-decoration: none;
            letter-spacing: 0.3px;
            margin-top: 4px;
          }
          @media (max-width: 430px) {
            .hero-wrapper { gap: 16px; margin-top: 70px; padding: 0 20px; }
            .hero-label { font-size: 11px; letter-spacing: 2px; padding: 5px 16px; }
            .hero-h1 { font-size: clamp(32px, 9vw, 42px); line-height: 1.3; letter-spacing: -0.5px; max-width: 100%; }
            .hero-tagline { font-size: 15px; max-width: 100%; line-height: 1.75; }
            .hero-tagline::before { inset: -16px -16px; }
            .hero-cta { padding: 13px 32px; font-size: 15px; }
          }
          @media (min-width: 431px) and (max-width: 768px) {
            .hero-wrapper { gap: 16px; margin-top: 65px; }
            .hero-h1 { font-size: clamp(28px, 6vw, 44px); max-width: 95%; }
            .hero-tagline { font-size: 14px; max-width: 90%; }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .hero-h1 { font-size: clamp(36px, 5vw, 54px); max-width: 90%; }
            .hero-tagline { font-size: 15px; }
          }
          @media (min-width: 1440px) {
            .hero-wrapper { gap: 24px; }
            .hero-h1 { max-width: 900px; }
            .hero-tagline { max-width: 520px; }
          }
        `}</style>

        <div className="hero-wrapper">
          <div className="hero-label">{t.hero.label}</div>

          <h1 className="hero-h1">
            {t.hero.headingBeforeFocus}{' '}
            <span style={{ position: 'relative', display: 'inline-block', padding: '0 6px' }}>
              <svg
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', overflow: 'visible', pointerEvents: 'none' }}
                width="115%" height="190%" viewBox="0 0 110 58" preserveAspectRatio="none"
              >
                <path
                  d="M 55 4 C 80 2, 104 14, 106 30 C 108 44, 82 54, 55 54 C 28 54, 4 44, 4 30 C 4 14, 30 6, 55 4 Z"
                  fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
              {t.hero.focus}
            </span>
            {' '}{t.hero.headingAfterFocus}{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, display: 'inline-block', position: 'relative', paddingBottom: '10px' }}>
              {t.hero.headingEmphasis}
              <svg
                style={{ position: 'absolute', left: '-2px', bottom: '-2px', overflow: 'visible', pointerEvents: 'none' }}
                width="104%" height="12px" viewBox="0 0 100 12" preserveAspectRatio="none"
              >
                <line x1="0" y1="5" x2="100" y2="2" stroke="#e00" strokeWidth="2" strokeLinecap="round" />
                <line x1="0" y1="10" x2="100" y2="7" stroke="#e00" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="hero-tagline">
            {t.hero.tagline}
          </p>

          <a href="/contact" className="hero-cta">{t.hero.cta}</a>
        </div>
      </div>

      {/* What We Do Section */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <WhoWeAre />
      </div>
      <div id="aboutus"><AboutUs /></div>
      

<Team />
<MarqueeSection />
<div id="services" style={{ position: 'relative', zIndex: 1, padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#888', marginBottom: '16px', textAlign: 'center' }}>
          {t.services.eyebrow}
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, color: '#0a0a0a', textAlign: 'center', marginBottom: '48px', letterSpacing: '-1px' }}>
          {t.services.titleLine1}<br />{t.services.titleLine2}
        </h2>
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt
          enableMagnetism
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="80, 90, 99"
          disableAnimations={false}
        />
      </div>
            <div id="contact" style={{ position: 'relative', zIndex: 1, paddingBottom: '60px' }}>
        <ContactForm />
      </div>
<Footer />
    </main>
  );
}
