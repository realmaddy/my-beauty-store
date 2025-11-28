"use client";

import { motion } from "framer-motion";

const pillVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.4 },
  }),
};

export default function Categories() {
  const items = [
    {
      title: "Clean Beauty",
      text: "Gentle ingredients perfect for daily use.",
    },
    {
      title: "Vegan & Cruelty-Free",
      text: "Certified formulas, good for you & the planet.",
    },
    {
      title: "Free Consultation",
      text: "Chat with our experts to build your routine.",
    },
  ];

  return (
    <section
      id="beauty-tips"
      className="mb-14 bg-white rounded-3xl border border-pink-100 px-6 py-6 md:px-10 md:py-8 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        {items.map((item, index) => (
          <CategoryPill
            key={item.title}
            title={item.title}
            text={item.text}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function CategoryPill({ title, text, index }) {
  return (
    <motion.div
      className="flex items-start gap-3"
      variants={pillVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={index}
    >
      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600 text-lg">
        ✨
      </span>
      <div>
        <p className="font-semibold text-sm mb-0.5">{title}</p>
        <p className="text-xs text-slate-500 max-w-xs">{text}</p>
      </div>
    </motion.div>
  );
}
