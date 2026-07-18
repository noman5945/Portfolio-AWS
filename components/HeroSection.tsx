import React from "react";
import CustomButton from "./ui/CustomButton";

export default function HeroSection() {
  const skills = [
    "React",
    "Next.js",
    "Express.js",
    "Nest.js",
    "TypeScript",
    "AWS",
    "PostgreSQL",
    "Python",
    "FastAPI",
  ];
  return (
    <section className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-12">
      {/* Left */}
      <div className="space-y-8 lg:col-span-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            Backend & Cloud Engineer
          </p>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-primary lg:text-6xl">
            Md Abdullah Al Noman
          </h1>

          <p className="max-w-2xl text-xl leading-9 text-on-surface">
            Building scalable web applications with React, Next.js, Nest.js,
            TypeScript, PostgreSQL, and AWS.
          </p>

          <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
            Currently pursuing a Master's in Computer Science in Germany. I
            enjoy designing reliable backend systems, clean architecture, and
            cloud-native solutions that are maintainable, performant, and
            production-ready.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
            rounded-lg
            border
            border-outline
            bg-surface-container-low
            px-4
            py-2
            font-mono
            text-sm
            font-medium
            text-on-surface
            transition-all
            duration-200
            hover:-translate-y-1
            hover:border-secondary-container
            hover:bg-surface-container
            hover:text-secondary
          "
            >
              {skill}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <CustomButton href="/pages/contact">Contact Me</CustomButton>
          <a
            href="/cv/Md_Abdullah_Al_Noman_Backend.pdf"
            download={"Md Abdullah Al Noman"}
          >
            <CustomButton variant="outline">Download CV</CustomButton>
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="lg:col-span-4">
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-80">
            {/* Accent Border */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-secondary-container" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl border border-outline bg-surface-container shadow-xl">
              <img
                src="/images/portrait/Portfolio_pic.jpeg"
                alt="Abdullah Al Noman"
                className="aspect-4/5 w-full object-cover"
              />
            </div>

            {/* Info Card */}
            <div className="absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-xl border border-outline bg-background/95 p-4 backdrop-blur">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant">Location</span>
                  <span className="font-medium text-on-surface">
                    Kassel, Germany
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant">Education</span>
                  <span className="font-medium text-on-surface">
                    M.Sc. Computer Science
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant">Focus</span>
                  <span className="font-medium text-secondary">
                    Backend & Cloud
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
