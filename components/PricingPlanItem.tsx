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
      className={`relative flex flex-col p-8 rounded-md border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.popular
        ? "border-primary shadow-xl shadow-primary/10 z-10 scale-105 md:scale-110"
        : "border-border/50 hover:border-border"
        }`}
    >
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-primary/20">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <p className="text-sm text-secondary mb-6">{plan.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold tracking-tight text-foreground">{plan.price}</span>
          <span className="text-secondary font-medium">{plan.period}</span>
        </div>
      </div>

      <div className="flex-1 mb-10">
        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground shrink-0 mt-0.5">
                <Check className="w-2 h-2" strokeWidth={3} />
              </div>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={plan.popular ? "default" : "outline"}
        className={`w-full h-12 text-base rounded-lg font-bold cursor-pointer transition-all ${plan.popular
          ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40"
          : "border-2 border-border hover:border-border/50 hover:bg-background text-foreground"
          }`}
      >
        {plan.cta}
      </Button>
    </motion.div>
  );
};

export default PricingPlanItem;
