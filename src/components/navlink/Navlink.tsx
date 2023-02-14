import React from "react";
import "./Navlink.css";

export type LinkPropsType = {
  link: string;
  linkText: string;
  click?: () => void;
  email?: boolean;
};

export default function Navlink({ link, linkText, click }: LinkPropsType) {
  function removeNav() {}

  return (
    <li className="nav-link">
      <a href={`#${link}`} onClick={click}>
        {linkText}
      </a>
    </li>
  );
}
