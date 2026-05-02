"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardList, Shovel, Smile } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Get In Touch",
    description:
      "Call, text, or fill in our quick online form. We'll get back to you within 24 hours to discuss your garden needs.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Free Quote",
    description:
      "Anthony will visit your property, assess the work, and provide a no-obligation quote — completely free of charge.",
  },
  {
    icon: Shovel,
    step: "03",
    title: "We Get to Work",
    description:
      "On the agreed date, we arrive on time, work efficiently, and leave your garden looking immaculate.",
  },
  {
    icon: Smile,
    step: "04",
    title: "Enjoy Your Garden",
    description:
      "Sit back and enjoy your beautifully transformed outdoor space. Happy with the results? Book us again any time.",
  },
];

export default function ProcessSteps() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-[var(--surface)]/78" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-3">
            Simple Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            How It Works
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
            Getting your garden looking its best is straightforward. Here&apos;s what to expect from start to finish.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--border)] via-[var(--primary)]/30 to-[var(--border)]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent)] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-[var(--foreground)] mb-2">{step.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
