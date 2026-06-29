"use client";

import { ReactNode } from "react";
import useReveal from "@/hooks/useReveal";

export default function ServiceHero({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: ReactNode;
}) {
  const ref = useReveal();

  return (
    <section className="synexil-gradient py-24 text-center">
      <div ref={ref} className="reveal max-w-4xl mx-auto px-6">
        <div className="mx-auto mb-6 h-16 w-16 flex items-center justify-center">
          {icon}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-lg md:text-xl mt-4 text-white/90">{subtitle}</p>
      </div>
    </section>
  );
}
