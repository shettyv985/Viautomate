import Link from "next/link";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-col">
        <div className="sign-up-card">
          <div className="sign-up-img">
            <img src="/images/about-card.jpg" alt="Automate with us" />
          </div>
          <div className="sign-up-card-header">
            <h3>Ready to stop wasting time on tasks that don't move the needle?</h3>
            <p>Let's build something for you</p>
          </div>
          <div className="sign-up-cta">
            <Link href="/contact">Get Started</Link>
          </div>
        </div>
      </div>

      <div className="about-us-col">
        <h3>
          We exist to free businesses from the grind of repetitive work so they
          can focus on what actually grows them.
        </h3>
        <p>
          At Viautomate, we work closely with clients to understand their
          day-to-day friction — the spreadsheets nobody wants to fill, the
          follow-ups that slip through the cracks, the processes that eat hours
          every week. Then we build smart automations, voice agents, and custom
          tools that handle it all, quietly and reliably, in the background.
        </p>
        <div className="about-us-cta">
          <Link href="/contact">Talk to us</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;