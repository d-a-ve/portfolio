import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import SectionIntro from "../../utils/SectionIntro";
import { experience } from "../../data/experience";
import "./Experience.css";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="section experience" id="experience">
      <div className="experience-container grid">
        <SectionIntro num="04">How I work</SectionIntro>

        <div className="experience-hero">
          <h2 className="reveal">Experience</h2>

          <p className="experience-lead reveal reveal-delay-1">
            A short timeline of the habits, project work, and design choices
            that shape how I build modern interfaces.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((entry, index) => {
            const isOpen = openIndex === index;
            const panelId = `experience-panel-${index}`;

            return (
              <article
                className={`experience-card ${isOpen ? "is-open" : ""}`}
                key={`${entry.title}-${entry.duration}`}
              >
                <button
                  type="button"
                  className="experience-toggle"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className="experience-duration">{entry.duration}</span>

                  <span className="experience-headline">
                    <span className="experience-role">
                      <h3>{entry.title}</h3>
                      {entry.type ? (
                        <span className="experience-type">{entry.type}</span>
                      ) : null}
                    </span>
                    <span className="experience-company">{entry.company}</span>
                  </span>

                  <span className="experience-icon" aria-hidden="true">
                    <FiPlus size={22} />
                  </span>
                </button>

                <div className="experience-panel" id={panelId} hidden={!isOpen}>
                  <ul className="experience-highlights">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
