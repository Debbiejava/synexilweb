import useReveal from "@/hooks/useReveal";

export default function AboutPreview() {
  const ref = useReveal();

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="reveal max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-synexil-dark">
          Who We Are
        </h2>

        <p className="mt-4 text-synexil-grey max-w-2xl mx-auto">
          Synexil empowers organisations with secure, compliant, and
          intelligent technology solutions built on Microsoft’s cloud
          ecosystem. We combine governance, security, automation, and
          human‑centred innovation to deliver real impact.
        </p>
      </div>
    </section>
  );
}
