import useReveal from "@/hooks/useReveal";

export default function Section({ children, className = "" }) {
  const ref = useReveal();

  return (
    <section ref={ref} className={`reveal py-20 ${className}`}>
      {children}
    </section>
  );
}
