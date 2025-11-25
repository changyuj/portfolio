export default function Contact() {
  return (
    <section id="contact" className="my-12">
      <h2 className="text-3xl font-bold mb-4 text-indigo-600">Contact</h2>

      <p className="text-lg text-gray-700">
        Feel free to reach out if you’d like to collaborate or discuss an opportunity.
      </p>

      <ul className="mt-4 space-y-2">
        <li>Email: <a href="mailto:yuju.chang86@gmail.com" className="text-indigo-600 hover:underline">
          yuju.chang86@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/yu-ju-chang-13812b1a6"
          target="_blank" className="text-indigo-600 hover:underline">LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/changyuj"
          target="_blank" className="text-indigo-600 hover:underline">GitHub Profile</a></li>
      </ul>
    </section>
  );
}
