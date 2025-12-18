import ExperienceCard from "@/components/ui/experiencecard";

export default function Experience() {
  const experience = [
    {
      company: "RecordBook (YC22)",
      position: "Software Developer intern (React Native)",
      date: "May 2025 - Present",
      description:
        "Led the development of key features for Google Cloud Platform's web console while improving performance metrics by 35%.",
      techStack: ["TypeScript", "React", "GraphQL", "Jest", "Cypress"],
    },
    {
      company: "Microsoft",
      position: "Software Engineer",
      date: "August 2018 - May 2020",
      description:
        "Worked on the Microsoft Teams web application, implementing real-time collaboration features and UI components.",
      techStack: ["JavaScript", "Azure", "React", "Node.js", "SASS"],
    },
    {
      company: "Airbnb",
      position: "Frontend Developer",
      date: "January 2017 - July 2018",
      description:
        "Developed and maintained core components of Airbnb's booking platform.",
      techStack: ["JavaScript", "React", "Redux", "HTML5", "CSS3"],
    },
  ];

  return (
    <div className="space-y-8 p-8">
      {experience.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </div>
  );
}
