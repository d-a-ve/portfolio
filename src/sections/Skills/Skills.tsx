import React from "react";
import SectionIntro from "../../utils/SectionIntro";
import SkillCard from "../../components/SkillCard";
import { skills } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  const skillList = skills.map((skill) => (
    <SkillCard key={skill} skillText={skill} size={28} responsiveSize={22} />
  ));

  return (
    <section className="section" id="skills">
      <div className="skills-container grid">
        <SectionIntro num="02">What I use to craft</SectionIntro>

        <div className="skills-hero">
          <h2 className="reveal">Skills</h2>
          <p className="reveal reveal-delay-1">
            The stack I reach for when I need to ship complete web applications,
            connect frontends to backend services, and keep the product fast,
            maintainable, and easy to scale.
          </p>
        </div>

        <div className="skills-scroll reveal reveal-delay-2">
          <div className="skills-data">{skillList}</div>
        </div>
      </div>
    </section>
  );
}
