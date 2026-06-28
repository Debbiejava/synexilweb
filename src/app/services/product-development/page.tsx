import {
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

import ServiceHero from "@/components/ServiceHero";
import ServiceFeatureList from "@/components/ServiceFeatureList";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata = {
  title: "Synexil | Product Development & Automation",
  description:
    "We build intelligent, secure, and scalable applications tailored to your organisation.",
};

export default function ProductDevelopmentPage() {
  return (
    <>
      <ServiceHero
        title="Product Development"
        subtitle="We build intelligent, secure, and scalable applications tailored to your organisation."
        icon={CubeTransparentIcon}
      />

      <ServiceFeatureList
        features={[
          "Custom enterprise software development",
          "Automation tools for compliance & security workflows",
          "AI‑powered applications & intelligent assistants",
          "Cloud‑native architecture & modern DevOps practices",
          "Integration with Microsoft 365, Entra, and Azure services",
          "Secure coding, testing, and deployment pipelines",
        ]}
      />

      <ServiceCTA />
    </>
  );
}
