import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Secure Workflow Management System", tech: "Node.js, Express, MySQL, Docker, JWT, Jest", desc: "Enterprise-style system...", link: "https://github.com/changyuj" },
    { title: "Threat Log Analyzer", tech: "Python, FastAPI, CLI, Docker", desc: "Log ingestion and anomaly detection...", link: "https://github.com/changyuj" },
    { title: "Full-Stack CMS Blog Platform", tech: "Node.js, Express, EJS, MySQL", desc: "Multi-page CMS with auth and CRUD...", link: "https://github.com/changyuj" }
  ];

  return (
    <motion.section
      id="projects"
      className="my-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(90deg,#6366f1,#4f46e5)"}}>
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h3 className="project-title">{p.title}</h3>
            <p className="project-tech">{p.tech}</p>
            <p className="project-desc">{p.desc}</p>
            <a href={p.link} target="_blank" className="project-link">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
