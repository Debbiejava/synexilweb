"use client";

import useReveal from "@/hooks/useReveal";
import { ReactNode } from "react";

export default function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useReveal();

  return (
    <section ref={ref} className={`reveal py-20 ${className}`}>
      {children}
    </section>
  );
}
