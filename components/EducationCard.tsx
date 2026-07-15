import React from "react";

type EducationCardProps = {
  institute_name: string;
  academic_time_start: string;
  academic_time_end: string;
  subject: string;
  degree: string;
  description: string;
  logo_img_path: string;
};
export default function EducationCard({
  institute_name,
  academic_time_start,
  academic_time_end,
  subject,
  degree,
  description,
  logo_img_path,
}: EducationCardProps) {
  return (
    <div className="flex gap-6 rounded-xl border border-outline p-6">
      <img
        src={logo_img_path}
        alt={institute_name}
        className="h-14 w-14 object-contain"
      />

      <div>
        <h3 className="text-xl font-semibold text-primary">{institute_name}</h3>

        <p className="text-secondary">
          {degree} {subject}
        </p>

        <p className="mt-1 text-sm text-on-surface-variant">
          {academic_time_start} – {academic_time_end}
        </p>

        <p className="mt-4 text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}
