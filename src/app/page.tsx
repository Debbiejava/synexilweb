import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhySynexil from "@/components/WhySynexil";
import AboutPreview from "@/components/AboutPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhySynexil />
      <AboutPreview />
      <CTASection
  title="Ready to elevate your organisation?"
  text="Synexil delivers secure, compliant, and intelligent solutions built on Microsoft’s cloud ecosystem."
  buttonText="Contact Synexil"
  href="/contact"
/>

    </>
  );
}
