"use client";

import Feature from "./Feature";
import FeaturesHeader from "./FeaturesHeader";
import { featuresData } from "@/lib/data";

const Features = () => {
  return (
    <section id="features" className="relative pt-24">
      <FeaturesHeader />

      <div className="flex flex-col">
        {featuresData.map((feature) => (
          <Feature key={feature.alt} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
