"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const imageVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero() {
  return (
    <section className="mt-10 mb-16 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
      {/* Left text */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="uppercase text-xs tracking-[0.3em] text-pink-500 mb-3">
          New Collection 2025
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Glow Like Never <br />
          <span className="text-pink-500">Before!</span>
        </h1>
        <p className="text-sm md:text-base text-slate-600 mb-6 max-w-md">
          Hydrating formulas, silky textures and long-lasting glow designed for
          every skin tone. Discover your new everyday essentials.
        </p>

        {/* Price + CTA */}
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">
              Starting from
            </p>
            <p className="text-3xl font-semibold">$30.00</p>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-pink-500 text-white px-8 py-3 text-sm font-medium shadow-md hover:bg-pink-600"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>

        {/* Small benefits */}
        <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
          <Benefit
            title="Beauty"
            subtitle="Large sales"
            text="Save up to 40% on best-selling makeup."
            delay={0.1}
          />
          <Benefit
            title="Beauty"
            subtitle="Up to 60% Off"
            text="Limited offers on bundles & sets."
            delay={0.2}
          />
          <Benefit
            title="Support"
            subtitle="Free shipping"
            text="Free delivery on orders over $50."
            delay={0.3}
          />
        </div>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="relative"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="absolute -top-6 -left-4 w-28 h-28 bg-pink-200/40 rounded-full blur-2xl" />
        <div className="absolute -bottom-6 -right-4 w-32 h-32 bg-pink-300/40 rounded-full blur-2xl" />

        <div className="relative bg-pink-50 border border-pink-100 rounded-3xl p-6 shadow-sm">
          <Image
            src="/hero/hero-makeup.png"
            alt="Beauty products flat lay"
            width={600}
            height={500}
            className="rounded-2xl w-full object-cover"
            priority
          />

          {/* Roses overlay */}
          <Image
            src="/hero/rose-left.png"
            alt="Pink rose"
            width={130}
            height={130}
            className="hidden md:block absolute -left-10 bottom-4"
          />
          <Image
            src="/hero/rose-right.png"
            alt="Pink rose"
            width={130}
            height={130}
            className="hidden md:block absolute -right-8 top-4"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Benefit({ title, subtitle, text, delay = 0 }) {
  return (
    <motion.div
      className="bg-white/80 border border-pink-100 rounded-2xl px-4 py-3 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <p className="text-[11px] uppercase tracking-[0.25em] text-pink-400">
        {title}
      </p>
      <p className="text-sm font-semibold">{subtitle}</p>
      <p className="text-xs text-slate-500 mt-1">{text}</p>
    </motion.div>
  );
}
