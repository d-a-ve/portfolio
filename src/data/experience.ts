export type ExperienceEntry = {
  duration: string;
  title: string;
  type?: string;
  company: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    duration: "2024 - Present",
    title: "Frontend Developer",
    type: "Freelance",
    company: "Independent",
    highlights: [
      "Built small product pages and app interfaces with TypeScript.",
      "Refined visual hierarchy, spacing, and accessibility in every iteration.",
      "Shipped and maintained responsive React UI for client work.",
    ],
  },
  {
    duration: "2023 - 2024",
    title: "Portfolio Builder",
    type: "Self-directed",
    company: "Personal projects",
    highlights: [
      "Shipped multiple demos across landing pages, games, and dashboards.",
      "Experimented with reusable card layouts and responsive navigation flows.",
      "Turned concept sketches into live, polished experiences.",
    ],
  },
  {
    duration: "Always",
    title: "Continuous Learner",
    company: "React, TypeScript, and beyond",
    highlights: [
      "Practicing component-driven architecture and deliberate styling choices.",
      "Exploring tools that make interfaces feel faster and more intentional.",
    ],
  },
];
