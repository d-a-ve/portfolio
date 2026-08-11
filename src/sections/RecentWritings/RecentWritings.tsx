import { Link } from "@tanstack/react-router";
import SectionIntro from "../../utils/SectionIntro";
import {
  formatWritingDate,
  getRecentWritings,
} from "../../data/writings";
import "./RecentWritings.css";

export default function RecentWritings() {
  const recent = getRecentWritings(3);
  if (recent.length === 0) return null;

  return (
    <section className="section recent-writings" id="writings">
      <div className="recent-writings-container grid">
        <SectionIntro num="03">From the desk</SectionIntro>

        <div className="recent-writings__hero">
          <h2 className="reveal">Recent writings</h2>
          <Link
            to="/writings"
            className="recent-writings__all reveal reveal-delay-1"
          >
            All writings
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <ul className="recent-writings__rows">
          {recent.map((post) => (
            <li key={post.slug} className="recent-writings__row reveal">
              <Link
                to="/writings/$slug"
                params={{ slug: post.slug }}
                className="recent-writings__link"
              >
                <div className="recent-writings__date">
                  <time dateTime={post.date}>
                    {formatWritingDate(post.date)}
                  </time>
                  <span>{post.readingTime}</span>
                </div>
                <div className="recent-writings__copy">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <ul className="recent-writings__tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
