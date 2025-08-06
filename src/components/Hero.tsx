
import React from "react";
import { ChartPie, BarChart, FileText, Settings } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute w-full h-full overflow-hidden">
        <ChartPie
          className="absolute text-portfolio-purple/10 animate-float"
          size={80}
          style={{ top: "15%", left: "10%", animationDelay: "0s" }}
        />
        <BarChart
          className="absolute text-portfolio-purple/10 animate-float"
          size={100}
          style={{ top: "60%", left: "15%", animationDelay: "1s" }}
        />
        <FileText
          className="absolute text-portfolio-purple/10 animate-float"
          size={90}
          style={{ top: "25%", right: "12%", animationDelay: "2s" }}
        />
        <Settings
          className="absolute text-portfolio-purple/10 animate-float"
          size={70}
          style={{ top: "70%", right: "15%", animationDelay: "3s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-portfolio-purple/20 blur-[100px]"
          style={{ top: "30%", left: "50%", transform: "translateX(-50%)" }}
        />
      </div>

      <div className="z-10 text-center max-w-4xl px-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Vaishnav <span className="text-portfolio-purple">Gangamwar</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10">
          Aspiring APM | Data-Driven Product Thinker | Always Building
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="btn-primary text-lg py-3 px-8"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("projects");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </a>
          <a
           href="/Vaishnav Resume.pdf"
           download="Vaishnav Resume.pdf"
           className="border border-portfolio-purple text-white py-3 px-8 rounded-md hover:bg-portfolio-purple/10 transition-colors text-lg"
          >
            Download Resume
</a>

        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-portfolio-purple"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
