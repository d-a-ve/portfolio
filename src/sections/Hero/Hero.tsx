import React from "react";
import Button from "../../utils/Button";
import SectionIntro from "../../utils/SectionIntro";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div className="hero-text-details">
          <SectionIntro>Frontend Developer</SectionIntro>

          <div className="main-hero-text">
            <div className="hero-message">
              <h1>
                I'm <span id="david">David Aronmwan</span>
              </h1>
              <p>
                I love to craft solid and intuitive web apps and websites with
                great user experiences.
              </p>
            </div>
            <Button
              email={false}
              link="#projects"
              linkText="Check out my Crafts"
            />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <svg
          role="img"
          aria-labelledby="david"
          className="hero-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path"
            d="M27.6,-34.6C33.8,-27.7,35.6,-17.1,36.7,-7C37.8,3.1,38.3,12.8,34.9,21.5C31.5,30.3,24.1,38.2,15.7,39.9C7.2,41.6,-2.3,37.1,-10.2,32.3C-18,27.6,-24.2,22.5,-27.2,16.2C-30.1,10,-29.9,2.4,-28.4,-4.8C-26.9,-12,-24.1,-18.7,-19.1,-25.7C-14.2,-32.8,-7.1,-40.3,1.8,-42.4C10.7,-44.6,21.4,-41.4,27.6,-34.6Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
          ></path>
          <clipPath id="cp">
            <use href="#path" />
          </clipPath>
          <image
            className="hero-svg-img"
            xlinkHref="../../assets/dave aronmwan02.png"
            x="10"
            y="13"
            clipPath="url(#cp)"
          />
        </svg>
      </div>
    </section>
  );
}
