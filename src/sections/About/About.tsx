import React from "react";
import Socials from "../../components/Socials";
import { useMediaQuery } from "react-responsive";
import SectionIntro from "../../utils/SectionIntro";
import { directToEmail } from "../../utils/Button";
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
								I'm a budding React Frontend developer based in Lagos, Nigeria.
								As a junior developer, I'm passionate about solving problems and
								crafting visually engaging and user-friendly web solutions with
								React and Typescript. I'm committed to continuous learning,
								always striving to improve my skills and create captivating
								digital experiences.
							</p>

							<p>
								Let's collaborate and bring your web ideas to life.{" "}
								<a
									href="#"
									onClick={(e) => {
										directToEmail(e, true);
									}}>
									Contact Me
								</a>
								. You can also connect with me on social media here:
							</p>
						</div>

						<Socials />
					</div>
				</div>
			</div>
		</section>
	);
}
