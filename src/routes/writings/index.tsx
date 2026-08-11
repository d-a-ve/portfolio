import { createFileRoute } from "@tanstack/react-router";
import { WritingsList } from "../../writings/WritingsList";

export const Route = createFileRoute("/writings/")({
  component: WritingsList,
});
