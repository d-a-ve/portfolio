export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectEntry = {
  title: string;
  description: string;
  link: string;
  githubRepoLink?: string;
  projectCover: string;
  technologiesUsed: string;
  metrics: ProjectMetric[];
};

export const projects: ProjectEntry[] = [
  {
    title: "Content Guide",
    description:
      "A landing page where users can get effective forms of content for their business.",
    link: "https://godspowercontentguide.netlify.app/",
    githubRepoLink: "https://github.com/d-a-ve/content-guide-page",
    projectCover: "content-guide",
    technologiesUsed: "HTML, CSS",
    metrics: [
      { label: "Outcome", value: "Clearer service positioning" },
      { label: "Stack", value: "HTML / CSS" },
    ],
  },
  {
    title: "Dreamup",
    description:
      "A landing page for the Dreamup challenge where people learn HTML and CSS in four weeks.",
    link: "https://dreamupchallenge.netlify.app/",
    githubRepoLink: "https://github.com/d-a-ve/dreamup-challenge",
    projectCover: "dreamup-challenge",
    technologiesUsed: "HTML, CSS",
    metrics: [
      { label: "Outcome", value: "Sharper course storytelling" },
      { label: "Stack", value: "HTML / CSS" },
    ],
  },
  {
    title: "Country Data Representation",
    description:
      "A country data representation showing capital, languages, and population in one view.",
    link: "https://dave-country-representation.netlify.app/",
    githubRepoLink: "https://github.com/d-a-ve/country-representation",
    projectCover: "country-data-visualization",
    technologiesUsed: "HTML, CSS, JavaScript",
    metrics: [
      { label: "Outcome", value: "Faster country comparisons" },
      { label: "Stack", value: "HTML / CSS / JS" },
    ],
  },
  {
    title: "Meme Generator",
    description:
      "A web app where users can create memes when provided with the text.",
    link: "https://davememegenerator.netlify.app/",
    githubRepoLink: "https://github.com/d-a-ve/meme-generator",
    projectCover: "meme-generator",
    technologiesUsed: "React, Typescript",
    metrics: [
      { label: "Outcome", value: "Playful, quick generation flow" },
      { label: "Stack", value: "React / TypeScript" },
    ],
  },
  {
    title: "Tenzies",
    description:
      "A game where a user rolls 10 dice until all dice are the same.",
    link: "https://davetenzies.netlify.app",
    githubRepoLink: "https://github.com/d-a-ve/tenzies.git",
    projectCover: "tenzies",
    technologiesUsed: "React, Typescript",
    metrics: [
      { label: "Outcome", value: "Fast, tactile game feedback" },
      { label: "Stack", value: "React / TypeScript" },
    ],
  },
  {
    title: "Movie Box",
    description:
      "A movie discovery web app that surfaces featured movies with a clean browse flow.",
    link: "https://dave-movie-box-hng.vercel.app/",
    githubRepoLink: "https://github.com/d-a-ve/movie-box-hng-second-task",
    projectCover: "movie-box",
    technologiesUsed: "React, Typescript, TailwindCSS",
    metrics: [
      { label: "Outcome", value: "Cleaner discovery experience" },
      { label: "Stack", value: "React / TypeScript / Tailwind" },
    ],
  },
  {
    title: "PixelDrag",
    description:
      "An image gallery that lets users manage collections through drag and drop.",
    link: "https://pixeldrag.vercel.app/",
    githubRepoLink: "https://github.com/d-a-ve/pixeldrag",
    projectCover: "pixeldrag",
    technologiesUsed: "React, Typescript, TailwindCSS",
    metrics: [
      { label: "Outcome", value: "More intuitive gallery control" },
      { label: "Stack", value: "React / TypeScript / Tailwind" },
    ],
  },
  {
    title: "Memora",
    description:
      "Memora helps users keep track of birthdays and send timely reminders.",
    link: "https://memora-tau.vercel.app/",
    githubRepoLink: "https://github.com/d-a-ve/memora",
    projectCover: "memora",
    technologiesUsed: "React, Typescript, TailwindCSS, Appwrite, Tanstack query",
    metrics: [
      { label: "Outcome", value: "More dependable reminders" },
      { label: "Stack", value: "React / TypeScript / Appwrite" },
    ],
  },
];
