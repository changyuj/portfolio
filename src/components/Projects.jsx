export default function Projects() {
  const projects = [
    {
      title: "Secure Workflow Management System",
      tech: "Node.js, Express, MySQL, Docker, JWT, Jest",
      desc:
        "Enterprise-style system with RBAC, audit logging, secure REST APIs, "
        + "input sanitization, workflow CRUD operations, and test coverage.",
      link: "https://github.com/changyuj"
    },
    {
      title: "Threat Log Analyzer",
      tech: "Python, FastAPI, CLI, Docker",
      desc:
        "Log ingestion and anomaly detection tool producing interactive dashboards "
        + "and CLI reports for security insights.",
      link: "https://github.com/changyuj"
    },
    {
      title: "Full-Stack CMS Blog Platform",
      tech: "Node.js, Express, EJS, MySQL",
      desc:
        "Multi-page content management system with auth, CRUD operations, "
        + "input validation, error handling, and secure route protection.",
      link: "https://github.com/changyuj"
    }
  ];

  return (
    <section id="projects" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">{p.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{p.tech}</p>
            <p className="text-gray-700 mb-4">{p.desc}</p>
            <a
              href={p.link}
              className="text-indigo-600 font-medium hover:underline"
              target="_blank"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
