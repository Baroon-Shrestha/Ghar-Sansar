import React from "react";
import HomeHero from "./HomeHero";
import HomeFeatures from "./HomeFeatures";
import HomeProducts from "./HomeProducts";
import HomeStats from "./HomeStats";
import HomeTestimonials from "./HomeTestimonials";
import HomeCTA from "./HomeCTA";
import Brands from "./Brands";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      <Brands />
      <HomeFeatures />
      <HomeProducts />
      <HomeStats />
      <HomeTestimonials />
      <HomeCTA />
    </div>
  );
}
