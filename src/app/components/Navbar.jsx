"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="border-b border-pink-100 bg-white/80 backdrop-blur sticky top-0 z-40"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 lg:px-0 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-semibold tracking-[0.25em] uppercase">
            chame
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="text-pink-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#shop" className="hover:text-pink-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="#beauty-tips" className="hover:text-pink-500">
              Beauty Tip
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:text-pink-500">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-pink-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex text-sm border border-pink-200 px-3 py-1.5 rounded-full hover:bg-pink-50">
            Sign in
          </button>
          <button className="relative rounded-full border border-pink-200 p-2 hover:bg-pink-50">
            <span className="sr-only">Cart</span>
            🛒
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] rounded-full px-1.5">
              2
            </span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
