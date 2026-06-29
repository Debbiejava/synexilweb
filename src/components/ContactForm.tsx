"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* SUCCESS TOAST */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-synexil-blue text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-[9999]">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-synexil-dark">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-3 border border-synexil-light rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-synexil-dark">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-3 border border-synexil-light rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-synexil-dark">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-3 h-32 border border-synexil-light rounded-lg resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-synexil-blue text-white font-semibold py-3 rounded-lg hover:bg-synexil-dark transition"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
