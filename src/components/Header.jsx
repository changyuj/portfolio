import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [darkMode, setDarkMode] = useState(false);

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let id of sections) {
        const elem = document.getElementById(id);
        if (elem && scrollY >= elem.offsetTop) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">Yu Ju Chang</h1>

        {/* Navbar links */}
        <div className="flex items-center gap-12"> {/* THIS ensures proper spacing */}
          <a
            href="#about"
            className={`text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 ${
              activeSection === "about" ? "text-indigo-600 dark:text-indigo-400" : ""
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 ${
              activeSection === "projects" ? "text-indigo-600 dark:text-indigo-400" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 ${
              activeSection === "contact" ? "text-indigo-600 dark:text-indigo-400" : ""
            }`}
          >
            Contact
          </a>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-6 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}
