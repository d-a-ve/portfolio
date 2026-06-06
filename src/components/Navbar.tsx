import Navlink from "./navlink/Navlink";
import Button, { RESUME_URL } from "../utils/Button";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

type NavbarPropsType = {
  closeNav: () => void;
  toggleNav: boolean;
  variant?: "inline" | "overlay";
};

export default function Navbar({
  closeNav,
  toggleNav,
  variant = "inline",
}: NavbarPropsType) {
  const isOverlay = variant === "overlay";

  return (
    <nav
      className={`site-nav ${isOverlay ? "site-nav--overlay" : ""} ${
        toggleNav ? "is-open" : ""
      }`}
      aria-hidden={isOverlay && !toggleNav}
    >
      {isOverlay ? (
        <button
          type="button"
          className="nav-close-btn"
          onClick={closeNav}
          aria-label="Close navigation menu"
        >
          <AiOutlineClose size={18} />
        </button>
      ) : null}
      <ul className="nav-links">
        <Navlink link="home" linkText="Home" click={closeNav} />
        <Navlink link="about" linkText="About" click={closeNav} />
        <Navlink link="skills" linkText="Skills" click={closeNav} />
        <Navlink link="projects" linkText="Projects" click={closeNav} />
        <Navlink link="experience" linkText="Experience" click={closeNav} />
        <Navlink link="contact" linkText="Contact" click={closeNav} />
      </ul>

      {isOverlay ? (
        <div className="nav-resume">
          <Button
            link={RESUME_URL}
            linkText="Resume"
            newTab
            variant="primary"
            fullWidth
            onClick={closeNav}
          />
        </div>
      ) : null}
    </nav>
  );
}
