"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";
import "./WhoWeAre.css";

gsap.registerPlugin(ScrollTrigger);

const placeholderImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect width='400' height='500' fill='%23333'/%3E%3C/svg%3E";

const WhoWeAre = () => {
  const { language, t } = useLanguage();

  useGSAP(() => {
    const whoweareScroll = document.querySelector(".whoweare-scroll") as HTMLElement;
    if (!whoweareScroll) return;

    const containerWidth = whoweareScroll.offsetWidth;
    const viewportWidth = window.innerWidth;
    const maxTranslateX = containerWidth - viewportWidth;
    const smoothScrollX = gsap.quickTo(whoweareScroll, "x", {
      duration: 0.45,
      ease: "power3.out",
    });

    const images = [
      { id: "#whoweare-img-1", endTranslateX: -800 },
      { id: "#whoweare-img-2", endTranslateX: -1200 },
      { id: "#whoweare-img-3", endTranslateX: -600 },
      { id: "#whoweare-img-4", endTranslateX: -1000 },
      { id: "#whoweare-img-5", endTranslateX: -900 },
    ];
    const smoothImages = images
      .map((img) => {
        const element = document.querySelector(img.id) as HTMLElement | null;
        if (!element) return null;

        return {
          ...img,
          element,
          setX: gsap.quickTo(element, "x", {
            duration: 0.55,
            ease: "power3.out",
          }),
        };
      })
      .filter((img): img is NonNullable<typeof img> => Boolean(img));
    const triggers: ScrollTrigger[] = [];

    // Pin + horizontal scroll, visible from start
    triggers.push(ScrollTrigger.create({
      trigger: ".whoweare",
      start: "top top",
      end: `+=${window.innerHeight * 6}`,
      pin: true,
      pinSpacing: true,
      scrub: 1.4,
      anticipatePin: 0.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const ap = self.progress;
        const translateX = -Math.min(ap * maxTranslateX, maxTranslateX);
        smoothScrollX(translateX);
      },
    }));

    // Parallax on images
    smoothImages.forEach((img) => {
      triggers.push(ScrollTrigger.create({
        trigger: ".whoweare",
        start: "top top",
        end: `+=${window.innerHeight * 6}`,
        scrub: 1.4,
        onUpdate: (self) => {
          img.setX(img.endTranslateX * self.progress);
        },
      }));
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      gsap.killTweensOf(whoweareScroll);
      smoothImages.forEach((img) => gsap.killTweensOf(img.element));
    };
  }, []);

  return (
    <section className="whoweare" data-language={language}>
      <div className="whoweare-container">
        <div className="whoweare-scroll">
          <div className="whoweare-header">
            <h1>{t.whoWeAre.title}</h1>
          </div>
          <div className="whoweare-img" id="whoweare-img-1">
            <img src="/1.png" alt={t.whoWeAre.serviceAlt} />
          </div>
          <div className="whoweare-img" id="whoweare-img-2">
            <img src="/2.png" alt={t.whoWeAre.serviceAlt} />
          </div>
          <div className="whoweare-img" id="whoweare-img-3">
            <img src="/3.png" alt={t.whoWeAre.serviceAlt} />
          </div>
          <div className="whoweare-img" id="whoweare-img-4">
            <img src="/4.png" alt={t.whoWeAre.serviceAlt} />
          </div>
          <div className="whoweare-img" id="whoweare-img-5">
            <img src="/5.png" alt={t.whoWeAre.serviceAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
