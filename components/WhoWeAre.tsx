"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhoWeAre.css";

gsap.registerPlugin(ScrollTrigger);

const placeholderImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect width='400' height='500' fill='%23333'/%3E%3C/svg%3E";

const WhoWeAre = () => {
  useGSAP(() => {
    const whoweareScroll = document.querySelector(".whoweare-scroll") as HTMLElement;
    if (!whoweareScroll) return;

    const containerWidth = whoweareScroll.offsetWidth;
    const viewportWidth = window.innerWidth;
    const maxTranslateX = containerWidth - viewportWidth;

    const images = [
      { id: "#whoweare-img-1", endTranslateX: -800 },
      { id: "#whoweare-img-2", endTranslateX: -1200 },
      { id: "#whoweare-img-3", endTranslateX: -600 },
      { id: "#whoweare-img-4", endTranslateX: -1000 },
      { id: "#whoweare-img-5", endTranslateX: -900 },
    ];

    // Pin + horizontal scroll, visible from start
    ScrollTrigger.create({
      trigger: ".whoweare",
      start: "top top",
      end: `+=${window.innerHeight * 6}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      anticipatePin: 0.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const ap = self.progress;
        const translateX = -Math.min(ap * maxTranslateX, maxTranslateX);
        gsap.set(whoweareScroll, { x: translateX });
      },
    });

    // Parallax on images
    images.forEach((img) => {
      ScrollTrigger.create({
        trigger: ".whoweare",
        start: "top top",
        end: `+=${window.innerHeight * 6}`,
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(img.id, { x: `${img.endTranslateX * self.progress}px` });
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="whoweare">
      <div className="whoweare-container">
        <div className="whoweare-scroll">
          <div className="whoweare-header">
            <h1>What We Do</h1>
          </div>
          <div className="whoweare-img" id="whoweare-img-1">
            <img src={placeholderImg} alt="Service" />
          </div>
          <div className="whoweare-img" id="whoweare-img-2">
            <img src={placeholderImg} alt="Service" />
          </div>
          <div className="whoweare-img" id="whoweare-img-3">
            <img src={placeholderImg} alt="Service" />
          </div>
          <div className="whoweare-img" id="whoweare-img-4">
            <img src={placeholderImg} alt="Service" />
          </div>
          <div className="whoweare-img" id="whoweare-img-5">
            <img src={placeholderImg} alt="Service" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;