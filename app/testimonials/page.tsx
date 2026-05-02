"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Didsbury, Manchester",
    service: "Garden Maintenance",
    text: "Anthony transformed our overgrown garden into something we're genuinely proud of. He was punctual, professional, and the results were better than we could have hoped for. Absolutely brilliant service.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Chorlton, Manchester",
    service: "Lawn Mowing & Edging",
    text: "Been using Anthony for monthly maintenance. The garden always looks fantastic and he's a pleasure to deal with. Really reliable and does a thorough job every time.",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Sale, Manchester",
    service: "Hedge Trimming",
    text: "Had hedges trimmed and the lawn sorted before a garden party. Absolutely perfect result. Efficient, tidy, and great value. Will definitely book again.",
    rating: 5,
  },
  {
    name: "David R.",
    location: "Stretford, Manchester",
    service: "Pressure Washing",
    text: "Anthony pressure washed our patio and it looks brand new. Years of grime gone in no time. Very impressed with the results and the price was fair.",
    rating: 5,
  },
  {
    name: "Emma W.",
    location: "Wythenshawe, Manchester",
    service: "Spring Garden Refresh",
    text: "Booked Anthony for a spring refresh and the difference was incredible. He cleared out all the old plants, tidied up the borders, and gave the lawn a proper cut. Garden looks amazing.",
    rating: 5,
  },
  {
    name: "Mike S.",
    location: "Altrincham",
    service: "Fence Painting",
    text: "Had the fence and shed painted and it's made such a difference to how the whole garden looks. Anthony did a really neat job and was in and out without any fuss.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const avgRating = (testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <>
      {/* Hero — beautiful garden background */}
      <section
        className="relative pt-40 pb-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[var(--primary)]/72" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[var(--accent-light)] font-semibold text-sm tracking-widest uppercase mb-3">
              Reviews
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What Our Customers Say
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[var(--accent-light)] text-[var(--accent-light)]" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">{avgRating}</span>
              <span className="text-white/70">/ 5.0 &bull; {testimonials.length} reviews</span>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Don&apos;t just take our word for it — here&apos;s what our customers across Manchester have to say.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="bg-[var(--surface)] p-7 rounded-2xl border border-[var(--border)] relative"
              >
                <Quote className="w-8 h-8 text-[var(--primary)]/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[var(--accent)] text-[var(--accent)]" />
                  ))}
                </div>
                <p className="text-[var(--foreground)] leading-relaxed mb-6 italic text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-[var(--border)] pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[var(--foreground)] text-sm">{t.name}</div>
                    <div className="text-[var(--muted)] text-xs">{t.location}</div>
                  </div>
                  <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-medium rounded-full">
                    {t.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-white/70 text-xl mb-8">
              Book a free, no-obligation quote today and see the difference for yourself.
            </p>
            <Link href="/booking">
              <Button variant="accent" size="lg">
                Book a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
