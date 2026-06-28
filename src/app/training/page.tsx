export default function TrainingPage() {
  return (
    <main>

      {/* TRAINING HIGHLIGHT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE — TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Upskill with Synexil Training
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Build the skills your organisation needs to stay secure, compliant, and cloud‑ready.
              Our Microsoft‑aligned training covers Purview, Defender, M365, governance, and AI‑driven
              security practices — delivered by certified experts.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Microsoft Security (SC‑900, SC‑200, SC‑300, SC‑400)</li>
              <li>• Microsoft Purview & Compliance</li>
              <li>• Identity & Access Management</li>
              <li>• Cloud Governance & Risk Management</li>
              <li>• AI‑powered Security & Automation</li>
            </ul>

            <a
              href="/training"
              className="inline-block mt-10 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
            >
              Explore Training Programmes
            </a>
          </div>

          {/* RIGHT SIDE — VISUAL PANEL */}
          <div className="h-64 md:h-80 rounded-xl bg-gradient-to-br from-green-500 via-blue-500 to-blue-700 shadow-lg flex items-center justify-center text-white text-2xl font-semibold">
            Elevate Your Team’s Skills
          </div>

        </div>
      </section>

    </main>
  );
}
