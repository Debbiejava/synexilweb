import {
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

import ServiceHero from "@/components/ServiceHero";
import ServiceFeatureList from "@/components/ServiceFeatureList";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata = {
  title: "Synexil | Microsoft Security & Governance Training",
  description:
    "Upskill your team with practical, real‑world Microsoft security and governance training.",
};

export default function TrainingPage() {
  return (
    <>
      <ServiceHero
        title="Training & Upskilling"
        subtitle="Upskill your team with practical, real‑world Microsoft security and governance training."
        icon={<AcademicCapIcon className="h-16 w-16 text-white" />}
      />

      <ServiceFeatureList
        features={[
          "Microsoft Purview compliance & governance training",
          "Microsoft Defender XDR security operations workshops",
          "Identity & Zero Trust fundamentals",
          "Hands‑on labs for M365 administrators",
          "Custom enterprise training programmes",
          "Certification preparation (SC‑900, SC‑200, SC‑300, SC‑400)",
        ]}
      />

      <ServiceCTA />
    </>
  );
}
