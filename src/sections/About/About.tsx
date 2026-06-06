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
              I like design systems that make the right thing easy and the final
              result feel like a crafted object.
            </p>
          </div>
        </div>

        <div className="about-copy">
          <SectionIntro num="01">What to know about me</SectionIntro>
          <h2 className="reveal reveal-delay-1">About</h2>

          <p className="about-lead reveal reveal-delay-2">
            I’m a software engineer based in Nigeria. I focus on clear,
            responsive interfaces that feel calm, editorial, and easy to use.
          </p>

          <p className="about-body reveal reveal-delay-3">
            I enjoy taking a rough idea, shaping the hierarchy, and turning it
            into something that feels deliberate from the first fold to the last
            footer. The work I enjoy most sits at the intersection of strong
            visual rhythm, reusable React structure, and a polished user
            experience.
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
