import React from "react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const featuresData = [
  {
    title: (
      <>
        <span className="text-primary">Organize</span> your Chats
      </>
    ),
    description:
      "Create folders and sub-folders to keep your chats structured. Drag and drop conversations to organize them exactly how you want. Sync your structure across all your devices seamlessly.",
    mediaSrc: "/images/feature-1.png",
    alt: "Organize Chats",
    reversed: true,
    checklist: [
      "Drag & Drop simplicity",
      "Nested sub-folders",
      "Cross-device sync",
    ],
  },
  {
    title: (
      <>
        <span className="text-primary">Bookmark</span> Important Items
      </>
    ),
    description:
      "Save specific messages or entire chats with a single click. Build your personal library of prompts and responses for quick access whenever you need them.",
    mediaSrc: "/images/feature-2.png",
    alt: "Bookmark Important Items",
    reversed: false,
    tags: ["Quick Access", "Searchable", "Tags"],
  },
  {
    title: (
      <>
        <span className="text-primary">Native</span> Sidebar Integration
      </>
    ),
    description:
      "Manage everything directly from Gemini's sidebar. Our extension blends perfectly with the native interface, giving you powerful tools without breaking your flow.",
    mediaSrc: "/images/feature-3.png",
    alt: "Native Sidebar Integration",
    reversed: true,
    ctaLink: "#how-it-works",
    ctaText: "View how it works",
  },
];

export const pricingPlans = [
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

export const faqs = [
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

export const ctaData = {
  title: "Ready to clear the clutter?",
  description:
    "Install Gem today and join thousands of people who've found browser nirvana.",
  buttonText: "Add Gem to Chrome Free",
  secondaryText: "No credit card required. Cancel anytime.",
};

export const footerData = {
  description:
    "The Browser extension that brings order to your Gemini conversations.",
  copyright: "© 2026 Gem Folders. All rights reserved.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms of Service", href: "/legal/terms" },
      ],
    },
  ],
};
