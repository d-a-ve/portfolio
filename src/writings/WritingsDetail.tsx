import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { formatWritingDate, type Writing } from "../data/writings";
import { MarkdownContent } from "./components/MarkdownContent";
import "./WritingsDetail.css";

function useTitlePassed() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [titlePassed, setTitlePassed] = useState(false);

  useEffect(() => {
    const node = titleRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTitlePassed(
          !entry.isIntersecting && entry.boundingClientRect.top < 0
        );
      },
      { rootMargin: "-88px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { titleRef, titlePassed };
}

function WritingMeta({ post }: { post: Writing }) {
  return (
    <dl className="writings-detail__meta">
      <div>
        <dt>Published</dt>
        <dd>
          <time dateTime={post.date}>{formatWritingDate(post.date)}</time>
        </dd>
      </div>
      <div>
        <dt>Reading time</dt>
        <dd>{post.readingTime}</dd>
      </div>
      <div>
        <dt>Tags</dt>
        <dd>
          <ul className="writing-tags">
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  );
}

export function WritingsDetail({ post }: { post: Writing }) {
  const { titleRef, titlePassed } = useTitlePassed();

  return (
    <article className="section writings-detail">
      <div className="writings-detail__frame">
        <Link to="/writings" className="writing-back">
          ← Writings
        </Link>

        <div className="writings-detail__layout">
          <div className="writings-detail__main reveal">
            <header className="writings-detail__header">
              <h1 ref={titleRef}>{post.title}</h1>
              <p>{post.excerpt}</p>
              <div className="writings-detail__meta-inline">
                <WritingMeta post={post} />
              </div>
            </header>
            <div className="writings-detail__body">
              <MarkdownContent markdown={post.markdown} />
            </div>
          </div>

          <aside className="writings-detail__rail reveal reveal-delay-1">
            <div
              className={`writings-detail__rail-title${
                titlePassed ? " is-visible" : ""
              }`}
              aria-hidden={!titlePassed}
            >
              <p className="eyebrow">Now reading</p>
              <p className="writings-detail__rail-title-text">{post.title}</p>
            </div>

            <WritingMeta post={post} />
          </aside>
        </div>
      </div>
    </article>
  );
}
