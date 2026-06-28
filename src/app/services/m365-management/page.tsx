export default function M365ManagementPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Microsoft 365 Tenant Management
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Synexil provides end‑to‑end Microsoft 365 tenant management, ensuring your organisation
          remains secure, compliant, and optimised for productivity. From identity governance to
          security hardening and lifecycle automation, we help you build a resilient digital workplace.
        </p>

        {/* KEY CAPABILITIES */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Key Capabilities</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Identity & Access Management (Entra ID)</li>
            <li>• Conditional Access, MFA, and Zero Trust enforcement</li>
            <li>• M365 security configuration & hardening</li>
            <li>• Email security, anti‑phishing, and data protection policies</li>
            <li>• SharePoint, OneDrive, and Teams governance</li>
            <li>• User lifecycle automation (joiners, movers, leavers)</li>
            <li>• Compliance, retention, and data lifecycle policies</li>
            <li>• Monitoring, reporting, and operational excellence</li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Benefits for Your Organisation</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Stronger security posture across your entire M365 environment</li>
            <li>• Reduced operational overhead through automation</li>
            <li>• Improved compliance with regulatory and organisational standards</li>
            <li>• Enhanced user experience and productivity</li>
            <li>• Consistent governance across Teams, SharePoint, and OneDrive</li>
            <li>• Clear visibility into identity, access, and security risks</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Book a Tenant Health Check
          </a>
        </div>

      </div>
    </section>
  );
}
