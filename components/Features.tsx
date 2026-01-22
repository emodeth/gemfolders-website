"use client";

import Feature from "./Feature";

const featuresData = [
  {
    title: "Organize Chats",
    description:
      "Create folders and sub-folders to keep your chats structured. Drag and drop conversations to organize them exactly how you want. Sync your structure across all your devices seamlessly.",
    mediaSrc: "/images/feature-1.png",
    reversed: false,
  },
  {
    title: "Bookmark Important Items",
    description:
      "Save specific messages or entire chats with a single click. build your personal library of prompts and responses for quick access whenever you need them.",
    mediaSrc: "/images/feature-2.png",
    reversed: true,
  },
  {
    title: "Native Sidebar Integration",
    description:
      "Manage everything directly from Gemini's sidebar. Our extension blends perfectly with the native interface, giving you powerful tools without breaking your flow.",
    mediaSrc: "/images/feature-3.png",
    reversed: false,
  },
];

const Features = () => {
  return (
    <div id="features" className="flex flex-col">
      {featuresData.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default Features;
