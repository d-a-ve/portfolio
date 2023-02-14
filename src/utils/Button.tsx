import React from "react";
import { LinkPropsType } from "../components/navlink/Navlink";
import "./Button.css";

// I want to avoid putting my email directly in the DOM to prevent bot spams, so using a click event to add it when it is clicked

export function directToEmail(
  e: React.MouseEvent<HTMLAnchorElement>,
  email?: boolean
) {
  // only works when it is to redirect to email and not just to another section

  if (email) {
    e.currentTarget.href =
      "javascript:location='mailto:\u0064\u0061\u0076\u0065\u0061\u0072\u006f\u006e\u006d\u0077\u0061\u006e\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0";
  }
}

export default function Button({ link, linkText, email }: LinkPropsType) {
  const obsfucatedEmailHref = "#";

  return (
    <a
      href={email ? obsfucatedEmailHref : link}
      className="contact-btn"
      onClick={directToEmail}
    >
      {linkText}
    </a>
  );
}
