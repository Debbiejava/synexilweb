export default function ProductDevelopmentPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Product Development
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Synexil builds secure, scalable, and ethically‑designed digital products that empower
          organisations to innovate responsibly. From automation tools to AI‑powered platforms,
          we transform ideas into production‑ready solutions.
        </p>

        {/* WHAT WE BUILD */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">What We Build</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Custom enterprise applications</li>
            <li>• AI‑powered automation and decision‑support tools</li>
            <li>• Workflow and process automation solutions</li>
            <li>• Secure cloud‑native applications (Azure)</li>
            <li>• Data‑driven dashboards and reporting systems</li>
            <li>• Internal tools for governance, compliance, and risk management</li>
            <li>• Integrations with Microsoft 365, Purview, and Defender</li>
          </ul>
        </div>

        {/* DEVELOPMENT APPROACH */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Our Development Approach</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Ethical, human‑centred design principles</li>
            <li>• Secure‑by‑default engineering practices</li>
            <li>• Agile delivery with transparent communication</li>
            <li>• Cloud‑first architecture using Microsoft Azure</li>
            <li>• Continuous testing, monitoring, and optimisation</li>
            <li>• Documentation and knowledge transfer for your team</li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Benefits for Your Organisation</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Build solutions tailored to your exact business needs</li>
            <li>• Reduce manual work through automation</li>
            <li>• Improve compliance and governance with custom tooling</li>
            <li>• Enhance productivity and decision‑making with AI‑driven insights</li>
            <li>• Scale securely with cloud‑native architecture</li>
            <li>• Future‑proof your organisation with modern engineering</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Start a Product Discovery Call
          </a>
        </div>

      </div>
    </section>
  );
}
