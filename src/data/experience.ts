export type ExperienceEntry = {
  duration: string;
  title: string;
  type?: string;
  company: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    duration: "Feb 2026 - Sep 2026",
    title: "Frontend Developer",
    type: "Contract",
    company: "Calcbridge",
    highlights: [
      "Helped cut portfolio calculation time from about 40 hours a week to about 30 minutes by building end-to-end compliance, reconciliation, eligibility, and what-if workflows on a multi-tenant platform",
      "Built virtualized spreadsheet grids with Excel-style editing, keyboard shortcuts, and infinite row loading so large portfolio workbooks stayed usable in the browser",
      "Enforced fine-grained UI permissions so surfaces and actions appeared only for roles that were allowed to use them",
      "Fixed mutations that left the UI stuck loading when the network dropped by cancelling in-flight requests, applying a timeout, and surfacing an error",
      "Synced long-running workbook uploads and screening over WebSockets with live progress so users could track background work without refreshing",
    ],
  },
  {
    duration: "Jan 2024 - Jan 2026",
    title: "Fullstack Developer",
    company: "Odogwu Technologies",
    highlights: [
      "Led a Node.js notification service for email, SMS, and push that processes about 500 notifications a day",
      "Built an API layer (service, client, mapper) that cut about 90% of response-shape breakages by localizing schema changes to one place instead of across the UI",
      "Found and fixed a page load timing issue that cut load time from about 30s to about 3s",
      "Cut transferred image payload over the network from about 77MB to about 3MB, making page loads about 23% faster",
      "Converted Figma designs into production interfaces across marketing, content, maps, trip planning, and admin dashboards",
    ],
  },
  {
    duration: "Sep 2023 - Oct 2023",
    title: "Frontend Developer",
    company: "HNG Internship",
    highlights: [
      "Collaborated with a cross-functional team of 30+ designers, developers, and product managers to ship an authentication feature",
      "Built a layout component that cut feature development time by about 20%",
      "Built a custom React Query mutation hook that streamlined API calls and cut delivery time by about 10%",
    ],
  },
];
