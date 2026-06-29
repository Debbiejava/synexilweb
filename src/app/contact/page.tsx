import {
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import ServiceHero from "@/components/ServiceHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Synexil | Contact Us",
  description:
    "Get in touch with Synexil for security, governance, automation, and training solutions.",
};

export default function ContactPage() {
  return (
    <>
      <ServiceHero
        title="Contact Synexil"
        subtitle="We’re here to support your security, governance, and innovation goals."
        icon={<EnvelopeIcon />}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-synexil-dark text-center">
            Send Us a Message
          </h2>

          <p className="mt-4 text-center text-synexil-grey max-w-xl mx-auto">
            Our team will respond promptly and help you find the right solution for your organisation.
          </p>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-md border border-synexil-light">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
