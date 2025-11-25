import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="my-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(90deg,#6366f1,#4f46e5)"}}>
        Contact
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        Feel free to reach out if you’d like to collaborate or discuss an opportunity.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <a href="mailto:yuju.chang86@gmail.com" className="contact-link">Email Me</a>
        <a href="https://www.linkedin.com/in/yu-ju-chang-13812b1a6" target="_blank" className="contact-link">LinkedIn</a>
        <a href="https://github.com/changyuj" target="_blank" className="contact-link">GitHub</a>
      </div>
    </motion.section>
  );
}
