"use client";

import {
  ShieldCheckIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export default function WhySynexil() {
  const items = [
    {
      icon: ShieldCheckIcon,
      title: "Security First",
      text: "Enterprise‑grade protection built on Microsoft Defender and Zero Trust principles.",
    },
    {
      icon: LightBulbIcon,
      title: "Innovation",
      text: "Human‑centred design and automation that accelerates organisational growth.",
    },
    {
      icon: Cog6ToothIcon,
      title: "Governance",
      text: "Microsoft Purview‑powered compliance, lifecycle management, and data protection.",
    },
    {
      icon: AcademicCapIcon,
      title: "Upskilling",
      text: "Training and capability development for modern cloud‑ready teams.",
    },
  ];

  return (
    <section className="py-20 bg-white reveal">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="card hover-rise">
              <Icon className="h-10 w-10 text-synexil-blue mb-4" />
              <h3 className="text-xl font-semibold text-synexil-dark">
                {item.title}
              </h3>
              <p className="text-synexil-grey mt-2">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
