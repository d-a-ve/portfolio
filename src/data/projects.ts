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
  {
    title: "Petshub",
    description:
      "An e-commerce website for users to find their perfect furry friend.",
    link: "https://petshubng.com/",
    githubRepoLink: null,
    projectCover: "petshub",
    technologiesUsed: "Next.js, React, Typescript, TailwindCSS, Redux, RTK query, Tanstack query",
  },
  {
    title: "Zkyte Courses",
    description:
      "A course platform for users to learn new tech skills and get certified.",
    link: "https://courses.zkyte.com/",
    githubRepoLink: null,
    projectCover: "zkyte-courses",
    technologiesUsed: "Next.js, React, Typescript, TailwindCSS, Zustand, Tanstack Query",
  },
  {
    title: "Zkyte Ltd",
    description:
      "A website for Zkyte Ltd, a software development company.",
    link: "https://zkyte.com/",
    githubRepoLink: null,
    projectCover: "zkyte-ltd",
    technologiesUsed: "Next.js, TailwindCSS, TypeScript",
  },
  {
    title: "Rairer",
    description:
      "A SaaS product to help farmers manage their livestock & farm.",
    link: "https://rairer.com/",
    githubRepoLink: null,
    projectCover: "rairer",
    technologiesUsed: "Next.js, React, Typescript, TailwindCSS, Zustand, Tanstack query",
  },
];
