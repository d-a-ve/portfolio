import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="socials">
      <a
        href="https://github.com/d-a-ve/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/kvng__dave"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/david-aronmwan-5101ab172/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
