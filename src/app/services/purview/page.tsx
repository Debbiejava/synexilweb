export default function PurviewPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Microsoft Purview
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Microsoft Purview provides unified data governance, compliance, and risk management
          across your entire digital estate. Synexil helps organisations implement Purview to
          classify, protect, and govern sensitive data while meeting regulatory and operational
          requirements with confidence.
        </p>

        {/* KEY CAPABILITIES */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Key Capabilities</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Data classification and sensitivity labelling</li>
            <li>• Data Loss Prevention (DLP) across M365, endpoints, and cloud apps</li>
            <li>• Information protection and encryption policies</li>
            <li>• Insider Risk Management and activity monitoring</li>
            <li>• Records management and retention policies</li>
            <li>• eDiscovery and legal hold workflows</li>
            <li>• Compliance Manager assessments and score optimisation</li>
            <li>• Data lifecycle and governance automation</li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Benefits for Your Organisation</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Stronger data protection and reduced risk exposure</li>
            <li>• Improved compliance with regulatory frameworks</li>
            <li>• Clear visibility into sensitive data across your environment</li>
            <li>• Automated governance and lifecycle management</li>
            <li>• Reduced operational overhead through centralised controls</li>
            <li>• Enhanced trust with customers, regulators, and stakeholders</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Request a Purview Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
