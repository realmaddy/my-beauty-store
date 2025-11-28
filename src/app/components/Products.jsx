"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Lipstick",
    price: "$19.99",
    desc: "Creamy, highly pigmented and long-lasting.",
    image: "/products/lipstick.png",
  },
  {
    id: 2,
    name: "Foundations",
    price: "$32.00",
    desc: "Hydrating coverage with a natural finish.",
    image: "/products/foundation.png",
  },
  {
    id: 3,
    name: "Eye Makeup",
    price: "$24.50",
    desc: "Define your eyes with rich, smudge-proof colors.",
    image: "/products/eye-makeup.png",
  },
  {
    id: 4,
    name: "Skincare",
    price: "$28.00",
    desc: "Serums & creams for a healthy glow.",
    image: "/products/skincare.png",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.45 },
  }),
};

export default function Products() {
  return (
    <section id="shop" className="mb-20">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="uppercase text-xs tracking-[0.3em] text-pink-500 mb-2">
            Shop
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Your Daily Beauty Essentials
          </h2>
        </div>
        <Link
          href="#"
          className="text-sm text-pink-500 hover:text-pink-600 font-medium"
        >
          View all products →
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            className="bg-white rounded-3xl border border-pink-100 p-5 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            whileHover={{ translateY: -6 }}
          >
            <div className="relative h-40 w-32 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold mb-1">{product.name}</h3>
            <p className="text-xs text-slate-500 mb-2">{product.desc}</p>
            <p className="font-semibold text-pink-500 mb-3">
              {product.price}
            </p>
            <motion.button
              className="text-xs font-medium bg-pink-500 text-white rounded-full px-5 py-2 hover:bg-pink-600"
              whileTap={{ scale: 0.96 }}
            >
              Add to cart
            </motion.button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
