"use client";

import useReveal from "@/hooks/useReveal";
import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal card hover-rise">
      {children}
    </div>
  );
}
