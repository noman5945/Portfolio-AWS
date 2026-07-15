import React from "react";
type SkillCardProps = {
  title: string;
  skills: string[];
};
export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border border-outline
        bg-surface-container-low
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-secondary-container
        hover:shadow-lg
      "
    >
      <h3 className="mb-5 text-xl font-semibold text-primary">{title}</h3>

      <ul className="space-y-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="
              flex items-center gap-3
              text-on-surface-variant
              transition-all
              duration-200
              hover:translate-x-1
              hover:text-secondary
            "
          >
            <span className="h-2 w-2 rounded-full bg-secondary-container" />

            <span className=" cursor-pointer">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
