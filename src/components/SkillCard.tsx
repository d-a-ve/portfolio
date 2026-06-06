import {
  FaCode,
  FaGitAlt,
  FaLayerGroup,
  FaReact,
} from "react-icons/fa";
import {
  SiAppwrite,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiReactquery,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
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
		case "javascript":
			icon = <SiJavascript size={mediaSize} />;
			break;
		case "node.js":
		case "nodejs":
			icon = <SiNodedotjs size={mediaSize} />;
			break;
		case "express.js":
		case "expressjs":
			icon = <SiExpress size={mediaSize} />;
			break;
		case "react":
		case "react.js":
		case "reactjs":
			icon = <FaReact size={mediaSize} />;
			break;
		case "typescript":
			icon = <SiTypescript size={mediaSize} />;
			break;
		case "next.js":
		case "nextjs":
			icon = <SiNextdotjs size={mediaSize} />;
			break;
		case "tailwind css":
			icon = <SiTailwindcss size={mediaSize} />;
			break;
		case "axios":
			icon = <FaCode size={mediaSize} />;
			break;
		case "postman":
			icon = <SiPostman size={mediaSize} />;
			break;
		case "appwrite":
			icon = <SiAppwrite size={mediaSize} />;
			break;
		case "firebase":
			icon = <SiFirebase size={mediaSize} />;
			break;
		case "react query":
			icon = <SiReactquery size={mediaSize} />;
			break;
		case "git":
			icon = <FaGitAlt size={mediaSize} />;
			break;
		case "github":
			icon = <SiGithub size={mediaSize} />;
			break;
		case "nosql":
			icon = <FaLayerGroup size={mediaSize} />;
			break;
		case "mongodb":
			icon = <SiMongodb size={mediaSize} />;
			break;
		case "postgresql":
			icon = <SiPostgresql size={mediaSize} />;
			break;
		case "redis":
			icon = <SiRedis size={mediaSize} />;
			break;
		case "docker":
			icon = <SiDocker size={mediaSize} />;
			break;
		default:
			icon = <FaCode size={mediaSize} />;
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
