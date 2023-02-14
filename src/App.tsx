import React, { useEffect } from "react";
// Testing how to use React.lazy with the import function and the suspense element
// const Header = React.lazy(() => import("./components/Header"));
// const Hero = React.lazy(() => import("./components/Hero"));
// const About = React.lazy(() => import("./components/About"));

import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Footer from "./sections/Footer/Footer";
import { IconContext } from "react-icons";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const docBody = document.body;

  React.useEffect(() => {
    systemPrefersDark ? setDarkMode(true) : setDarkMode(false);
  }, []);

  darkMode ? docBody.classList.add("dark") : docBody.classList.remove("dark");

  function changeMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <>
      {/* <React.Suspense fallback={<div>Loading...</div>}> */}
      <IconContext.Provider
        value={{ color: darkMode ? "var(--primary300)" : "var(--primary700)" }}
      >
        <Header darkMode={darkMode} handleDarkMode={changeMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </IconContext.Provider>
      {/* </React.Suspense> */}
    </>
  );
}
