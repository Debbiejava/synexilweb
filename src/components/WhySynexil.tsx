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
      icon: <ShieldCheckIcon className="h-10 w-10 text-synexil-blue mb-4" />,
      title: "Security First",
      text: "Enterprise‑grade protection built on Microsoft Defender and Zero Trust principles.",
    },
    {
      icon: <LightBulbIcon className="h-10 w-10 text-synexil-blue mb-4" />,
      title: "Innovation",
      text: "Human‑centred design and automation that accelerates organisational growth.",
    },
    {
      icon: <Cog6ToothIcon className="h-10 w-10 text-synexil-blue mb-4" />,
      title: "Governance",
      text: "Microsoft Purview‑powered compliance, lifecycle management, and data protection.",
    },
    {
      icon: <AcademicCapIcon className="h-10 w-10 text-synexil-blue mb-4" />,
      title: "Upskilling",
      text: "Training and capability development for modern cloud‑ready teams.",
    },
  ];

  return (
    <section className="py-20 bg-white reveal">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div key={index} className="card hover-rise">
            {item.icon}
            <h3 className="text-xl font-semibold text-synexil-dark">
              {item.title}
            </h3>
            <p className="text-synexil-grey mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
