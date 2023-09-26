import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJs } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useMediaQuery } from "react-responsive";

type SkillCardPropType = {
	skillText: string;
	size: string | number;
	responsiveSize: string | number;
};

export default function SkillCard({
	skillText,
	size,
	responsiveSize,
}: SkillCardPropType) {
	const isSm = useMediaQuery({ query: "(max-width: 568px)" });
	const mediaSize = isSm ? responsiveSize : size;
	let icon;

	switch (skillText.toLocaleLowerCase()) {
		case "html":
			icon = <FaHtml5 size={mediaSize} />;
			break;
		case "css":
			icon = <FaCss3 size={mediaSize} />;
			break;
		case "javascript":
			icon = <FaJs size={mediaSize} />;
			break;
		case "react":
			icon = <FaReact size={mediaSize} />;
			break;
		case "tailwindcss":
			icon = <SiTailwindcss size={mediaSize} />;
			break;
		case "typescript":
			icon = <SiTypescript size={mediaSize} />;
			break;
		case "firebase":
			icon = <SiFirebase size={mediaSize} />;
			break;
		default:
			icon = null;
	}

	return (
		<div className="skills-data-details">
			{/* when icon has a value display it */}
			{icon !== null && icon}
			<p>{skillText}</p>
		</div>
	);
}
