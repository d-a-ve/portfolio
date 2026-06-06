import Button, { RESUME_URL } from "../../utils/Button";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-top reveal">
        <p className="eyebrow">Software Engineer</p>
      </div>

      <h1 className="hero-title">
        <span className="reveal reveal-delay-1">David</span>
        <span className="reveal reveal-delay-2">
          Aronmwan<span className="hero-title__dot">.</span>
        </span>
      </h1>

      <div className="hero-foot">
        <p className="hero-summary reveal reveal-delay-3">
          I build complete web applications from frontend to backend, leading
          teams and shaping reliable systems with React, TypeScript, Node.js,
          and clean product thinking.
        </p>

        <div className="hero-meta reveal reveal-delay-4">
          <dl className="hero-points">
            <div>
              <dt>Based in</dt>
              <dd>Nigeria</dd>
            </div>
          </dl>

          <div className="hero-actions">
            <Button
              link={RESUME_URL}
              linkText="Resume"
              newTab
              variant="primary"
            />

            <a className="hero-cta hero-cta--secondary" href="#projects">
              <span>View selected work</span>
              <span className="hero-cta__arrow" aria-hidden="true">
                &#8599;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
