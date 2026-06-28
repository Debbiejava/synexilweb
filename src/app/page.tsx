export default function Home() {
  return (
    <main>

      {/* SERVICES PREVIEW SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Our Core Services
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Synexil delivers secure, compliant, and intelligent Microsoft cloud solutions
            tailored for modern organisations.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Purview */}
            <a
              href="/services/purview"
              className="p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition bg-white"
            >
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-blue-700">Microsoft Purview</h3>
              <p className="mt-3 text-gray-600">
                Data governance, compliance, and risk management for secure organisations.
              </p>
            </a>

            {/* Defender */}
            <a
              href="/services/defender"
              className="p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition bg-white"
            >
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-blue-700">Microsoft Defender</h3>
              <p className="mt-3 text-gray-600">
                Advanced threat protection across identities, devices, and cloud workloads.
              </p>
            </a>

            {/* M365 Management */}
            <a
              href="/services/m365-management"
              className="p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition bg-white"
            >
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4 0-8 2-8 5v3h16v-3c0-3-4-5-8-5z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-blue-700">M365 Management</h3>
              <p className="mt-3 text-gray-600">
                Identity, access, security, and lifecycle management for Microsoft 365.
              </p>
            </a>

            {/* Training */}
            <a
              href="/services/training"
              className="p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition bg-white"
            >
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5zm0 7v8m-6-4l6 3 6-3" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-blue-700">Training</h3>
              <p className="mt-3 text-gray-600">
                Microsoft security, governance, and cloud training for teams and individuals.
              </p>
            </a>

            {/* Product Development */}
            <a
              href="/services/product-development"
              className="p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition bg-white"
            >
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 100 8 4 4 0 000-8zm8 4l-2 .5a6.97 6.97 0 01-.7 1.7l1.2 1.7-1.4 1.4-1.7-1.2a6.97 6.97 0 01-1.7.7L12 20l-.5-2a6.97 6.97 0 01-1.7-.7l-1.7 1.2-1.4-1.4 1.2-1.7a6.97 6.97 0 01-.7-1.7L4 12l2-.5a6.97 6.97 0 01.7-1.7L5.5 8.1 6.9 6.7l1.7 1.2a6.97 6.97 0 011.7-.7L12 4l.5 2a6.97 6.97 0 011.7.7l1.7-1.2 1.4 1.4-1.2 1.7c.3.5.5 1.1.7 1.7L20 12z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-blue-700">Product Development</h3>
              <p className="mt-3 text-gray-600">
                Custom software, automation tools, and AI‑powered solutions for enterprises.
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* WHY SYNEXIL SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Why Synexil?
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            We combine deep Microsoft expertise with ethical, human‑centred innovation to help organisations stay secure, compliant, and future‑ready.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-700">Ethical by Design</h3>
              <p className="mt-3 text-gray-600">
                Every solution we deliver is grounded in transparency, responsibility, and trust — ensuring technology serves people, not the other way around.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-700">Microsoft Cloud Specialists</h3>
              <p className="mt-3 text-gray-600">
                From Purview to Defender to M365, we bring advanced technical expertise to secure and optimise your digital environment.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-700">Governance & Compliance First</h3>
              <p className="mt-3 text-gray-600">
                We help organisations meet regulatory requirements, reduce risk, and build strong data governance foundations.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
