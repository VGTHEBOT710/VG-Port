
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 lg:px-24",
        scrolled ? "bg-portfolio-dark/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <span className="text-portfolio-purple">V</span>G
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={cn(
                    "nav-link",
                    activeSection === section && "active"
                  )}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Header;
