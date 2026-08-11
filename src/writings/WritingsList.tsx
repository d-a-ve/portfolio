import { Link } from "@tanstack/react-router";
import { formatWritingDate, writings } from "../data/writings";
import "./WritingsList.css";

export function WritingsList() {
  const hasWritings = writings.length > 0;

  return (
    <section className="section writings-list">
      <header className="writings-list__hero reveal">
        <div>
          <p className="eyebrow">Notes</p>
          <h1>Writings</h1>
        </div>
        <p className="writings-list__aside">
          Notes on shipping software — what I have learned in production, what
          worked, what I wish I had done differently, and the decisions I am
          still refining.
        </p>
      </header>

      {hasWritings ? (
        <ul className="writings-list__rows">
          {writings.map((post) => (
            <li key={post.slug} className="writings-list__row reveal">
              <Link
                to="/writings/$slug"
                params={{ slug: post.slug }}
                className="writings-list__link"
              >
                <div className="writings-list__date">
                  <time dateTime={post.date}>{formatWritingDate(post.date)}</time>
                  <span>{post.readingTime}</span>
                </div>
                <div className="writings-list__copy">
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
                <ul className="writings-list__tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="writings-list__empty reveal">
          <p className="eyebrow">Coming soon</p>
          <p>
            I am still thinking and coming up with things worth writing down.
            Check back soon.
          </p>
        </div>
      )}
    </section>
  );
}
