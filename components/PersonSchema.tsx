import React from "react";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Abdullah Al Noman",
  url: "https://portfolio-aws-iota.vercel.app/",
  jobTitle: "Backend & Cloud Engineer",
  sameAs: [
    "https://github.com/noman5945",
    "https://www.linkedin.com/in/noman5945/?isSelfProfile=false",
  ],
  knowsAbout: [
    "Backend Development",
    "Node.js",
    "NestJS",
    "TypeScript",
    "AWS",
    "PostgreSQL",
    "Cloud Architecture",
  ],
};

export default function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}
