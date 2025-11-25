import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col items-center">
      {/* Background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl dark:bg-indigo-700"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl dark:bg-pink-700"></div>

      <Header />

      <main className="relative w-full max-w-4xl px-6 flex flex-col items-center">
        <About />
        <hr className="border-t border-gray-200 dark:border-gray-700 my-16 w-full" />
        <Projects />
        <hr className="border-t border-gray-200 dark:border-gray-700 my-16 w-full" />
        <Contact />
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Yu Ju Chang | Software Developer
      </footer>
    </div>
  );
}
