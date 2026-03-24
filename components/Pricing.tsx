"use client";

import PricingHeader from "./PricingHeader";
import PricingPlanItem from "./PricingPlanItem";
import { pricingPlans } from "@/lib/data";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl">
        <PricingHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-8">
          {pricingPlans.map((plan, index) => (
            <PricingPlanItem key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
