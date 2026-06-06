import React from "react";
import "./Button.css";

// I want to avoid putting my email directly in the DOM to prevent bot spams, so using a click event to add it when it is clicked

export const RESUME_URL =
  "https://drive.google.com/file/d/1F1k1PPrdWH0m3TzXTSOtOSJWdoq9uUJs/view?usp=drive_link";

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

export type ButtonPropsType = {
  link: string;
  linkText: string;
  email?: boolean;
  newTab?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function Button({
  link,
  linkText,
  email,
  newTab,
  variant = "primary",
  className = "",
  fullWidth = false,
  onClick,
}: ButtonPropsType) {
  const obsfucatedEmailHref = "#";
  const buttonClassName = [
    "contact-btn",
    `contact-btn--${variant}`,
    fullWidth ? "contact-btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={email ? obsfucatedEmailHref : link}
      className={buttonClassName}
      target={email || !newTab ? undefined : "_blank"}
      rel={email ? undefined : "noreferrer noopener"}
      onClick={(e) => {
        directToEmail(e, email);
        onClick?.(e);
      }}
    >
      {linkText}
    </a>
  );
}
