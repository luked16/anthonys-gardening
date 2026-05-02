"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Scissors,
  Leaf,
  Sprout,
  Droplets,
  Sun,
  Snowflake,
  Flower2,
  Wind,
  Shield,
  Paintbrush,
  Home,
  Waves,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Lawn Mowing & Edging",
    description:
      "A well-kept lawn makes all the difference. We provide clean, precise cuts with crisp edging to give your garden that professional finish every time.",
    tags: ["Weekly", "Fortnightly", "Monthly"],
  },
  {
    icon: Leaf,
    title: "Hedge Trimming",
    description:
      "Keep your hedges looking neat, shaped, and healthy. We trim all types of hedging plants and dispose of all clippings responsibly.",
    tags: ["All hedge types", "Clipping disposal"],
  },
  {
    icon: Sprout,
    title: "Garden Maintenance",
    description:
      "Comprehensive ongoing maintenance to keep your entire garden looking its best throughout the year. Includes lawn care, weeding, pruning, and general tidying.",
    tags: ["Regular schedules", "One-off visits"],
  },
  {
    icon: Droplets,
    title: "Weeding & Pruning",
    description:
      "Persistent weeds and overgrown plants can take over quickly. We clear them thoroughly and prune shrubs and plants to encourage healthy, vigorous growth.",
    tags: ["Beds & borders", "Shrubs & plants"],
  },
  {
    icon: Flower2,
    title: "Spring Garden Refresh",
    description:
      "Get your garden ready for the growing season. We clear winter debris, prepare beds, apply mulch, and get everything set for spring.",
    tags: ["Seasonal", "One-off"],
  },
  {
    icon: Sun,
    title: "Summer Maintenance",
    description:
      "Keep your garden looking lush and tidy during the busiest growing season with regular mowing, watering support, and plant care.",
    tags: ["Ongoing care", "Seasonal"],
  },
  {
    icon: Wind,
    title: "Leaf Clearance",
    description:
      "Autumn leaves can quickly smother your lawn and borders. We clear, collect, and responsibly dispose of all fallen leaves.",
    tags: ["Autumn", "One-off"],
  },
  {
    icon: Snowflake,
    title: "Winter Garden Prep",
    description:
      "Protect your garden through the colder months with proper cutbacks, mulching, and preparation to ensure it bounces back beautifully in spring.",
    tags: ["Seasonal", "Protection"],
  },
  {
    icon: Shield,
    title: "Holiday Plant Care",
    description:
      "Going away? We'll keep your plants watered and your garden tidy while you&apos;re away, so you return to a beautiful outdoor space.",
    tags: ["Watering", "General care"],
  },
  {
    icon: Paintbrush,
    title: "Fence & Shed Painting",
    description:
      "Refresh and protect your garden structures with a fresh coat of paint or wood treatment. We use weather-resistant products built to last.",
    tags: ["Fences", "Sheds", "Outbuildings"],
  },
  {
    icon: Home,
    title: "Painting & Garden Care",
    description:
      "General painting and maintenance of garden structures to keep everything looking fresh and well-maintained.",
    tags: ["Structures", "Maintenance"],
  },
  {
    icon: Waves,
    title: "Pressure Washing",
    description:
      "Blast away years of grime from patios, paths, driveways, and decking. Leaves hard surfaces looking clean and safe.",
    tags: ["Patios", "Paths", "Driveways", "Decking"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — freshly cut lawn background */}
      <section
        className="relative pt-40 pb-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hedge-topiary.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[var(--primary)]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[var(--accent-light)] font-semibold text-sm tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              From weekly lawn mowing to full seasonal overhauls — we offer everything your garden needs to thrive. All work comes with a free, no-obligation quote.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Free Quotes", "Fully Insured", "Manchester & Surrounding Areas"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/25"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group p-7 bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-13 h-13 w-14 h-14 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[var(--primary)] transition-colors">
                  <service.icon className="w-7 h-7 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[var(--foreground)] text-lg mb-3">{service.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-[var(--border)] text-[var(--muted)] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-[var(--primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Pricing</h2>
            <p className="text-white/70 text-xl mb-8">
              Every garden is different, so all quotes are tailored to your specific needs. Contact us for a free, no-obligation quote and we&apos;ll get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button variant="accent" size="lg">
                  Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:07843023366">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10"
                >
                  Call 07843 023366
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
