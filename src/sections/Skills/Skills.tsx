import React from "react";
import SectionIntro from "../../utils/SectionIntro";
import SkillCard from "../../components/SkillCard";
import { skills } from "../../../myData";
import "./Skills.css";

export default function Skills() {
  const skillList = skills.map((skill) => (
    <SkillCard key={skill} skillText={skill} size={40} responsiveSize={25} />
  ));

  return (
    <section className="section" id="skills">
      <div className="skills-container grid">
        <SectionIntro>What I use to craft</SectionIntro>

        <div>
          <h2>My Skills</h2>
          <div className="skills-data">{skillList}</div>
        </div>
      </div>
    </section>
  );
}
