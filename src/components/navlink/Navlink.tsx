import { Link } from "@tanstack/react-router";
import "./Navlink.css";

export type LinkPropsType = {
  link: string;
  linkText: string;
  click?: () => void;
  email?: boolean;
};

export default function Navlink({ link, linkText, click }: LinkPropsType) {
  const isHome = link === "home";

  return (
    <li className="nav-link">
      <Link to="/" hash={isHome ? undefined : link} onClick={click}>
        {linkText}
      </Link>
    </li>
  );
}
