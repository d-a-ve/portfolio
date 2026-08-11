import asyncStateWithoutFlags from "../content/writings/async-state-without-flags.md?raw";

export type Writing = {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	readingTime: string;
	tags: string[];
	cover: string;
	coverAlt: string;
	markdown: string;
};

export const writings: Writing[] = [
	{
		slug: "async-state-without-flags",
		title: "Async state without a pile of boolean flags",
		excerpt:
			"idle, loading, error, success — one status field beats isLoading + isError + isSuccess spaghetti.",
		date: "2026-02-04",
		readingTime: "6 min",
		tags: ["react", "typescript", "patterns"],
		cover:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
		coverAlt: "Code on a dark editor screen",
		markdown: asyncStateWithoutFlags,
	},
];

export function getWriting(slug: string) {
	return writings.find((post) => post.slug === slug);
}

export function getRecentWritings(limit = 3) {
	return [...writings]
		.sort((a, b) => b.date.localeCompare(a.date))
		.slice(0, limit);
}

export function formatWritingDate(date: string) {
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	}).format(new Date(date));
}
