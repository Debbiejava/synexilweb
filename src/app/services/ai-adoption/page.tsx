import {
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

import ServiceHero from "@/components/ServiceHero";
import ServiceFeatureList from "@/components/ServiceFeatureList";
import ServiceCTA from "@/components/ServiceCTA";


export default function AIAdoptionPage() {
  return (
    <main className="px-8 py-16">
      <ServiceHero
        title="AI Adoption"
        subtitle="Helping enterprises adopt Microsoft Copilot, generative AI, and automation responsibly and effectively."
        icon={<CubeTransparentIcon className="h-16 w-16 text-white" />}
      />

      <ServiceFeatureList
        features={[
          "AI readiness assessments",
          "Copilot deployment & governance",
          "Responsible AI frameworks",
          "AI change management & user adoption",
          "AI champions network setup",
          "Workflow automation & optimization",
        ]}
      />

      <ServiceCTA />
    </main>
  );
}
