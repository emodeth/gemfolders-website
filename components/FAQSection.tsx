"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Is my data safe?",
    answer:
      "Yes, your data is completely safe. We strictly follow privacy-first principles. Your chats and folder organization structures are primarily stored locally on your device. Any data synced for premium features is encrypted and securely stored. We never sell your personal data.",
  },
  {
    question: "Can I cancel it whenever I want?",
    answer:
      "Absolutely. You can cancel your subscription at any time directly from your dashboard. If you cancel, you will maintain access to premium features until the end of your billing cycle. There are no cancellation fees.",
  },
  {
    question: "What is your privacy policy?",
    answer:
      "Our privacy policy is simple: You own your data. We do not track your chat content or personal information. We only collect minimal usage statistics to improve the application stability. For a detailed breakdown, please visit our Privacy Policy page.",
  },
  {
    question: "I have another question",
    answer:
      "We'd love to hear from you! If you have any other questions or need support, please contact our support team. We generally reply to all inquiries within 24 hours.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            Frequently Asked <span className="text-primary italic">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-secondary"
          >
            Have questions? We&apos;re here to help.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-border">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
