import CurrentProject from "@/components/CurrentProject";
import FeaturedProject from "@/components/FeaturedProject";
import React from "react";

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24">
      {/**Section Header */}
      <div className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          Portfolio
        </p>

        <h2 className="mt-3 text-4xl font-bold text-primary">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-on-surface-variant">
          A selection of projects showcasing backend engineering, cloud
          architecture, and modern web development.
        </p>
      </div>
      {/** Featured Project */}
      <FeaturedProject />
      {/** Current Project */}
      <div className="my-6">
        <h2 className="mt-3 text-3xl font-bold text-primary">
          Currently Ongoing Projects
        </h2>
      </div>
      <CurrentProject />
      {/** Previous Projects */}
    </section>
  );
}
