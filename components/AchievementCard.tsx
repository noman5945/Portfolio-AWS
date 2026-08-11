import React from "react";

type AchievementCardProps = {
  title: string;
  description: string;
  imagePath: string;
  date: string;
};
export default function AchievementCard({
  title,
  description,
  imagePath,
  date,
}: AchievementCardProps) {
  return (
    <div className=" my-1.5 ">
      <article className="group flex flex-col gap-5 rounded-2xl border border-outline p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className=" flex flex-row items-center justify-between">
          {/* Title */}
          <h3 className="text-3xl font-semibold tracking-[-0.03em] leading-tight">
            {title}
          </h3>
          {/** Date */}
          <time
            dateTime={date}
            className="shrink-0 pt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            {date}
          </time>
        </div>

        {/* Image */}
        <div className="aspect-3/2 overflow-hidden rounded-xl">
          <img
            src={imagePath}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Description */}
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </article>
    </div>
  );
}
