import CurrentProject from "@/components/CurrentProject";
import FeaturedProject from "@/components/FeaturedProject";
import OldProject from "@/components/OldProject";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project showcase of Md Abdullah Al Noman",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24">
      {/**Section Header */}
      <div className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          Portfolio
        </p>

        <h2 className="mt-3 text-4xl font-bold text-primary">
          Featured Professional Projects
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
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          Current
        </p>
        <h2 className="mt-3 text-2xl font-bold text-primary">
          Currently Ongoing Projects
        </h2>
      </div>
      <CurrentProject />
      {/** Previous Projects */}
      <OldProject />
    </section>
  );
}
