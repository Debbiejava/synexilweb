import Link from "next/link";
import useReveal from "@/hooks/useReveal";

export default function ServiceCTA() {
  const ref = useReveal();

  return (
    <section className="py-20 bg-synexil-light text-center">
      <div ref={ref} className="reveal">
        <h2 className="text-3xl font-bold text-synexil-dark">
          Ready to transform your organisation?
        </h2>

        <p className="mt-4 text-synexil-grey max-w-xl mx-auto">
          Speak with our experts and discover how Synexil can support your
          security, governance, automation, and innovation goals.
        </p>

        <Link href="/contact">
          <button className="btn-primary mt-8 hover-rise">
            Contact Synexil
          </button>
        </Link>
      </div>
    </section>
  );
}
