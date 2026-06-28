import {
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import ServiceHero from "@/components/ServiceHero";
import ServiceFeatureList from "@/components/ServiceFeatureList";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata = {
  title: "Synexil | Microsoft Defender XDR Solutions",
  description:
    "Unified security operations powered by Microsoft Defender XDR.",
};

export default function DefenderPage() {
  return (
    <>
      <ServiceHero
        title="Microsoft Defender"
        subtitle="Unified security operations powered by Microsoft Defender XDR."
        icon={ShieldCheckIcon}
      />

      <ServiceFeatureList
        features={[
          "Endpoint detection & response (EDR)",
          "Identity protection & conditional access",
          "Threat intelligence & automated investigation",
          "Cloud workload protection (CWPP)",
          "SaaS application security",
          "Attack surface reduction & hardening",
        ]}
      />

      <ServiceCTA />
    </>
  );
}
