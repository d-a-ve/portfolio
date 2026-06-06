import SectionIntro from "../../utils/SectionIntro";
import Button from "../../utils/Button";
import Socials from "../../components/Socials";
import "./Contact.css";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section className="section contact" id="contact">
      <div className="contact-shell">
        <SectionIntro num="05">Say hi</SectionIntro>

        <h2 className="contact-heading reveal">
          Say hi.<br />
          Let&apos;s talk
          <span className="contact-heading__arrow" aria-hidden="true">
            &#8599;
          </span>
        </h2>

        <div className="contact-grid">
          <p className="contact-copy reveal reveal-delay-1">
            If you need a landing page, product interface, or a thoughtful
            front-end partnership, I&apos;d love to hear about it.
          </p>

          <div className="contact-side reveal reveal-delay-2">
            <div className="contact-actions">
              <Button email={true} link="#" linkText="Email me" />
              <Socials />
            </div>

            <p className="contact-note">
              Usually responding within a day or two.
            </p>
          </div>
        </div>

        <div className="contact-footer">
          <span>David Aronmwan</span>
          <span>Software Engineer</span>
          <span>&copy; {year}</span>
        </div>
      </div>
    </section>
  );
}
