import EducationCard from "@/components/EducationCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "Education background of Md Abdullah Al Noman",
};

export default function Education() {
  const EduInfo = [
    {
      institute_name: "Universitat Kassel",
      academic_time_start: "2026",
      academic_time_end: "Present",
      subject: "Computer Science",
      degree: "M.Sc",
      description:
        "Focusing on distributed systems, cloud computing, software architecture, and data engineering.",
      logo_img_path:
        "https://www.eduopinions.com/wp-content/uploads/2017/07/logo-25-350x250.png",
    },
    {
      institute_name: "Ahsanullah University of Science and Technology",
      academic_time_start: "2019",
      academic_time_end: "2023",
      subject: "Computer Science and Engineering",
      degree: "B.Sc",
      description:
        "Developed computer science and engineering basics and problem solving skills by completing Data Structure and Algorithms, Software Development, Artificial Intelligence, Object Oriented Programming and Formal Languages and Compliers courses",
      logo_img_path:
        "https://upload.wikimedia.org/wikipedia/en/a/ac/Ahsanullah_University_of_Science_and_Technology_Logo.svg",
    },
  ];
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className=" flex flex-col gap-1.5">
        <h2 className=" text-3xl font-bold uppercase tracking-[0.25em] text-secondary">
          Education
        </h2>
        {EduInfo.map((eduinfo, index) => {
          return (
            <EducationCard
              key={index}
              institute_name={eduinfo.institute_name}
              academic_time_start={eduinfo.academic_time_start}
              academic_time_end={eduinfo.academic_time_end}
              description={eduinfo.description}
              degree={eduinfo.degree}
              subject={eduinfo.subject}
              logo_img_path={eduinfo.logo_img_path}
            />
          );
        })}
      </div>
    </div>
  );
}
