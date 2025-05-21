

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section-padding bg-portfolio-dark relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-portfolio-purple">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative">
              <Avatar className="w-64 h-64 border-4 border-portfolio-purple/30 bg-portfolio-purple/10 relative">
                <AvatarImage 
                  src="/vaishnav.jpg" 
                  alt="Vaishnav Gangamwar profile photo"
                  className="object-cover" 
                />
                <AvatarFallback className="text-portfolio-purple text-4xl">VG</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-portfolio-purple/20 rounded-full blur-xl"></div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Aspiring Product Manager
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Proactive and growth-minded aspiring APM with a strong foundation in product discovery, user journey mapping, and data storytelling. 
              Built end-to-end case studies simulating real-world product challenges to showcase product thinking, prioritization, and metric-driven execution. 
              Skilled in tools like Power BI, SQL, Figma, and frameworks like RICE and MoSCoW. 
              Actively upskilled during a career break with real deliverables, demonstrating ownership and clarity of thought. 
              Ready to contribute from day one.
            </p>

            <div className="bg-secondary p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <span className="inline-block w-4 h-4 rounded-full bg-portfolio-purple mr-2"></span>
                Education
              </h4>
              <div className="pl-6 border-l-2 border-portfolio-purple/30">
                <h5 className="text-lg font-medium text-white">Bachelor of Engineering – Computer Science</h5>
                <p className="text-gray-300">Yeshwantrao Chavan College of Engineering, Nagpur</p>
                <p className="text-gray-400">(2019–2023) | CGPA: 7.3/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

