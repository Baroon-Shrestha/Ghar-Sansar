import React from "react";
import HomeHero from "./HomeHero";
import HomeFeatures from "./HomeFeatures";
import HomeProducts from "./HomeProducts";
import HomeStats from "./HomeStats";
import HomeTestimonials from "./HomeTestimonials";
import HomeCTA from "./HomeCTA";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      <HomeFeatures />
      <HomeProducts />
      <HomeStats />
      <HomeTestimonials />
      <HomeCTA />
    </div>
  );
}
