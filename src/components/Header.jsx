export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 mb-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold text-indigo-600">Yu Ju Chang</h1>

        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
