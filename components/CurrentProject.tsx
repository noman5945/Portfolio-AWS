"use client";
import React, { useState } from "react";
import {
  HiOutlineRocketLaunch,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import CustomButton from "./ui/CustomButton";
import ImageModal from "./ImageModal";

export default function CurrentProject() {
  const [showArchitecture, setShowArchitecture] = useState(false);
  const technologies = [
    "NestJS",
    "TypeScript",
    "AWS",
    "AWS CDK",
    "DynamoDB",
    "Docker",
    "GitHub Actions",
  ];
  const current_focus = [
    "Modular NestJS Architecture",
    "Authentication & Authorization",
    "AWS Infrastructure with CDK",
    "DynamoDB NoSQL database Integration",
    "CI/CD Pipeline",
  ];
  return (
    <section className="rounded-2xl border border-outline bg-surface p-8 my-2">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Left Side */}
        <div
          className="lg:col-span-6 cursor-pointer"
          onClick={() => setShowArchitecture(true)}
        >
          <div
            className="
              flex
              aspect-video
              items-center
              justify-center
              rounded-xl
              border
              border-dashed
              border-outline
              bg-background
              transition-colors
              hover:border-secondary
            "
          >
            <div className="text-center">
              <HiOutlineWrenchScrewdriver className="mx-auto mb-4 text-6xl text-secondary" />

              <h3 className="text-lg font-semibold text-on-surface">
                Architecture Diagram
              </h3>

              <p className="mt-2 text-sm text-on-surface-variant">
                Coming as the project evolves. Click here to see architecture
                plan
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col lg:col-span-6">
          {/* Status Badge */}
          <span
            className="
              mb-5
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-secondary/30
              bg-secondary/10
              px-4
              py-1.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-secondary
            "
          >
            <HiOutlineRocketLaunch />
            Active Project
          </span>

          <h2 className="text-3xl font-bold text-primary">Valkyrie</h2>

          <p className="mt-2 text-lg font-medium text-secondary">
            Production-Inspired Serverless Backend
          </p>

          <p className="mt-6 leading-8 text-on-surface-variant">
            Valkyrie is my ongoing personal engineering project focused on
            building a scalable backend platform using modern cloud-native
            technologies. The project emphasizes modular architecture,
            Infrastructure as Code, authentication, CI/CD, and production-ready
            deployment on AWS.
          </p>

          {/* Current Focus */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold text-on-surface">
              Current Focus
            </h3>

            <ul className="space-y-2 text-on-surface-variant">
              {current_focus.map((singlefocus, index) => {
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-secondary-container" />
                    <span className="leading-7 text-on-surface-variant">
                      {singlefocus}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
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
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <CustomButton
              variant="primary"
              href="https://github.com/noman5945/Valkirye-Serverless"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </CustomButton>

            <CustomButton
              variant="outline"
              onClickfunc={() => setShowArchitecture(true)}
            >
              <HiOutlineArrowTopRightOnSquare className="text-lg" />
              <span>Demo</span>
            </CustomButton>
          </div>
        </div>
      </div>
      <ImageModal
        open={showArchitecture}
        onClose={() => setShowArchitecture(false)}
        title="Valkirye Backend Architecture"
        image="/images/projects/Valkirye.png"
      />
    </section>
  );
}
