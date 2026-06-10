"use client";

import { useLanguage } from "@/components/LanguageProvider";
import "./Team.css";

const Team = () => {
  const { t } = useLanguage();

  return (
    <section className="team-section">
      <div className="team-header-col">
        <p className="team-label">{t.team.label}</p>
        <h1>{t.team.title}</h1>
      </div>
      <div className="team-list">
        <div className="team-player">
          <div className="player-img">
            <img src="/images/vishal.jpg" alt="Vishal Shetty" />
          </div>
          <div className="player-copy-card">
            <div className="player-info">
              <h3>Vishal Shetty</h3>
              <p>{t.team.role}</p>
            </div>

            <div className="player-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                {t.team.social}
              </a>
            </div>
          </div>
        </div>

        <div className="team-player">
          <div className="player-img">
            <img src="/images/vishal.jpg" alt="Rohit Nair" />
          </div>
          <div className="player-copy-card">
            <div className="player-info">
              <h3>Rohit Nair</h3>
              <p>{t.team.role}</p>
            </div>

            <div className="player-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                {t.team.social}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
