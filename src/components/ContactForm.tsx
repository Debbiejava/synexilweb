"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Message submitted. (Form backend not yet connected)");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md reveal"
    >
      <div className="mb-6">
        <label className="block text-synexil-dark font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-synexil-light rounded-lg px-4 py-3"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-synexil-dark font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-synexil-light rounded-lg px-4 py-3"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-synexil-dark font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-synexil-light rounded-lg px-4 py-3 h-32"
          required
        />
      </div>

      <button type="submit" className="btn-primary hover-rise w-full">
        Send Message
      </button>
    </form>
  );
}
