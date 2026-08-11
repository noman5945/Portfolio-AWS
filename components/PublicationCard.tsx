import React from "react";

type PublicationCardProps = {
  title: string;
  description: string;
  authors: string;
  venue: string;
  date: string;
  imagePath?: string;
  link?: string;
};
export default function PublicationCard({
  title,
  description,
  authors,
  venue,
  date,
  imagePath,
  link,
}: PublicationCardProps) {
  return (
    <article className="group flex flex-col gap-6 rounded-2xl border border-outline p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Publication
          </p>

          <h3 className="text-3xl font-bold leading-tight tracking-[-0.03em]">
            {title}
          </h3>
        </div>

        <time className="shrink-0 pt-1 text-sm text-muted-foreground">
          {date}
        </time>
      </div>

      {/* Publication image */}
      {imagePath && (
        <div className="overflow-hidden rounded-xl">
          <img
            src={imagePath}
            alt={title}
            className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Metadata */}
      <div className="flex flex-col gap-2 text-sm">
        <p>
          <span className="font-medium">Authors:</span>{" "}
          <span className="text-muted-foreground">{authors}</span>
        </p>

        <p>
          <span className="font-medium">Published in:</span>{" "}
          <span className="text-muted-foreground">{venue}</span>
        </p>
      </div>

      {/* Description */}
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-sm font-semibold underline-offset-4 hover:underline"
        >
          Read Publication →
        </a>
      )}
    </article>
  );
}
