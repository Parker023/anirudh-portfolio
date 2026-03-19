"use client";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Navbar() {
    console.log("Navbar rendered");
    return (

        <nav className="flex justify-between items-center p-5 border-b bg-white dark:bg-gray-900 sticky top-0 z-10">

            <h1 className="font-bold text-xl"></h1>

            <div className="flex items-center space-x-6">
                <a href="#projects" className="hover:text-gray-500">Projects</a>
                <a href="#contact" className="hover:text-gray-500">Contact</a>

                <div className="flex items-center space-x-4">

                    <a
                        href="https://www.linkedin.com/in/shanmukha-anirudh-a15674193/"
                        target="_blank"
                        className="text-xl hover:text-blue-500 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/Parker023"
                        target="_blank"
                        className="text-xl hover:text-gray-700 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.instagram.com/anirudhshanmukha/"
                        target="_blank"
                        className="text-xl hover:text-pink-500 transition"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://x.com/Anirudh153421"
                        target="_blank"
                        className="text-xl hover:text-blue-400 transition"
                    >
                        <FaTwitter />
                    </a>

                </div>
            </div>

        </nav>
    );
}