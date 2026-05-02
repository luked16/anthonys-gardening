"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundPaths } from "@/components/BackgroundPaths";
import ProcessSteps from "@/components/ProcessSteps";
import { Button } from "@/components/ui/button";
import {
  Scissors,
  Leaf,
  Droplets,
  Sun,
  Snowflake,
  Paintbrush,
  ShieldCheck,
  Sprout,
  Heart,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";

const featuredServices = [
  {
    icon: Scissors,
    title: "Lawn Mowing & Edging",
    description: "Precision cuts and crisp edges for a perfectly manicured lawn every time.",
  },
  {
    icon: Leaf,
    title: "Hedge Trimming",
    description: "Neat, shaped hedges that define your garden boundaries beautifully.",
  },
  {
    icon: Sprout,
    title: "Garden Maintenance",
    description: "Regular upkeep to keep your garden healthy, tidy, and thriving year-round.",
  },
  {
    icon: Droplets,
    title: "Weeding & Pruning",
    description: "Careful removal of weeds and expert pruning to promote healthy plant growth.",
  },
  {
    icon: Sun,
    title: "Seasonal Tidy Ups",
    description: "Spring refreshes, summer maintenance, and autumn/winter preparation.",
  },
  {
    icon: Paintbrush,
    title: "Fence & Shed Painting",
    description: "Weather-resistant painting to protect and refresh your garden structures.",
  },
];

const trustPoints = [
  { icon: ShieldCheck, label: "Fully Insured", sub: "Public liability cover" },
  { icon: Leaf, label: "Eco-Friendly", sub: "Sustainable practices" },
  { icon: Heart, label: "Local & Family Run", sub: "Manchester based" },
  { icon: Star, label: "Free Quotes", sub: "No obligation" },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Didsbury, Manchester",
    text: "Anthony transformed our overgrown garden into something we're genuinely proud of. Punctual, professional, and great value.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Chorlton, Manchester",
    text: "Been using Anthony for monthly maintenance. The garden always looks fantastic and he's a pleasure to deal with.",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Sale, Manchester",
    text: "Had hedges trimmed and the lawn sorted before a garden party. Absolutely perfect. Will definitely book again.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <BackgroundPaths title="Your Green Space" />

      {/* Trust Bar */}
      <section className="bg-[var(--primary)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-1"
              >
                <div className="flex items-center gap-2">
                  <point.icon className="w-5 h-5 text-[var(--accent-light)]" />
                  <span className="text-white font-semibold text-sm">{point.label}</span>
                </div>
                <span className="text-white/55 text-xs">{point.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/hedge-topiary.jpg')" }}
      >
        <div className="absolute inset-0 bg-[var(--background)]/93" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              Our Services
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
              From routine maintenance to seasonal transformations — we handle it all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 bg-[var(--surface)] rounded-2xl hover:shadow-md transition-all duration-200 hover:-translate-y-1 border border-[var(--border)] cursor-pointer"
              >
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors duration-200">
                  <service.icon className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-bold text-[var(--foreground)] mb-2">{service.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials — positioned before process steps for social proof effect */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[var(--accent)] text-[var(--accent)]" />
              ))}
            </div>
            <p className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-3">
              Happy Customers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-3">
              What People Say
            </h2>
            <p className="text-[var(--muted)] text-base">
              5-star rated across Greater Manchester
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-[var(--border)] shadow-sm flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[var(--accent)] text-[var(--accent)]" />
                  ))}
                </div>
                <p className="text-[var(--foreground)] text-sm leading-relaxed mb-5 italic flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-[var(--border)] pt-4">
                  <div className="font-semibold text-[var(--foreground)] text-sm">{t.name}</div>
                  <div className="text-[var(--muted)] text-xs mt-0.5">{t.location}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                Read All Reviews <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* About Teaser */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/lawn-striped.jpg')" }}
      >
        <div className="absolute inset-0 bg-[var(--primary)]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[var(--accent-light)] font-semibold text-sm tracking-widest uppercase mb-3">
                About Anthony
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Passionate About Every Garden
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Anthony is a dedicated sole trader based in Manchester with a genuine passion for creating and maintaining beautiful outdoor spaces. Every garden — big or small — gets the same level of care and attention.
              </p>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Fully insured and committed to eco-friendly practices, Anthony takes pride in delivering exceptional results while treating your garden with the respect it deserves.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Fully Insured", "Eco-Friendly", "Manchester Based", "Free Quotes"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/about">
                <Button variant="accent" size="lg">
                  Learn More About Anthony <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="/hedge-topiary.jpg"
                  alt="Neatly trimmed hedges"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--accent)] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Satisfaction Focused</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                <Snowflake className="w-6 h-6 text-[var(--primary)] mb-1" />
                <div className="text-xs font-medium text-[var(--foreground)]">Year-Round</div>
                <div className="text-xs text-[var(--muted)]">Service</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for a Beautiful Garden?
            </h2>
            <p className="text-white/70 text-xl mb-10">
              Get in touch today for a free, no-obligation quote. Serving Manchester and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/booking">
                <Button variant="accent" size="lg">
                  Book a Free Quote
                </Button>
              </Link>
              <a href="tel:07843023366">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  07843 023366
                </Button>
              </a>
            </div>
            <p className="text-white/40 text-sm">Free quotes · No obligation · Local & family run</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
