import CustomButton from "@/components/ui/CustomButton";
import React from "react";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl py-24 text-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          Contact
        </p>

        <h2 className="text-4xl font-bold text-primary">
          Let's Build Something Together
        </h2>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-on-surface-variant">
          I'm currently seeking Backend and Cloud Engineering opportunities in
          Germany. If you'd like to discuss a project, collaboration, or career
          opportunity, feel free to reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <CustomButton
            href="mailto:abdullahnoman.5945@gmail.com"
            variant="outline"
          >
            Email Me
          </CustomButton>

          <CustomButton href="https://linkedin.com/in/yourlinkedin">
            LinkedIn
          </CustomButton>
          <CustomButton href="https://github.com/noman5945" variant="outline">
            Github
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
