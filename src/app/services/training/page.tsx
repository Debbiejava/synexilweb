export default function TrainingServicePage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Training & Certification
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Empower your team with expert‑led Microsoft security, governance, and cloud training.
          Synexil delivers structured, hands‑on learning programmes aligned with Microsoft’s
          certification pathways — designed to build real‑world capability and organisational resilience.
        </p>

        {/* TRAINING PROGRAMMES */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Training Programmes</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Microsoft Security Fundamentals — SC‑900</li>
            <li>• Microsoft Security Operations Analyst — SC‑200</li>
            <li>• Microsoft Identity & Access Administrator — SC‑300</li>
            <li>• Microsoft Information Protection Administrator — SC‑400</li>
            <li>• Microsoft Purview Compliance & Governance</li>
            <li>• Microsoft Defender XDR & Threat Protection</li>
            <li>• Cloud Governance & Risk Management</li>
            <li>• AI‑powered Security & Automation Essentials</li>
          </ul>
        </div>

        {/* DELIVERY FORMATS */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Delivery Formats</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Instructor‑led virtual training</li>
            <li>• On‑site corporate workshops</li>
            <li>• One‑to‑one coaching for professionals</li>
            <li>• Custom training programmes for teams</li>
            <li>• Certification exam preparation sessions</li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Why Train with Synexil?</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Delivered by certified Microsoft security and governance specialists</li>
            <li>• Practical, scenario‑based learning — not just theory</li>
            <li>• Tailored programmes aligned to your organisation’s needs</li>
            <li>• Builds internal capability and reduces reliance on external support</li>
            <li>• Supports career progression and certification success</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Book a Training Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
