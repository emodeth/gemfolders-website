"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingPlanProps {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
  };
  index: number;
}

const PricingPlanItem = ({ plan, index }: PricingPlanProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      className={`relative flex flex-col p-8 rounded-3xl border bg-card/50 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${plan.popular
        ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary/20 z-10 scale-105 md:scale-110"
        : "border-border"
        }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-primary to-accent-foreground text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
          <span className="text-muted-foreground">{plan.period}</span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="flex-1 mb-8">
        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
              <Check className="w-5 h-5 text-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={plan.popular ? "default" : "outline"}
        className={`w-full py-3 text-base cursor-pointer ${plan.popular ? "shadow-lg shadow-primary/25" : ""}`}
      >
        {plan.cta}
      </Button>
    </motion.div>
  );
};

export default PricingPlanItem;
