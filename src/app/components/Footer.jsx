"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="mt-10 border-t border-pink-100 bg-white/80"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-pink-500 mb-2">
              Chame Beauty
            </p>
            <p className="text-sm text-slate-600 max-w-sm">
              Glow like never before with carefully curated formulas that put
              your skin first.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold mb-2">Contact</p>
            <p className="text-slate-600 text-xs">
              support@chamebeauty.com
              <br />
              +1 (000) 123-4567
              <br />
              Mon – Fri, 9am – 6pm
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold mb-2">Follow us</p>
            <div className="flex gap-3 text-lg">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} Chame Beauty. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
