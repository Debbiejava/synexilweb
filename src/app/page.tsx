import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import CTASection from "@/components/CTASection";
import AboutPreview from "@/components/AboutPreview";

export const metadata = {
  title: "Synexil | Empowering Ethical Innovation",
};

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION — reduced height */}
      <section className="synexil-gradient py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Empowering Ethical Innovation
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white/90">
            Governance, security, automation, and training for modern enterprises.
          </p>

          <div className="mt-8">
            <a
              href="/services"
              className="inline-block bg-white text-synexil-blue font-semibold px-6 py-3 rounded-lg shadow hover:bg-synexil-light transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW — reduced spacing */}
      <section className="py-12">
        <ServicesOverview />
      </section>

      {/* WHO WE ARE — reduced spacing */}
      <section className="py-12 bg-white">
        <AboutPreview />
      </section>

      {/* CTA — reduced height */}
      <section className="py-10 bg-synexil-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Ready to elevate your organization?
          </h2>
          <p className="mt-3 text-white/90">
            Synexil delivers secure, compliant, and scalable solutions across Microsoft’s cloud ecosystem.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-synexil-blue font-semibold px-6 py-3 rounded-lg shadow hover:bg-synexil-light transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
