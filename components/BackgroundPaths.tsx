"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Phone } from "lucide-react";

export function BackgroundPaths({ title = "Your Green Space" }: { title?: string }) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-dvh w-full flex items-center justify-center overflow-hidden">
      {/* Lawnmower photo — CSS background, same pattern as other sections */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-lawnmower.jpg')" }}
      />

      {/* Overlay — light enough to see the photo clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071a05]/45 via-[#0a1f08]/38 to-[#071a05]/52" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Business name — matches navbar font & colour pattern */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6"
          >
            <p className="font-bold text-[#86efac] text-3xl sm:text-4xl leading-tight drop-shadow-md">
              Anthony&apos;s
            </p>
            <p className="font-semibold text-[#4ade80] text-4xl sm:text-5xl leading-tight drop-shadow-md">
              Gardening Services
            </p>
          </motion.div>

          {/* Star rating pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-5 backdrop-blur-sm"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[var(--accent-light)] text-[var(--accent-light)]" />
              ))}
            </div>
            <span>Trusted by Manchester homeowners</span>
          </motion.div>

          {/* Main heading — word-by-word */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 tracking-tight text-white drop-shadow-md">
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.35 + wordIndex * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 28,
                }}
                className="inline-block mr-4 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-xl sm:text-2xl font-semibold text-white/80 mb-5 tracking-wide"
          >
            My Expert Care
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.6 }}
            className="text-white/70 text-lg max-w-lg mx-auto mb-8 leading-relaxed"
          >
            Professional gardening services across Greater Manchester — fully insured, eco-friendly, and dedicated to transforming your outdoor space.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5"
          >
            <Link href="/booking">
              <Button variant="accent" size="lg" className="shadow-lg">
                Book a Free Quote →
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white/35 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                View Services
              </Button>
            </Link>
          </motion.div>

          {/* Phone link */}
          <motion.a
            href="tel:07843023366"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-white/55 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Or call <span className="font-semibold text-white/80">07843 023366</span></span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/25 rounded-full flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-white/25 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
