import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceCardsGrid from "./ServiceCardsGrid";
import WhyChooseUsSection from "./WhyChooseUsSection";
import CalltoActionSection from "./CalltoActionSection";
import ServiceFAQ from "./ServiceFAQ";

export default function ServicesMain() {
  return (
    <div>
      <ServiceHero />
      <ServiceCardsGrid />
      <WhyChooseUsSection />
      <CalltoActionSection />
      <ServiceFAQ />
    </div>
  );
}
