"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTENSION_ID } from "@/lib/constants";

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

  const handleUpgrade = () => {
    interface ChromeRuntime {
      sendMessage: (
        extensionId: string,
        message: { action: string; plan?: string },
        callback?: (response: unknown) => void
      ) => void;
      lastError?: { message: string };
    }

    interface Chrome {
      runtime?: ChromeRuntime;
    }

    const chrome = (globalThis as unknown as { chrome?: Chrome }).chrome;

    if (chrome?.runtime?.sendMessage) {
      chrome.runtime.sendMessage(
        EXTENSION_ID,
        { action: "TRIGGER_PURCHASE", plan: plan.name },
        (response: unknown) => {
          if (chrome.runtime?.lastError) {
            console.log("Extension not found or communication error:", chrome.runtime.lastError);
            globalThis.open("https://chromewebstore.google.com/detail/gemini-folders-bookmarks/dnlonnjaceadodcffgillnlkgfoaclfi", "_blank");
          } else {
            console.log("Extension response:", response);
          }
        }
      );
    } else {
      globalThis.open("https://chromewebstore.google.com/detail/gemini-folders-bookmarks/dnlonnjaceadodcffgillnlkgfoaclfi", "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      className={`relative h-full ${plan.popular ? "z-10" : "z-0"}`}
    >
      <div
        className={`relative flex flex-col h-full p-8 rounded-xl border-2 transition-all duration-300 hover:shadow-2xl bg-white ${plan.popular
          ? "border-[#3b82f6] shadow-xl shadow-blue-500/10 z-10"
          : "border-border/50 hover:border-border"
          }`}
      >
        {plan.popular && (
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#3b82f6] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-blue-500/20 z-20 whitespace-nowrap">
            Most Popular
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <p className="text-sm text-secondary mb-6">{plan.description}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
            <span className="text-secondary font-medium">{plan.period}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Tax excluded</p>
        </div>

        <div className="flex-1 mb-10">
          <ul className="space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#3b82f6] text-white shrink-0 mt-0.5">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          onClick={handleUpgrade}
          variant={plan.popular ? "default" : "outline"}
          className={`w-full h-auto min-h-[3rem] py-3 text-base rounded-xl font-bold cursor-pointer transition-all relative z-10 ${plan.popular
            ? "bg-[#3b82f6] hover:bg-[#3b82f6]/90 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 text-white"
            : "border-2 border-border hover:border-border/50 hover:bg-background text-foreground"
            }`}
        >
          {plan.cta}
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingPlanItem;
