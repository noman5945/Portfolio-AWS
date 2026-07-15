"use client";
import React, { useState } from "react";
import CustomButton from "./ui/CustomButton";
import ImageModal from "./ImageModal";

export default function FeaturedProject() {
  const [showArchitecture, setShowArchitecture] = useState(false);
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border border-outline
        bg-surface-container-low
        transition-all
        duration-300
        hover:border-secondary-container
        hover:shadow-xl
      "
    >
      <div className="grid lg:grid-cols-2">
        {/* Screenshot */}

        <div className="overflow-hidden bg-surface-container">
          <img
            src="/images/projects/Featured_job.png"
            alt="Job Seeker Platform"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>

        {/* Content */}

        <div className="flex h-full flex-col p-10">
          {/* Badge */}
          <span className="w-fit rounded-full border border-secondary-container bg-secondary-container/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
            ⭐ Featured Project
          </span>

          {/* Title */}
          <h3 className="mt-5 text-3xl font-bold tracking-tight text-primary">
            OpenSet Job Seeker Platform
          </h3>

          {/* Subtitle */}
          <p className="mt-2 text-sm font-medium text-secondary">
            Cloud-Native Recruitment Platform
          </p>

          {/* Description */}
          <p className="mt-6 leading-8 text-on-surface-variant">
            A recruitment platform connecting Bangladeshi job seekers with
            Japanese recruitment agencies. Designed with a scalable serverless
            architecture, secure authentication, and a modern web experience.
          </p>

          {/* Highlights */}
          <div className="mt-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Key Highlights
            </h4>

            <ul className="space-y-3">
              {[
                "Serverless backend with AWS Lambda",
                "Authentication using Amazon Cognito",
                "Infrastructure managed with AWS CDK",
                "PostgreSQL on Amazon RDS",
                "Next.js & Flutter Web frontends",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-secondary-container" />
                  <span className="leading-7 text-on-surface-variant">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Next.js",
              "NestJS",
              "TypeScript",
              "AWS",
              "PostgreSQL",
              "CDK",
              "Flutter",
            ].map((tech) => (
              <span
                key={tech}
                className="
          rounded-lg
          border border-outline
          bg-surface-container-low
          px-4 py-2
          text-sm
          font-medium
          transition-all
          duration-200
          hover:-translate-y-1
          hover:border-secondary-container
          hover:bg-secondary-container
          hover:text-on-secondary-container
        "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <CustomButton>GitHub</CustomButton>

            <CustomButton
              variant="secondary"
              className=" cursor-pointer"
              onClickfunc={() => setShowArchitecture(true)}
            >
              Architecture
            </CustomButton>
            <CustomButton
              variant="outline"
              className=" cursor-pointer"
              href="https://d1ie7hcjew8851.cloudfront.net"
            >
              Demo
            </CustomButton>
          </div>
        </div>
      </div>
      <ImageModal
        open={showArchitecture}
        onClose={() => setShowArchitecture(false)}
        title="Openset Backend Architecture"
        image="/images/projects/Openset-Detailed-Infrastructure.png"
      />
    </div>
  );
}
