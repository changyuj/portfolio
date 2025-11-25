<nav className="flex items-center space-x-10 text-gray-700 dark:text-gray-300 font-medium text-lg">
  <div className="flex space-x-10">
    <a
      href="#about"
      className={`px-2 py-1 rounded-md hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 ${
        activeSection === "about" ? "text-indigo-600 dark:text-indigo-400" : ""
      }`}
    >
      About
    </a>
    <a
      href="#projects"
      className={`px-2 py-1 rounded-md hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 ${
        activeSection === "projects" ? "text-indigo-600 dark:text-indigo-400" : ""
      }`}
    >
      Projects
    </a>
    <a
      href="#contact"
      className={`px-2 py-1 rounded-md hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 ${
        activeSection === "contact" ? "text-indigo-600 dark:text-indigo-400" : ""
      }`}
    >
      Contact
    </a>
  </div>

  {/* Dark Mode Toggle */}
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="ml-6 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
  >
    {darkMode ? "Light" : "Dark"}
  </button>
</nav>
