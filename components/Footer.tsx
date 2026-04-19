"use client";
import "./Footer.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { RiLinkedinBoxLine, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!socialIconsRef.current) return;
    const icons = socialIconsRef.current.querySelectorAll(".icon");
    gsap.set(icons, { opacity: 0, x: -40 });
    ScrollTrigger.create({
      trigger: socialIconsRef.current,
      start: "top 90%",
      once: true,
      animation: gsap.to(icons, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: -0.1,
        ease: "power3.out",
      }),
    });
  }, { scope: socialIconsRef });

  return (
    <div className="footer">
      <div className="footer-meta">
        <div className="container footer-meta-header">
          <div className="footer-meta-col">
            <div className="footer-meta-block">
              <div className="footer-meta-logo">
                <h3 className="lg">Viautomate</h3>
              </div>
              <h2>Stop doing boring work.<br />Let us automate it.</h2>
            </div>
          </div>
          <div className="footer-meta-col">
            <div className="footer-nav-links">
              <Link href="/"><h3>Home</h3></Link>
              <Link href="/about"><h3>About</h3></Link>
              <Link href="/services"><h3>Services</h3></Link>
              <Link href="/contact"><h3>Contact</h3></Link>
            </div>
          </div>
        </div>

        <div className="container footer-socials">
          <div className="footer-meta-col">
            <div className="footer-socials-wrapper" ref={socialIconsRef}>
              <div className="icon"><RiLinkedinBoxLine /></div>
              <div className="icon"><RiInstagramLine /></div>
              <div className="icon"><RiTwitterXLine /></div>
            </div>
          </div>
          <div className="footer-meta-col">
            <p>
              We build automations, voice agents, and websites that free your
              team from the tasks nobody wants to do.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-outro">
        <div className="container">
          <div className="footer-header">
            <h1 className="footer-big-text">VIAUTOMATE</h1>
          </div>
          <div className="footer-copyright">
            <p>Built by — <span>Varun & Vishal Shetty</span></p>
            <p>All rights reserved &copy; 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;