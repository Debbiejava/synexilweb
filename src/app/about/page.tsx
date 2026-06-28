export default function AboutPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About Synexil
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Synexil is a modern technology consultancy dedicated to empowering organisations
          through ethical innovation, secure cloud transformation, and human‑centred design.
          We specialise in Microsoft security, governance, compliance, and intelligent automation —
          helping clients build resilient, future‑ready digital environments.
        </p>

        {/* OUR MISSION */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-blue-700">Our Mission</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">
            To deliver secure, compliant, and ethically‑designed technology solutions that
            enable organisations to innovate responsibly, protect their data, and empower
            their people.
          </p>
        </div>

        {/* OUR VALUES */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-blue-700">Our Values</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-8 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-700">Ethical Innovation</h3>
              <p className="mt-3 text-gray-600">
                We believe technology should serve people. Every solution we build is grounded
                in transparency, responsibility, and trust.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-700">Security & Governance</h3>
              <p className="mt-3 text-gray-600">
                We help organisations strengthen their security posture and meet regulatory
                requirements with confidence.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-700">Human‑Centred Design</h3>
              <p className="mt-3 text-gray-600">
                Our solutions are designed around real people, real workflows, and real
                organisational needs.
              </p>
            </div>

          </div>
        </div>

        {/* OUR EXPERTISE */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-blue-700">Our Expertise</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Microsoft Purview governance, compliance, and risk management</li>
            <li>• Microsoft Defender threat protection and XDR</li>
            <li>• Microsoft 365 identity, access, and tenant management</li>
            <li>• Cloud governance, Zero Trust, and security architecture</li>
            <li>• AI‑powered automation and intelligent tooling</li>
            <li>• Training, certification, and capability development</li>
            <li>• Ethical and responsible technology design</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Work With Us
          </a>
        </div>

      </div>
    </section>
  );
}
