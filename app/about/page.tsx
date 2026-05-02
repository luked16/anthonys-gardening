"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Leaf, Heart, MapPin, Phone, ArrowRight } from "lucide-react";
import { images } from "@/lib/images";

const values = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description:
      "You can book with complete peace of mind. All work is covered by full public liability insurance.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "We care about the environment. We use eco-conscious products and practices wherever possible, and responsibly dispose of all garden waste.",
  },
  {
    icon: Heart,
    title: "Local & Family Run",
    description:
      "As a Manchester-based sole trader, every garden gets personal attention. You're not a number — you're a neighbour.",
  },
  {
    icon: MapPin,
    title: "Manchester Based",
    description:
      "We serve Manchester and surrounding areas. Local knowledge means we understand the seasonal needs of gardens in this region.",
  },
];

const servicePhotos = [
  { src: images.hedgeTrimming, label: "Hedge Trimming" },
  { src: images.lawnMowing,    label: "Lawn Mowing"    },
  { src: images.gardenTools,   label: "Garden Care"    },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-28 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${images.heroGarden}')` }}
      >
        <div className="absolute inset-0 bg-[var(--primary)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[var(--accent-light)] font-semibold text-sm tracking-widest uppercase mb-3">
              About
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Anthony
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              A dedicated gardening professional with a genuine passion for outdoor spaces and a commitment to delivering exceptional results every single time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[var(--primary)]/15 to-[var(--secondary)]/15 rounded-3xl overflow-hidden">
                <img
                  src={images.gardenerAtWork}
                  alt="Anthony gardening"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white border border-[var(--border)] p-6 rounded-2xl shadow-xl max-w-[200px]">
                <div className="text-3xl font-bold text-[var(--primary)] mb-1">Manchester</div>
                <div className="text-sm text-[var(--muted)]">&amp; Surrounding Areas</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-3">
                My Story
              </p>
              <h2 className="text-4xl font-bold text-[var(--foreground)] mb-6">
                Every Garden Deserves Expert Care
              </h2>
              <div className="space-y-4 text-[var(--muted)] text-lg leading-relaxed">
                <p>
                  Hi, I&apos;m Anthony. I run Anthony&apos;s Gardening Services as a proud sole trader serving Manchester and the surrounding communities.
                </p>
                <p>
                  Gardening isn&apos;t just a job for me — it&apos;s something I genuinely love. There&apos;s nothing quite like the satisfaction of transforming an overgrown, neglected space into something beautiful that people can truly enjoy.
                </p>
                <p>
                  Whether it&apos;s a quick lawn tidy or a full seasonal overhaul, every single garden gets my full attention and care. I believe in doing things properly, using eco-friendly methods, and treating every customer&apos;s outdoor space as if it were my own.
                </p>
                <p>
                  As a fully insured professional, you can trust that your garden — and your property — is in safe hands. I&apos;m always happy to chat through what you need and provide a no-obligation quote, completely free of charge.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button variant="default" size="lg">
                    Book a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:07843023366">
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 w-4 h-4" /> 07843 023366
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services photo strip */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-10"
          >
            What I Do
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePhotos.map(({ src, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-base drop-shadow">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-3">
              Why Choose Me
            </p>
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
              What Sets Anthony&apos;s Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-[var(--border)]"
              >
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{value.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Served */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">Area Served</h2>
            <p className="text-[var(--muted)] text-lg">
              Based in Manchester, serving the city and surrounding areas including Salford, Trafford, Stockport, and beyond.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] h-80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152059.78265498556!2d-2.3629476!3d53.4807593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f8ab%3A0x187a7768003fdc93!2sManchester!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anthony's Gardening Services - Manchester"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
