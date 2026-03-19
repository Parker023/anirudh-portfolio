"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import { motion } from "framer-motion";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const skills = ["Java", "Spring Boot", "Kafka", "PostgreSQL", "React", "Data structures and Algorithms", "LLD", "HLD", "Distributed Systems", "Microservices",
    "Docker", "Kubernetes", "AWS"];
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
            href="/shanmukha_Anirudh.pdf"
            download
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            📄 Download Resume
          </a>

        </motion.section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>

          <div className="relative overflow-hidden group h-14 flex items-center">

            {/* LEFT FADE */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />

            {/* RIGHT FADE */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex gap-3 animate-scroll group-hover:[animation-play-state:paused]">

              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium shrink-0 hover:bg-black hover:text-white transition"
                >
                  {skill}
                </span>
              ))}

              {skills.map((skill, i) => (
                <span
                  key={`dup-${i}`}
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium shrink-0"
                >
                  {skill}
                </span>
              ))}

            </div>
          </div>
        </section>


        <section>
          <h2 className="text-3xl font-semibold mb-6">Coding Profiles</h2>

          <div className="flex items-center gap-4">

            <a
              href="https://leetcode.com/u/parker2399/"
              target="_blank"
              className="px-5 py-3 rounded-xl border hover:bg-gray-100 transition"
            >
              LeetCode Profile
            </a>

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