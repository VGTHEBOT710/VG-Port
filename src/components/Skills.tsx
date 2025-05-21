
import React from "react";
import { cn } from "@/lib/utils";

type SkillCategory = {
  name: string;
  skills: string[];
  colorClass: string;
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Product Thinking",
      skills: ["Strategy", "Roadmapping", "Agile", "MVP Scoping", "Hypothesis Testing"],
      colorClass: "from-purple-600/20 to-purple-800/20 border-purple-500/30",
    },
    {
      name: "Research & Analysis",
      skills: ["Funnel Analysis", "Journey Mapping", "Interviews", "User Testing", "Competitive Analysis"],
      colorClass: "from-blue-600/20 to-blue-800/20 border-blue-500/30",
    },
    {
      name: "Tools",
      skills: ["Power BI", "SQL", "Excel", "Notion", "Figma", "JIRA", "Trello"],
      colorClass: "from-pink-600/20 to-pink-800/20 border-pink-500/30",
    },
    {
      name: "Frameworks",
      skills: ["RICE", "MoSCoW", "A/B Testing", "HEART", "AARRR"],
      colorClass: "from-green-600/20 to-green-800/20 border-green-500/30",
    },
    {
      name: "AI/Productivity",
      skills: ["ChatGPT", "UX Pilot", "Tempo", "Miro", "Linear"],
      colorClass: "from-orange-600/20 to-orange-800/20 border-orange-500/30",
    },
    {
      name: "Soft Skills",
      skills: ["Communication", "Stakeholder Management", "Teamwork", "Leadership", "Problem Solving"],
      colorClass: "from-violet-600/20 to-violet-800/20 border-violet-500/30",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-portfolio-dark relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-portfolio-purple">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={cn(
                "bg-gradient-to-br border rounded-lg p-6 transition-transform hover:scale-[1.02]",
                category.colorClass
              )}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category.name}</h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-chip group"
                  >
                    {skill}
                    <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity">⚡</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
