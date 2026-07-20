import ExperienceCard from "@/components/ExperienceCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience record of Md Abdullah Al Noman",
};

export default function ExperiencePage() {
  const experiences = [
    {
      current: true,
      title: "Software Engineer (Backend)",
      company: "FIT Inc.",
      period: "Mar 2025 – May 2026",
      location: "Tokyo, Japan",
      description:
        "Developed production-grade serverless backend systems, designed REST APIs, provisioned cloud infrastructure using AWS CDK and Terraform, and contributed to Azure-based services.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Python",
        "AWS",
        "Azure",
        "Lambda",
        "PostgreSQL",
        "Terraform",
        "CDK",
        "Agile",
      ],
      logo: "",
      resposibilities: [
        "Developed production-grade serverless backend systems.",
        "Designed RESTful APIs using Node.js and TypeScript.",
        "Built cloud infrastructure using AWS CDK.",
        "Implemented CI/CD pipelines.",
        "Contributed to Azure cloud services.",
      ],
    },
    {
      current: false,
      title: "IT Engineer Trainee",
      company: "Bangladesh–Japan ICT Engineers Training (B-JET)",
      period: "2024",
      location: "Dhaka, Bangladesh",
      description:
        "Completed an intensive project-based engineering training focused on backend and frontend development, teamwork, Agile practices, and Japanese software engineering culture.",
      technologies: [
        "Backend",
        "Frontend",
        "React.js",
        "Express.js",
        "Agile",
        "JavaScript",
        "Node.js",
        "TypeScript",
        "MongoDB",
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEY-FCqgizdAYg12Z3BBM8PFn51P3Mj06r4FVBRV7br5T9I8ikWzCCe5O&s=10",
      resposibilities: [
        "Completed intensive project-based software engineering training.",
        "Built backend applications using modern JavaScript technologies.",
        "Learned Agile development and team collaboration.",
        "Worked on core Backend and system architecture concepts and deployment.",
        "Prepared for software engineering roles international companies.",
      ],
    },
  ];
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          Career
        </p>

        <h2 className="mt-3 text-4xl font-bold text-primary">Experience</h2>

        <p className="mt-4 max-w-2xl text-on-surface-variant">
          My journey from professional engineering training to building
          production-grade cloud applications in an international software team.
        </p>
      </div>
      <div className="relative space-y-12 border-l border-outline pl-8">
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard
              key={index}
              title={experience.title}
              current={experience.current}
              company={experience.company}
              period={experience.period}
              location={experience.location}
              description={experience.description}
              technologies={experience.technologies}
              logo={experience.logo}
              resposibilities={experience.resposibilities}
            />
          );
        })}
      </div>
    </div>
  );
}
