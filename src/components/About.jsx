import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="my-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(90deg,#6366f1,#4f46e5)"}}>
        About Me
      </h2>
      <p className="about-text">
        I'm a Software Developer specializing in building secure, scalable backend systems using Node.js, Java, Python, and MySQL.
        I bring 10+ years of experience improving data accuracy, workflow automation, and system integrity in high-reliability environments.
      </p>
    </motion.section>
  );
}
