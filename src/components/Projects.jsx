export default function Projects() {
  const projects = [
    {
      title: "Secure Workflow Management System",
      tech: "Node.js, Express, MySQL, Docker, JWT, Jest",
      desc:
        "Enterprise-style system with RBAC, audit logging, secure REST APIs, input sanitization, workflow CRUD operations, and test coverage.",
      link: "https://github.com/changyuj"
    },
    {
      title: "Threat Log Analyzer",
      tech: "Python, FastAPI, CLI, Docker",
      desc:
        "Log ingestion and anomaly detection tool producing interactive dashboards and CLI reports for security insights.",
      link: "https://github.com/changyuj"
    },
    {
      title: "Full-Stack CMS Blog Platform",
      tech: "Node.js, Express, EJS, MySQL",
      desc:
        "Multi-page content management system with auth, CRUD operations, input validation, error handling, and secure route protection.",
      link: "https://github.com/changyuj"
    }
  ];

  return (
    <section id="projects" className="my-16">
      <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(90deg,#6366f1,#4f46e5)"}}>
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-tech">{p.tech}</p>
            <p className="project-desc">{p.desc}</p>
            <a href={p.link} target="_blank" className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
