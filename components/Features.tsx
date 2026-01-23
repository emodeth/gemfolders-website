"use client";

import Feature from "./Feature";
import { featuresData } from "@/lib/data";

const Features = () => {
  return (
    <div id="features" className="flex flex-col pt-12">
      {featuresData.map((feature) => (
        <Feature key={feature.alt} {...feature} />
      ))}
    </div>
  );
};

export default Features;
