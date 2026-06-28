import React from "react";
import { ShieldCheck, Lightbulb, Cog6Tooth, AcademicCap } from "@heroicons/react/24/outline";

export default function WhySynexil() {
  const items = [
    {
      title: "Ethical Innovation",
      description:
        "We build solutions that prioritize transparency, compliance, and responsible technology adoption.",
      icon: Lightbulb,
    },
    {
      title: "Enterprise‑Grade Security",
      description:
        "Our Microsoft Defender and Purview expertise ensures your data, identities, and infrastructure remain protected.",
      icon: ShieldCheck,
    },
    {
      title: "Automation & Modernization",
      description:
        "We develop intelligent applications that streamline workflows, reduce manual effort, and improve operational efficiency.",
      icon: Cog6Tooth,
    },
    {
      title: "Certified Expertise",
      description:
        "With advanced Microsoft certifications and hands‑on industry experience, we deliver solutions you can trust.",
      icon: AcademicCap,
    },
  ];

  return (
    <section className="py-20 bg-synexil-light">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-synexil-dark text-center">
          Why Synexil?
        </h2>

        <p className="mt-4 text-center text-synexil-grey max-w-2xl mx-auto">
          We combine ethical innovation with enterprise‑grade security to help organizations modernize confidently.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-synexil-light hover:shadow-lg transition"
            >
              <item.icon className="h-10 w-10 text-synexil-blue" />
              <h3 className="mt-4 text-xl font-semibold text-synexil-dark">{item.title}</h3>
              <p className="mt-2 text-synexil-grey">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
