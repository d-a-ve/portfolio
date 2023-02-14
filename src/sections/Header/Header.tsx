import React from "react";
import Logo from "../../components/logo/Logo";
import Navbar from "../../components/Navbar";
import { useMediaQuery } from "react-responsive";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSun, BiMoon } from "react-icons/bi";

type headerPropsType = {
  darkMode: boolean;
  handleDarkMode: () => void;
};

const headerStyle = {
  header: {
    width: "90%",
    margin: "3rem auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default function Header({ darkMode, handleDarkMode }: headerPropsType) {
  const [toggleNav, setToggleNav] = React.useState(false);

  const isMd = useMediaQuery({ query: "(max-width: 768px)" }); // 768px

  function openNav() {
    setToggleNav(true);
  }

  function closeNav() {
    setToggleNav(false);
  }

  return (
    <header style={headerStyle.header}>
      <Logo />
      <Navbar toggleNav={toggleNav} closeNav={closeNav} />
      <IconContext.Provider value={{ className: "icon-cursor" }}>
        <div style={{ margin: isMd ? "0 1.3rem 0 auto" : "" }}>
          {!darkMode ? (
            <BiMoon onClick={handleDarkMode} size={30} />
          ) : (
            <BiSun onClick={handleDarkMode} size={30} />
          )}
        </div>
      </IconContext.Provider>
      {isMd && <AiOutlineMenu size={35} onClick={openNav} />}
    </header>
  );
}
