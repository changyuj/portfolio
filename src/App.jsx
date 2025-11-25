import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-800">
      {/* Abstract background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>

      <Header />
      <main className="relative max-w-5xl mx-auto px-6">
        <About />
        <hr className="border-t border-gray-200 dark:border-gray-700 my-16" />
        <Projects />
        <hr className="border-t border-gray-200 dark:border-gray-700 my-16" />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Yu Ju Chang | Software Developer
      </footer>
    </div>
  );
}
