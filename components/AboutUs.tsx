"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BarChart3, Database, Send, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import "./AboutUs.css";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const aboutBody = t.about.body.split("\n").filter(Boolean);
  const headingWords = useMemo(() => t.about.heading.split(" "), [t.about.heading]);
  const outcomeItems = aboutBody[3]
    ? aboutBody[3]
        .split(". ")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => (item.endsWith(".") ? item : `${item}.`))
    : [];
  const outcomeIcons = [BarChart3, Send, Database, TrendingUp];

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const words = gsap.utils.toArray<HTMLElement>(".about-us-heading-word", section);
    const heading = section.querySelector<HTMLElement>(".about-us-heading");
    if (!words.length || !heading) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(words, { clearProps: "all", opacity: 1 });
      return;
    }

    const tween = gsap.fromTo(
      words,
      {
        yPercent: 115,
        opacity: 0,
        rotateX: -24,
      },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.045,
        paused: true,
      },
    );

    const trigger = ScrollTrigger.create({
      trigger: heading,
      start: "top 78%",
      once: true,
      onEnter: () => tween.play(0),
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, { scope: sectionRef, dependencies: [t.about.heading] });

  return (
    <section className="about-us" ref={sectionRef}>
      <h3 className="about-us-heading" aria-label={t.about.heading}>
        {headingWords.map((word, index) => (
          <span key={`${word}-${index}`}>
            <span className="about-us-heading-word-wrap" aria-hidden="true">
              <span className="about-us-heading-word">{word}</span>
            </span>
            {index < headingWords.length - 1 ? " " : null}
          </span>
        ))}
      </h3>

      <div className="about-us-layout">
        <div className="about-us-col about-us-card-col">
          <div className="sign-up-card">
            <div className="sign-up-img">
              <img src="/auto.png" alt={t.about.imageAlt} />
            </div>
            <div className="sign-up-card-header">
              <h3>{t.about.cardTitle}</h3>
              <p>{t.about.cardText}</p>
            </div>
          </div>
        </div>

        <div className="about-us-col about-us-copy-col">
          <div className="about-us-copy">
            {aboutBody[0] ? <p>{aboutBody[0]}</p> : null}
            {aboutBody[1] ? (
              <p className="about-us-copy-emphasis">{aboutBody[1]}</p>
            ) : null}
            {aboutBody[2] ? <p>{aboutBody[2]}</p> : null}
            {outcomeItems.length ? (
              <ul className="about-us-outcomes" aria-label="Automation outcomes">
                {outcomeItems.map((item, index) => {
                  const OutcomeIcon = outcomeIcons[index % outcomeIcons.length];

                  return (
                    <li key={item}>
                      <span className="about-us-outcome-icon" aria-hidden="true">
                        <OutcomeIcon size={17} strokeWidth={2.4} />
                      </span>
                      <span className="about-us-outcome-text">{item}</span>
                      <span className="about-us-outcome-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
          <div className="about-us-cta">
            <Link href="/contact" className="hero-cta">
              <span className="hero-cta-label">{t.hero.cta}</span>
              <ArrowRight className="hero-cta-icon" aria-hidden="true" strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
