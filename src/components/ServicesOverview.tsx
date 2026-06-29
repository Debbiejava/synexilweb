"use client";

import Link from "next/link";
import useReveal from "@/hooks/useReveal";

export default function ServicesOverview() {
  const services = [
    { name: "Microsoft Purview", href: "/services/purview" },
    { name: "Microsoft Defender", href: "/services/defender" },
    { name: "M365 Management", href: "/services/m365-management" },
    { name: "Training & Upskilling", href: "/services/training" },
    { name: "Product Development", href: "/services/product-development" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const ref = useReveal();
          return (
            <Link key={index} href={service.href}>
              <div ref={ref} className="reveal card hover-rise cursor-pointer">
                <h3 className="text-xl font-semibold text-synexil-blue">
                  {service.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
