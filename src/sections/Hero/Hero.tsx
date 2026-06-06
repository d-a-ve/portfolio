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
          I design and build high-contrast React and TypeScript interfaces with
          strong hierarchy, deliberate motion, and a careful eye for detail.
        </p>

        <div className="hero-meta reveal reveal-delay-4">
          <dl className="hero-points">
            <div>
              <dt>Based in</dt>
              <dd>Nigeria</dd>
            </div>
          </dl>

          <a className="hero-cta" href="#projects">
            <span>View selected work</span>
            <span className="hero-cta__arrow" aria-hidden="true">
              &#8599;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
