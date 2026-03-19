"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import { motion } from "framer-motion";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (

    <>
      <main className="p-10 space-y-20 max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">

        {/* Hero Section */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4">

          <h1 className="text-5xl font-bold">
            Hi, I'm Anirudh 👋
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Java Backend Developer | Spring Boot | Microservices
          </p>
          <a
            href="/resume.pdf"
            download
            className="border px-5 py-2 rounded-lg"
          >
            Download Resume
          </a>
        </motion.section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>

          <div className="flex flex-wrap gap-3">
            <span className="border px-3 py-1 rounded">Java</span>
            <span className="border px-3 py-1 rounded">Spring Boot</span>
            <span className="border px-3 py-1 rounded">Kafka</span>
            <span className="border px-3 py-1 rounded">PostgreSQL</span>
            <span className="border px-3 py-1 rounded">React</span>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">


            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="card p-6 rounded-2xl border shadow-sm"
            >

              <h3 className="text-xl font-bold">Mini-S3</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built a file storage service using Spring Boot, JWT authentication, and local storage.
                <br />
                <a
                  href="https://github.com/Parker023/miniS3"
                  target="_blank"
                  className="text-blue-500 mt-3 inline-block"
                >
                  View Code →
                </a>
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="card p-6 rounded-2xl border shadow-sm"
            >

              <h3 className="text-xl font-bold">Patient Management System</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Implemented Patient Management System using microservices architecture using Kafka and gRPC.
                <br />
                <a
                  href="https://github.com/Parker023/patient-management"
                  target="_blank"
                  className="text-blue-500 mt-3 inline-block"
                >
                  View Code →
                </a>
              </p>
            </motion.div>


          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>

          <ContactForm />
        </section>

      </main>
    </>
  );
}