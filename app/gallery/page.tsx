"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    alt: "Lush garden lawn",
    category: "Lawn",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80",
    alt: "Hedge trimming",
    category: "Hedges",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Beautiful garden border",
    category: "Borders",
  },
  {
    src: "https://images.unsplash.com/photo-1444213596693-b27591f83a3e?w=800&q=80",
    alt: "Garden path and patio",
    category: "Patios",
  },
  {
    src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?w=800&q=80",
    alt: "Spring garden refresh",
    category: "Seasonal",
  },
  {
    src: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80",
    alt: "Neat garden beds",
    category: "Maintenance",
  },
  {
    src: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=800&q=80",
    alt: "Pruned shrubs",
    category: "Pruning",
  },
  {
    src: "https://images.unsplash.com/photo-1599598425947-5202edd56cdc?w=800&q=80",
    alt: "Clean patio pressure washed",
    category: "Patios",
  },
  {
    src: "https://images.unsplash.com/photo-1531212127773-bd30e8a0b7fb?w=800&q=80",
    alt: "Autumn leaf clearance",
    category: "Seasonal",
  },
];

const categories = ["All", "Lawn", "Hedges", "Borders", "Patios", "Seasonal", "Maintenance", "Pruning"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--surface)] to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-3">
              Our Work
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
              Gallery
            </h1>
            <p className="text-[var(--muted)] text-xl leading-relaxed">
              Browse through examples of the gardens we&apos;ve transformed across Manchester and surrounding areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-[var(--background)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--primary)] border border-[var(--border)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-[var(--border)]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-white text-sm font-medium">{img.alt}</span>
                    <div className="mt-1">
                      <span className="px-2 py-0.5 bg-[var(--accent)] text-white text-xs rounded-full">
                        {img.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Like What You See?
          </h2>
          <p className="text-[var(--muted)] text-lg mb-8">
            Get in touch for a free quote and let&apos;s transform your garden.
          </p>
          <Link href="/booking">
            <Button variant="default" size="lg">
              Book a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
