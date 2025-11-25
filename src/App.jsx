import { useState } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen text-gray-800">
      <Header />
      <main className="max-w-5xl mx-auto px-6">
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Yu Ju Chang | Software Developer
      </footer>
    </div>
  );
}
