"use client";

import React from "react";
import Link from "next/link";

interface ChapterLinkProps {
  name: string;
  pdfLink: string;
}

const InteractiveChapterLink: React.FC<ChapterLinkProps> = ({ name, pdfLink }) => {
  return (
    <Link href={pdfLink} target="_blank">
      <div
        style={{
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#e0f7fa";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        {name}
      </div>
    </Link>
  );
};

export default InteractiveChapterLink;
