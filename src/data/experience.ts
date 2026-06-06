export type ExperienceEntry = {
  duration: string;
  title: string;
  type?: string;
  company: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    duration: "Jan 2024 - Jan 2026",
    title: "Fullstack Developer",
    company: "Holidayalot",
    highlights: [
      "Led development of a Node.js notification service handling email, SMS, and push notifications, processing 100+ notifications per day.",
      "Refactored the frontend architecture to use services, clients, and mappers, decoupling the UI from API responses and catching 90% of API-change errors.",
      "Joined an optimization effort that reduced image payload by 97% and cut page load time from 30s to 3s by tracing a slow API endpoint.",
      "Improved developer experience by 65% through schema-based mapping and cleaner service boundaries.",
    ],
  },
  {
    duration: "Apr 2025 - Jun 2025",
    title: "Lead Frontend Engineer",
    company: "BackendIM",
    type: "Team Lead",
    highlights: [
      "Led a team of 4 frontend engineers delivering an AI-powered backend platform with auth, AI chat, live logs, a code editor, testing console, deployment workflows, and environment management.",
      "Refactored the AI chat module, improving response latency and performance by 77%.",
      "Spearheaded structured code reviews and mentoring to keep delivery consistent, maintainable, and on time.",
    ],
  },
  {
    duration: "Sept 2023 - Oct 2023",
    title: "Frontend Developer",
    company: "HNG Internship",
    highlights: [
      "Collaborated with a cross-functional team of 30+ designers, developers, and product managers to implement an authentication feature.",
      "Developed a layout component that reduced feature development time by 20%.",
      "Built a custom React Query mutation hook that reduced delivery time by 10%.",
    ],
  },
  {
    duration: "Jan 2023 - Aug 2023",
    title: "Fullstack Engineer",
    type: "Contract",
    company: "Zkyte Technologies",
    highlights: [
      "Spearheaded the design, development, and launch of a full-stack course platform with external pages and user/admin dashboards.",
      "Refactored course CRUD features with Axios and React Query caching, reducing unnecessary rerenders and network calls by 80%.",
      "Led the implementation of a facial verification system across 600+ groups and about 10k users, catching 85% of fraudulent attempts.",
    ],
  },
];
