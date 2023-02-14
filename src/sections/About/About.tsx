import React from "react";
import Socials from "../../components/Socials";
import { useMediaQuery } from "react-responsive";
import SectionIntro from "../../utils/SectionIntro";
import "./About.css";

export default function About() {
  const isMd = useMediaQuery({ query: "(max-width: 768px)" }); // 768px

  return (
    <section className="section about" id="about">
      <div className="about-me">
        {!isMd && (
          <div className="about-img">
            <img src="../../assets/dave01.jpg" alt="David Aronmwan" />
          </div>
        )}

        <div className="about-text">
          <div className="about-text-details grid">
            <SectionIntro>What to know about Me</SectionIntro>

            <div className="about-text-data">
              <h2>About me</h2>
              <p>
                I am a front-end web developer based in Lagos, Nigeria. I solve
                problems through code. During my free time, I watch videos and
                read articlces to increase my knowledge and skills. I watch
                animes and read manga to relax.
              </p>

              <p>
                I have more than a year experience in building solid and
                intuitive web apps and websites. The tools I use to work are{" "}
                <a href="#skills">here</a>. And my works can be seen{" "}
                <a href="#projects"> here</a>.
              </p>

              <p>
                I love combining the world of logic and creative design to make
                eye-catching , accessible, and user friendly webapps and
                websites. I am excited to make the leap and continue refining my
                skills to deliver the best quality of service.
              </p>

              <p>
                Ready to bring your ideas to life? <a href="#">Contact Me</a>.
                You can also connect with me on social media here:
              </p>
            </div>

            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}
