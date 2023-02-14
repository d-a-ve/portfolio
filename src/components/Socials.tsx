import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://github.com/d-a-ve/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/kvng__dave" target="_blank">
        <FaTwitter />
      </a>
      {/* <a href="#">
        <FaLinkedin />
      </a> */}
    </div>
  );
}
