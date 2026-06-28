export default function ServicesPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          Our Services
        </h1>

        <p className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
          Synexil delivers secure, compliant, and intelligent Microsoft cloud solutions
          designed to help organisations innovate responsibly and operate with confidence.
        </p>

        {/* SERVICES GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Purview */}
          <a
            href="/services/purview"
            className="p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-700">Microsoft Purview</h3>
            <p className="mt-3 text-gray-600">
              Governance, compliance, data lifecycle, insider risk, and regulatory readiness.
            </p>
          </a>

          {/* Defender */}
          <a
            href="/services/defender"
            className="p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-700">Microsoft Defender</h3>
            <p className="mt-3 text-gray-600">
              Threat protection across identities, endpoints, cloud apps, and workloads.
            </p>
          </a>

          {/* M365 Management */}
          <a
            href="/services/m365-management"
            className="p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-700">M365 Tenant Management</h3>
            <p className="mt-3 text-gray-600">
              Identity, access, security, governance, and operational excellence for Microsoft 365.
            </p>
          </a>

          {/* Training */}
          <a
            href="/services/training"
            className="p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-700">Training & Certification</h3>
            <p className="mt-3 text-gray-600">
              Microsoft security, governance, and cloud training delivered by certified experts.
            </p>
          </a>

          {/* Product Development */}
          <a
            href="/services/product-development"
            className="p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-700">Product Development</h3>
            <p className="mt-3 text-gray-600">
              Custom software, automation tools, and AI‑powered solutions for enterprise needs.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}
