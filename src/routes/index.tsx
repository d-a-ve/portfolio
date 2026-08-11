import { createFileRoute } from "@tanstack/react-router";
import Hero from "../sections/Hero/Hero";
import Skills from "../sections/Skills/Skills";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";
import RecentWritings from "../sections/RecentWritings/RecentWritings";
import Contact from "../sections/Contact/Contact";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <RecentWritings />
      <Experience />
      <Contact />
    </>
  );
}
