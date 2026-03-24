"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PricingHeader from "./PricingHeader";
import { pricingPlans } from "@/lib/data";
import { triggerPricingPurchase } from "@/lib/pricing-purchase";

const BILLING_TABS = ["Monthly", "Yearly", "Lifetime"] as const;

function priceSubtextFor(planName: string): string {
  switch (planName) {
    case "Monthly":
      return "Per month, billed monthly";
    case "Yearly":
      return "Per year, billed annually";
    case "Lifetime":
      return "One-time payment, no subscription";
    default:
      return "";
  }
}

function ctaLabelFor(planName: string): string {
  if (planName === "Lifetime") return "Get lifetime access";
  return "Get started for free";
}

function ctaSubtextFor(planName: string): string {
  if (planName === "Lifetime") return "One-time payment";
  return "7-day trial · Cancel anytime";
}

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const plan = pricingPlans[activeIndex];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl">
        <PricingHeader />

        <div className="mx-auto flex max-w-lg flex-col items-center pt-4 text-center">
          <div
            className="inline-flex w-fit max-w-full rounded-full border border-neutral-200 bg-white p-0.5"
            role="tablist"
            aria-label="Billing period"
          >
            {BILLING_TABS.map((label, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`pricing-tab-${label}`}
                  aria-controls={`pricing-panel-${label}`}
                  onClick={() => setActiveIndex(index)}
                  className={`relative min-w-0 flex-1 cursor-pointer rounded-md px-2.5 py-1 text-base font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 sm:px-3 ${
                    isActive
                      ? "text-foreground"
                      : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pricing-tab-pill"
                      className="absolute inset-0 rounded-xl border border-neutral-200/80 bg-neutral-100"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 38,
                      }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={`pricing-panel-${plan.name}`}
            role="tabpanel"
            aria-labelledby={`pricing-tab-${plan.name}`}
            className="mt-6 w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <p className=" text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
                  {plan.price}
                </p>
                <p className="mt-4 text-sm text-neutral-600">
                  {priceSubtextFor(plan.name)}
                </p>

                <div className="mt-10 flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => triggerPricingPurchase(plan.name)}
                    className="flex cursor-pointer items-center rounded-full bg-primary px-4 py-2 text-[15px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {ctaLabelFor(plan.name)}
                  </button>
                  <p className="mt-2 text-xs text-neutral-500">
                    {ctaSubtextFor(plan.name)}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
