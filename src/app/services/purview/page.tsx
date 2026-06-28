import {
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import ServiceHero from "@/components/ServiceHero";
import ServiceFeatureList from "@/components/ServiceFeatureList";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata = {
  title: "Synexil | Microsoft Purview Solutions",
  description:
    "Unified data governance, compliance, and protection powered by Microsoft Purview.",
};

export default function PurviewPage() {
  return (
    <>
      <ServiceHero
        title="Microsoft Purview"
        subtitle="Unified data governance, compliance, and protection."
        icon={DocumentMagnifyingGlassIcon}
      />

      <ServiceFeatureList
        features={[
          "Data classification & sensitivity labeling",
          "Data Loss Prevention (DLP) policies",
          "Insider risk management",
          "Records management & retention policies",
          "eDiscovery & audit capabilities",
          "Regulatory compliance insights",
        ]}
      />

      <ServiceCTA />
    </>
  );
}
