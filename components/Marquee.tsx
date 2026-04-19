import "./Marquee.css";

const MarqueeSection = () => {
  const items = ["Workflow Automation", "Voice Agents", "Web Development", "Spreadsheet Freedom", "Smart Systems"];

  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-track">
          {items.map((item, i) => (
            <h1 key={i}>{item}</h1>
          ))}
          {items.map((item, i) => (
            <h1 key={`dup-${i}`}>{item}</h1>
          ))}
        </div>
        <div className="marquee-track">
          {items.map((item, i) => (
            <h1 key={i}>{item}</h1>
          ))}
          {items.map((item, i) => (
            <h1 key={`dup-${i}`}>{item}</h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;