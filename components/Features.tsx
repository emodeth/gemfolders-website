"use client";

import Feature from "./Feature";
import { featuresData } from "@/lib/data";

const Features = () => {
  return (
    <div id="features" className="flex flex-col">
      {featuresData.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default Features;
