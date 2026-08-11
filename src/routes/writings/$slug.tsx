import { createFileRoute, redirect } from "@tanstack/react-router";
import { getWriting } from "../../data/writings";
import { WritingsDetail } from "../../writings/WritingsDetail";

export const Route = createFileRoute("/writings/$slug")({
  beforeLoad: ({ params }) => {
    if (!getWriting(params.slug)) {
      throw redirect({ to: "/writings" });
    }
  },
  component: WritingsDetailPage,
});

function WritingsDetailPage() {
  const { slug } = Route.useParams();
  const post = getWriting(slug);
  if (!post) return null;
  return <WritingsDetail post={post} />;
}
