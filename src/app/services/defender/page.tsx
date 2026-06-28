export default function DefenderPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Microsoft Defender
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Strengthen your organisation’s security posture with Microsoft Defender — a unified,
          intelligent threat protection suite that safeguards identities, endpoints, cloud apps,
          email, and workloads across your digital estate.
        </p>

        {/* KEY CAPABILITIES */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Key Capabilities</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Defender for Endpoint — advanced endpoint detection & response (EDR)</li>
            <li>• Defender for Identity — identity threat detection & lateral movement analysis</li>
            <li>• Defender for Office 365 — anti‑phishing, anti‑malware, safe links & safe attachments</li>
            <li>• Defender for Cloud Apps — cloud access security broker (CASB) capabilities</li>
            <li>• Defender for Cloud — workload protection across hybrid & multi‑cloud environments</li>
            <li>• Threat analytics, automated investigation, and attack surface reduction</li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700">Benefits for Your Organisation</h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• Unified security visibility across identities, devices, apps, and cloud workloads</li>
            <li>• AI‑powered threat detection and automated response</li>
            <li>• Reduced risk of ransomware, phishing, and credential compromise</li>
            <li>• Faster incident response with automated investigation workflows</li>
            <li>• Integration with Microsoft Sentinel for end‑to‑end SIEM + XDR</li>
            <li>• Strengthened Zero Trust security posture</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Request a Security Assessment
          </a>
        </div>

      </div>
    </section>
  );
}
