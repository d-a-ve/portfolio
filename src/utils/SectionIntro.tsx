import React from "react";
import "./SectionIntro.css";

export default function SectionIntro({
  children,
  num,
}: {
  children: React.ReactNode;
  num?: string;
}) {
  return (
    <div className="section-intro reveal">
      {num ? <span className="section-intro__num">{num}</span> : null}
      <span className="section-intro__line" aria-hidden="true"></span>
      <p>{children}</p>
    </div>
  );
}
