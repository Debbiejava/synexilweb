import {
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import ServiceHero from "@/components/ServiceHero";
import ServiceFeatureList from "@/components/ServiceFeatureList";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata = {
  title: "Synexil | Microsoft 365 Management",
  description:
    "Centralised management for users, devices, apps, and Zero Trust policies.",
};

export default function M365ManagementPage() {
  return (
    <>
      <ServiceHero
        title="Microsoft 365 Management"
        subtitle="Centralised management for users, devices, apps, and Zero Trust policies."
        icon={<Cog6ToothIcon className="h-16 w-16 text-white" />}

      />

      <ServiceFeatureList
        features={[
          "Identity lifecycle automation",
          "Conditional Access & Zero Trust enforcement",
          "Secure collaboration & data access controls",
          "Device compliance & endpoint configuration",
          "Role-based access governance",
          "Microsoft Entra ID administration",
        ]}
      />

      <ServiceCTA />
    </>
  );
}
