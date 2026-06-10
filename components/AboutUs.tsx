"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import "./AboutUs.css";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="about-us">
      <div className="about-us-col">
        <div className="sign-up-card">
          <div className="sign-up-img">
            <img src="/images/about-card.jpg" alt={t.about.imageAlt} />
          </div>
          <div className="sign-up-card-header">
            <h3>{t.about.cardTitle}</h3>
            <p>{t.about.cardText}</p>
          </div>
          <div className="sign-up-cta">
            <Link href="/contact">{t.about.cardCta}</Link>
          </div>
        </div>
      </div>

      <div className="about-us-col">
        <h3>{t.about.heading}</h3>
        <p>{t.about.body}</p>
        <div className="about-us-cta">
          <Link href="/contact">{t.about.cta}</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
