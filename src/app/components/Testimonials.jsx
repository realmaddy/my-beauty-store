"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sara N.",
    role: "Makeup Artist",
    text: "The foundation and lipstick are insanely good. My clients keep asking what products I use.",
    avatar: "/models/model-1.png",
  },
  {
    id: 2,
    name: "Emma B.",
    role: "Content Creator",
    text: "Love the textures and the packaging. Everything feels luxurious but still affordable.",
    avatar: "/models/model-2.png",
  },
];

const reviewVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.4 },
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="mb-20">
      <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        {/* Text + cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="uppercase text-xs tracking-[0.3em] text-pink-500 mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Loved by Our Sweet Customers
          </h2>
          <p className="text-sm text-slate-600 max-w-md mb-6">
            Real stories from people who fell in love with our formulas. Join
            thousands of glowing customers around the world.
          </p>

          <div className="space-y-4">
            {reviews.map((review, index) => (
              <motion.article
                key={review.id}
                className="bg-white rounded-3xl border border-pink-100 p-4 flex items-start gap-3 shadow-sm"
                variants={reviewVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    “{review.text}”
                  </p>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-[11px] text-slate-400">{review.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Flower image side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute -top-6 -left-4 w-32 h-32 bg-pink-200/50 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-4 w-32 h-32 bg-pink-300/40 rounded-full blur-2xl" />
          <div className="relative bg-pink-50 border border-pink-100 rounded-3xl p-8 shadow-sm flex items-center justify-center">
            <Image
              src="/hero/flower-large.png"
              alt="Pink lotus flower"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
