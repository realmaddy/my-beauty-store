import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chame Beauty Store",
  description: "Glow like never before – modern beauty e-commerce landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
