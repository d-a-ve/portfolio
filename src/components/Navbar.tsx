import React from "react";
import Navlink from "./navlink/Navlink";
import Button from "../utils/Button";
import { AiOutlineClose } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";

type NavbarPropsType = {
  closeNav: () => void;
  toggleNav: boolean;
};

export default function Navbar({ closeNav, toggleNav }: NavbarPropsType) {
  const isMd = useMediaQuery({ query: "(max-width: 768px)" }); // 768px

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: toggleNav ? "0" : "-100%",
        marginLeft: !isMd ? "auto" : "",
      }}
    >
      {isMd && <AiOutlineClose className="nav--close-btn" onClick={closeNav} />}
      <ul className="nav-links">
        <Navlink link="home" linkText="Home" click={closeNav} />
        <Navlink link="about" linkText="About Me" click={closeNav} />
        <Navlink link="projects" linkText="Projects" click={closeNav} />
        <li className="nav-link">
          <Button email={true} link="#" linkText="Contact Me" />
        </li>
      </ul>
    </nav>
  );
}
