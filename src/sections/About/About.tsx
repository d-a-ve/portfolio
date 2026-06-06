import SectionIntro from "../../utils/SectionIntro";
import Socials from "../../components/Socials";
import Button from "../../utils/Button";
import "./About.css";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <div className="about-visual reveal">
          <div className="about-image">
            <img src="/assets/dave01.jpg" alt="David Aronmwan" loading="lazy" />
          </div>

          <div className="about-quote">
            <p>
              I care about turning systems into smooth, reliable,
              scalable products that still feel simple for people to use.
            </p>
          </div>
        </div>

        <div className="about-copy">
          <SectionIntro num="01">What to know about me</SectionIntro>
          <h2 className="reveal reveal-delay-1">About</h2>

          <p className="about-lead reveal reveal-delay-2">
            I’m a software engineer based in Nigeria. I build and lead teams to
            deliver complete web applications that feel polished from the first
            interaction to the last deployment.
          </p>

          <p className="about-body reveal reveal-delay-3">
            Recently, I led a team of four to create an AI backend generator
            with chat, in-browser code editing, Git tracking, database and
            environment management, live logs, and subscription payments. I like
            moving between frontend, backend, and product decisions until the
            whole system feels like one smooth experience.
          </p>

          <dl className="about-details reveal reveal-delay-4">
            <div>
              <dt>Location</dt>
              <dd>Nigeria</dd>
            </div>
          </dl>

          <div className="about-actions reveal reveal-delay-4">
            <Button email={true} link="#" linkText="Email me" />
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}
