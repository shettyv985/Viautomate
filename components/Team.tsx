import "./Team.css";

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-header-col">
        <p className="team-label">The People</p>
        <h1>Team</h1>
      </div>
      <div className="team-list">
        <div className="team-player">
          <div className="player-img">
            <img src="/images/varun.jpg" alt="Varun Shetty" />
          </div>
          <div className="player-info">
            <h3>Varun Shetty</h3>
            <p>Co-Founder</p>
          </div>
          <div className="player-desc">
            <p>
              Varun leads client strategy and automation architecture at
              Viautomate. He digs deep into client workflows to find exactly
              where time is being lost and builds systems that eliminate it.
            </p>
          </div>
          <div className="player-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>

        <div className="team-player">
          <div className="player-img">
            <img src="/images/vishal.jpg" alt="Vishal Shetty" />
          </div>
          <div className="player-info">
            <h3>Vishal Shetty</h3>
            <p>Co-Founder</p>
          </div>
          <div className="player-desc">
            <p>
              Vishal drives the technical side of Viautomate — from building
              voice agents to crafting custom websites and integrations that
              make automation actually work in the real world.
            </p>
          </div>
          <div className="player-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;