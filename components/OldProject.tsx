import React from "react";
import CustomButton from "./ui/CustomButton";
import { FaGithub } from "react-icons/fa";

export default function OldProject() {
  const projects = [
    {
      title: "Levis Car Services",
      description:
        "Web application for car service company where user can select various car services and book service by online payment",
      technologies: ["React.js", "Node.js", "ExpressJS", "MongoDB", "stripe"],
      type: "Personal Project",
      link: "https://car-service-83050.web.app/",
      github_link: "https://github.com/noman5945/Carwash-Management-System",
    },
    {
      title: "OCR Menu Processing System",
      description:
        "A backend system for extracting structured data from restaurant menus using OCR technologies.",
      technologies: ["Python", "FastAPI", "Google Vision API", "PostgreSQL"],
      type: "Backend Project",
      link: "#",
      github_link: "https://github.com/noman5945/Checkout-data-collector",
    },
  ];
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold uppercase tracking-[0.25em] text-secondary">
          Other Projects
        </h2>

        <p className="mt-4 max-w-2xl text-on-surface-variant">
          A selection of additional projects and professional work I've
          contributed to over the years.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="
              rounded-2xl
              border
              border-outline
              bg-surface
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-secondary
            "
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {project.type}
            </span>

            <h3 className="mt-4 text-2xl font-bold text-primary">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-on-surface-variant">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                  border
                  border-outline
                  px-3
                  py-1.5
                  text-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-secondary
                  hover:bg-secondary-container
                  hover:text-on-secondary-container
                  "
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-row gap-2">
              <div className=" flex flex-row gap-1">
                <CustomButton
                  variant="primary"
                  className=" cursor-pointer"
                  href={project.github_link}
                >
                  <FaGithub className="text-lg" />
                  <span>Github</span>
                </CustomButton>
              </div>
              <CustomButton variant="outline" href={project.link}>
                View Project
              </CustomButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
