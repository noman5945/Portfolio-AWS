import SkillCard from "@/components/SkillCard";
import React from "react";

export default function SkillsPage() {
  const backendSkills = [
    "Node.js",
    "NestJS",
    "Express.js",
    "REST APIs",
    "FastAPI",
  ];

  const cloudSkills = [
    "AWS",
    "AWS Lambda",
    "API Gateway",
    "AWS CDK",
    "Terraform",
    "Azure Functions",
  ];

  const databaseSkills = ["PostgreSQL", "MongoDB", "Amazon DynamoDB"];

  const frontendSkills = ["React", "Next.js", "Tailwind CSS"];

  const languageSkills = ["TypeScript", "JavaScript", "Python"];

  const engineeringSkills = [
    "Clean Architecture",
    "RESTful API Design",
    "Serverless Architecture",
    "Infrastructure as Code",
    "Database Design (ERD)",
    "CI/CD",
    "System Design",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          Technologies
        </p>

        <h2 className="mt-3 text-4xl font-bold text-primary">
          Technical Skills
        </h2>

        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Technologies and engineering practices I use to build scalable,
          maintainable, and cloud-native applications.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <SkillCard title="Backend" skills={backendSkills} />
        <SkillCard title="Cloud" skills={cloudSkills} />
        <SkillCard title="Databases" skills={databaseSkills} />
        <SkillCard title="Frontend" skills={frontendSkills} />
        <SkillCard title="Languages" skills={languageSkills} />
        <SkillCard title="Core Competencies" skills={engineeringSkills} />
      </div>
    </section>
  );
}
