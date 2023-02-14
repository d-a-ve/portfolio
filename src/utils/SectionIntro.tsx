import React from "react";
import "./SectionIntro.css";

export default function SectionIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="section-intro">
      <span className="line"></span>
      <p>{children}</p>
    </div>
  );
}
