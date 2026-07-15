import React from "react";

type Props = {
  current?: boolean;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  logo: string;
  resposibilities: string[];
};

export default function ExperienceCard({
  current,
  title,
  company,
  period,
  location,
  description,
  technologies,
  logo,
  resposibilities,
}: Props) {
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute -left-10.5 top-2 h-4 w-4 rounded-full bg-secondary-container ring-4 ring-background" />

      <div className="rounded-2xl border border-outline bg-surface-container-low p-6 transition-all hover:border-secondary-container">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-primary">{title}</h3>

            <p className="mt-1 font-medium text-secondary">{company}</p>

            <p className="mt-1 text-sm text-on-surface-variant">{location}</p>
          </div>

          <div className="text-right">
            <span className="rounded-full bg-surface-container px-4 py-2 text-sm">
              {period}
            </span>

            {current && (
              <p className="mt-2 text-sm font-medium text-secondary">
                Production Experience
              </p>
            )}
          </div>
        </div>

        <p className="mt-6 leading-8 text-on-surface-variant">{description}</p>
        <div className=" flex flex-row mt-2">
          <ul className="mt-4 space-y-3 text-on-surface-variant">
            {resposibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3 leading-7">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary-container" />

                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
              cursor-default
              rounded-lg
              border border-outline
              bg-surface-container-low
              px-4 py-2
              text-sm font-medium
              text-on-surface
              transition-all duration-200 ease-out

              hover:-translate-y-1
              hover:border-secondary-container
              hover:bg-secondary-container
              hover:text-on-secondary-container
              hover:shadow-lg
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
