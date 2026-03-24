"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQItem from "./FAQItem";
import { faqs } from "@/lib/data";

const CONTACT_EMAIL = "emirhankeskindev@gmail.com";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden  py-20 md:py-24 dark:bg-zinc-950"
    >
      <div className="container mx-auto max-w-2xl px-6">
        <div className="mb-10 flex flex-col items-center text-center md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-4xl font-medium tracking-tight text-black dark:text-white md:text-[62px]"
          >
            FAQ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-3 max-w-md text-base text-[#4B5563] dark:text-zinc-400 md:text-2xl"
          >
            Have a question? We have answers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-6"
          >
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 font-bold text-base text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Contact us
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col gap-1">
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
    </section>
  );
};

export default FAQSection;
