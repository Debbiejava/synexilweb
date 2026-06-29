"use client";

import useReveal from "@/hooks/useReveal";

export default function Card({ children }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal card hover-rise">
      {children}
    </div>
  );
}
