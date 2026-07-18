import React from "react";

type languageInfo = {
  language: string;
  level: string;
};

type SpokenLanguageProps = {
  languages: languageInfo[];
};

export default function SpokenLanguageSection({
  languages,
}: SpokenLanguageProps) {
  return (
    <div className="mt-24">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          Communication
        </p>

        <h2 className="mt-3 text-3xl font-bold text-primary">
          Spoken Languages
        </h2>

        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Languages I use for communication and continue to develop.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {languages.map((language, index) => (
          <div
            key={index}
            className="rounded-xl border border-outline bg-surface p-6"
          >
            <div
              className="flex items-center
                
              justify-between 
              transition-all duration-300
              hover:-translate-y-1
              hover:border-secondary-container
              hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary">
                {language.language}
              </h3>

              <span className="rounded-full border border-secondary px-3 py-1 text-sm text-secondary">
                {language.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
