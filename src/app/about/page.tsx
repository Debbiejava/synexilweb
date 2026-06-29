import {
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import ServiceHero from "@/components/ServiceHero";
import AboutPreview from "@/components/AboutPreview";

export const metadata = {
  title: "Synexil | About Us",
  description:
    "Building a safer, smarter digital future for organisations across the world.",
};

export default function AboutPage() {
  return (
    <>
      <ServiceHero
        title="About Synexil"
        subtitle="Building a safer, smarter digital future for organisations across the world."
        icon={<GlobeAltIcon />}
      />

      {/* ABOUT PREVIEW */}
      <AboutPreview />

      {/* MISSION & VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-synexil-dark text-center">
            Our Mission & Values
          </h2>

          <p className="mt-4 text-center text-synexil-grey max-w-2xl mx-auto">
            Synexil is committed to ethical innovation, secure digital transformation,
            and empowering organisations with technology that protects people,
            strengthens governance, and unlocks intelligent automation.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-xl shadow-md border border-synexil-light">
              <h3 className="text-xl font-semibold text-synexil-blue">Ethical Innovation</h3>
              <p className="mt-3 text-synexil-grey">
                We design solutions that prioritise transparency, responsibility,
                and human‑centred technology adoption.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md border border-synexil-light">
              <h3 className="text-xl font-semibold text-synexil-blue">Security First</h3>
              <p className="mt-3 text-synexil-grey">
                Our work is grounded in Microsoft Defender, Purview, and Zero Trust principles
                to ensure organisations stay protected.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md border border-synexil-light">
              <h3 className="text-xl font-semibold text-synexil-blue">Empowering People</h3>
              <p className="mt-3 text-synexil-grey">
                We believe technology should elevate human capability, not replace it —
                supporting teams through training and modernisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 bg-synexil-light">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-synexil-dark text-center">
            Our Expertise
          </h2>

          <p className="mt-4 text-center text-synexil-grey max-w-2xl mx-auto">
            With advanced Microsoft certifications and hands‑on experience across security,
            governance, automation, and cloud architecture, Synexil delivers solutions
            that are secure, scalable, and future‑ready.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow-md border border-synexil-light">
              <h3 className="text-lg font-semibold text-synexil-blue">Microsoft Purview</h3>
              <p className="mt-2 text-synexil-grey">
                Data governance, compliance, and risk management.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-synexil-light">
              <h3 className="text-lg font-semibold text-synexil-blue">Microsoft Defender XDR</h3>
              <p className="mt-2 text-synexil-grey">
                Unified security operations and threat protection.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-synexil-light">
              <h3 className="text-lg font-semibold text-synexil-blue">Microsoft 365 Management</h3>
              <p className="mt-2 text-synexil-grey">
                Identity, access, and Zero Trust administration.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-synexil-light">
              <h3 className="text-lg font-semibold text-synexil-blue">Training & Upskilling</h3>
              <p className="mt-2 text-synexil-grey">
                Hands‑on workshops and certification preparation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-synexil-light">
              <h3 className="text-lg font-semibold text-synexil-blue">Product Development</h3>
              <p className="mt-2 text-synexil-grey">
                Intelligent applications, automation tools, and AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
