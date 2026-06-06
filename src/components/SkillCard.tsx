import {
  FaAccessibleIcon,
  FaCss3,
  FaGitAlt,
  FaLayerGroup,
  FaReact,
} from "react-icons/fa";
import { SiFirebase, SiFramer, SiTypescript, SiVite } from "react-icons/si";
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
		case "react":
			icon = <FaReact size={mediaSize} />;
			break;
		case "typescript":
			icon = <SiTypescript size={mediaSize} />;
			break;
		case "css":
			icon = <FaCss3 size={mediaSize} />;
			break;
		case "design systems":
			icon = <FaLayerGroup size={mediaSize} />;
			break;
		case "accessibility":
			icon = <FaAccessibleIcon size={mediaSize} />;
			break;
		case "framer motion":
			icon = <SiFramer size={mediaSize} />;
			break;
		case "vite":
			icon = <SiVite size={mediaSize} />;
			break;
		case "firebase":
			icon = <SiFirebase size={mediaSize} />;
			break;
		case "git":
			icon = <FaGitAlt size={mediaSize} />;
			break;
		default:
			icon = null;
	}

	return (
		<div className="skills-data-details">
			<div className="skills-icon" aria-hidden="true">
				{icon !== null && icon}
			</div>
			<p>{skillText}</p>
		</div>
	);
}
