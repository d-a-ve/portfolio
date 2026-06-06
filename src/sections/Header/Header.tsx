import React from "react";
import Logo from "../../components/logo/Logo";
import Navbar from "../../components/Navbar";
import { useMediaQuery } from "react-responsive";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";

export default function Header() {
  const [toggleNav, setToggleNav] = React.useState(false);

  const isMd = useMediaQuery({ query: "(max-width: 768px)" }); // 768px

  React.useEffect(() => {
    if (!isMd) {
      setToggleNav(false);
    }
  }, [isMd]);

  React.useEffect(() => {
    const lockScroll = toggleNav && isMd;

    if (lockScroll) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [toggleNav, isMd]);

  function openNav() {
    setToggleNav(true);
  }

  function closeNav() {
    setToggleNav(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header__bar">
          <Logo />
          {!isMd ? (
            <Navbar toggleNav={toggleNav} closeNav={closeNav} variant="inline" />
          ) : null}
          {isMd ? (
            <IconContext.Provider value={{ className: "icon-cursor" }}>
              <div className="site-header__actions">
                <button
                  type="button"
                  className="icon-button menu-toggle"
                  onClick={openNav}
                  aria-label="Open navigation menu"
                >
                  <AiOutlineMenu size={18} />
                </button>
              </div>
            </IconContext.Provider>
          ) : null}
        </div>
      </header>

      {isMd ? (
        <Navbar
          toggleNav={toggleNav}
          closeNav={closeNav}
          variant="overlay"
        />
      ) : null}
    </>
  );
}
