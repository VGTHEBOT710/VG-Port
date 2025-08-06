
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChartPie, FileText, BarChart } from "lucide-react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  color: string;
  pdf?: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "super-money",
      title: "Super.Money UPI Adoption Strategy",
      subtitle: "Strategy + Data Analysis",
      description:
        "Created a comprehensive strategy to increase UPI adoption for Flipkart's Super.Money, leveraging user data and market analysis to identify key growth opportunities and implementation roadmaps.",
      tags: ["Power BI", "SQL", "Strategy", "Growth"],
      icon: <ChartPie className="w-10 h-10" />,
      color: "from-indigo-500/20 to-purple-600/20 border-indigo-500/30",
      pdf: "/pdfs/SuperMoney-UPI-Adoption (1).pdf",
    },
    {
      id: "zinga-fitness",
      title: "Zinga Fitness App – PRD",
      subtitle: "Gamification & Social Features",
      description:
        "Developed a detailed Product Requirements Document (PRD) for gamification and social features integration in Zinga Fitness App, improving user engagement and retention through leaderboards and community challenges.",
      tags: ["PRD", "User Research", "Gamification", "Figma"],
      icon: <FileText className="w-10 h-10" />,
      color: "from-emerald-500/20 to-teal-600/20 border-emerald-500/30",
      pdf: "/pdfs/PRD Zinga.pdf",
    },
    {
      id: "swish",
      title: "Swish UPI Strategy to Boost 7-Day Reorders",
      subtitle: "Retention + Growth Strategy",
      description:
        "Designed a reward-led UPI retention strategy to improve 7-day reorder rates through milestone incentives and user behavior insights.",
      tags: ["Retention Strategy", "Behavioral Insights"],
      icon: <BarChart className="w-10 h-10" />,
      color: "from-rose-500/20 to-pink-600/20 border-rose-500/30",
      pdf: "/pdfs/SWISH Capstone.pdf",
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-portfolio-dark relative"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-portfolio-purple">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card bg-gradient-to-br border ${project.color} cursor-pointer h-full`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <div className="text-portfolio-purple mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{project.subtitle}</p>
                <p className="text-gray-400 mb-6 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-black/30 px-2 py-1 rounded text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="https://www.notion.so/Project-Portfolio-247ebfb68cdf800dbbfbf906069765f1?source=copy_link" // 🔁 Replace this with your actual Notion link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-portfolio-purple text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-purple-700 transition duration-300"
          >
            View All Projects →
          </a>
        </div>

        {/* Dialog Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="sm:max-w-2xl bg-portfolio-dark border-portfolio-purple/30">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                  <span className="text-portfolio-purple">
                    {selectedProject.icon}
                  </span>
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-gray-300 mb-4">{selectedProject.subtitle}</p>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-black/30 px-3 py-1 rounded text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-portfolio-purple/20">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-sm">
                      Case study document available upon request
                    </p>
                    {selectedProject.pdf ? (
                      <a
                        href={selectedProject.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        View Full Case Study
                      </a>
                    ) : (
                      <p className="text-sm text-gray-500">PDF not available</p>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
