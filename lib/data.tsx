import React from "react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const featuresData = [
  {
    title: "Organize your Chats",
    description:
      "Create folders and sub-folders to keep your chats structured. Drag and drop conversations to organize them exactly how you want. Sync your structure across all your devices seamlessly.",
    mediaSrc: "/videos/gemfolders_video_organize.mp4",
    mediaType: "video" as const,
    mediaPosition: "top" as const,
    alt: "Organize Chats",
    reversed: true,
    checklist: [
      "Drag & Drop simplicity",
      "Nested sub-folders",
      "Cross-device sync",
    ],
  },
  {
    title: "Bookmark Important Items",
    description:
      "Save specific messages or entire chats with a single click. Build your personal library of prompts and responses for quick access whenever you need them.",
    mediaSrc: "/videos/gemfolders_video_bookmark.mp4",
    mediaType: "video" as const,
    mediaFit: "contain" as const,
    alt: "Bookmark Important Items",
    reversed: false,
    tags: ["Quick Access", "Searchable", "Tags"],
  },
  {
    title: "Native Sidebar Integration",
    description:
      "Manage everything directly from Gemini's sidebar. Our extension blends perfectly with the native interface, giving you powerful tools without breaking your flow.",
    mediaSrc: "/videos/gemfolders_video_native.mp4",
    mediaType: "video" as const,
    alt: "Native Sidebar Integration",
    reversed: true,
    ctaLink: "https://www.youtube.com/watch?v=zsiw4Z9-ajI",
    ctaText: "View how it works",
  },
];

export const pricingPlans = [
  {
    name: "Monthly",
    price: "$5",
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
    price: "$30",
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
    price: "$50",
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
    question: "Do I need a credit card to sign up?",
    answer:
      "No. Installing Gemfolders from the Chrome Web Store is free, and you can organize chats without entering a card. You only need a payment method if you choose a paid plan.",
  },
  {
    question: "Can I cancel at anytime?",
    answer:
      "Yes. You can cancel your subscription any time from your billing dashboard. You keep premium access until the end of your current billing period, and there are no cancellation fees.",
  },
  {
    question: "Why should I use Gemfolders?",
    answer:
      "Gemfolders adds folders, bookmarks, and optional sync to Gemini so conversations stay structured. Less hunting through threads, more time actually using the assistant.",
  },
  {
    question: "Do I need a separate account for Gemfolders?",
    answer:
      "No. You use your normal Google account and Gemini as usual. The extension runs in the sidebar alongside Gemini—no extra login beyond what you already use.",
  },
  {
    question: "Can I use Gemfolders on multiple devices?",
    answer:
      "Yes. Premium plans include sync so your folder layout can stay consistent across browsers where you use the extension while signed in.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "We take a privacy-first approach. Most organization data lives locally in your browser. Anything synced for premium features is encrypted in transit and stored securely. We don’t sell your personal data. See our Privacy Policy for details.",
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
