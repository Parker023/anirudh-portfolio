"use client";

import { useState } from "react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        };

        try {
          setLoading(true);
          setError("");
          setSuccess(false);

          const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
          });

          if (!res.ok) throw new Error("Failed");

          setSuccess(true);
          form.reset();

          setTimeout(() => setSuccess(false), 3000);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }}
      className="flex flex-col gap-4 max-w-md"
    >
      <input name="name" placeholder="Your Name" className="border p-3 rounded" />
      <input name="email" placeholder="Your Email" className="border p-3 rounded" />
      <textarea name="message" placeholder="Your Message" className="border p-3 rounded" />

      <button
        disabled={loading}
        className="bg-black text-white px-5 py-2 rounded-lg hover:scale-105 active:scale-95 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-600">✅ Message sent!</p>}
      {error && <p className="text-red-600">❌ {error}</p>}
    </form>
  );
}