import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anirudh | Backend Engineer",
  description: "Portfolio of Anirudh - Java, Spring Boot, Microservices Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" className="light">
      <body className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white">
         <Navbar />  
        {children}
      </body>
    </html>
  );
}
