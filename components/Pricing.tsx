"use client";

import { motion } from "framer-motion";
import PricingPlanItem from "./PricingPlanItem";

const pricingPlans = [
  {
    name: "Monthly",
    price: "$4.99",
    period: "/ month",
    description: "Perfect for trying out the extension",
    features: [
      "Unlimited Folders",
      "Unlimited Bookmarks",
      "Sync Between Devices",
      "Priority Support",
      "Cancel Anytime",
    ],
    cta: "Subscribe Monthly",
    popular: false,
  },
  {
    name: "Yearly",
    price: "$29.99",
    period: "/ year",
    description: "Save 50% compared to monthly",
    features: [
      "Unlimited Folders",
      "Unlimited Bookmarks",
      "Sync Between Devices",
      "Priority Support",
      "7 Days Free Trial",
    ],
    cta: "Subscribe Yearly",
    popular: true,
  },
  {
    name: "Lifetime",
    price: "$49.99",
    period: "one-time",
    description: "Pay once, use forever",
    features: [
      "Unlimited Folders",
      "Unlimited Bookmarks",
      "Sync Between Devices",
      "Priority Support",
      "Lifetime Updates",
    ],
    cta: "Get Lifetime Access",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-secondary"
          >
            Choose the plan that fits your workflow. No hidden fees.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlanItem key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
