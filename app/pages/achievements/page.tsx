import AchievementCard from "@/components/AchievementCard";
import React from "react";

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      title: "BJET IT TRAINING COMPLETION",
      date: "16 December,2024",
      description:
        "Completed 8 months long BJET IT Engineers training program in 2024. ",
      imagePath: "/images/achievements/bjet_cert.JPG",
    },
  ];
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className=" flex flex-col gap-1.5">
        <h2 className=" text-3xl font-bold uppercase tracking-[0.25em] text-secondary">
          Achievements
        </h2>
        {achievements.map((achievement) => {
          return (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
              imagePath={achievement.imagePath}
              date={achievement.date}
            />
          );
        })}
      </div>
    </div>
  );
}
