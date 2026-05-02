"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ExternalLink, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero — garden background */}
      <section
        className="relative pt-40 pb-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80')",
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
              Get In Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Have a question or ready to book? Drop us a message and we&apos;ll be in touch within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Contact Details</h2>
                <div className="space-y-5">
                  <a
                    href="tel:07843023366"
                    className="flex items-center gap-4 p-4 bg-[var(--surface)] rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                      <Phone className="w-5 h-5 text-[var(--primary)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)] mb-0.5">Phone / Text</div>
                      <div className="font-semibold text-[var(--foreground)]">07843 023366</div>
                    </div>
                  </a>

                  <a
                    href="mailto:enquiries@anthonysgardening.co.uk"
                    className="flex items-center gap-4 p-4 bg-[var(--surface)] rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                      <Mail className="w-5 h-5 text-[var(--primary)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)] mb-0.5">Email</div>
                      <div className="font-semibold text-[var(--foreground)] text-sm break-all">
                        enquiries@anthonysgardening.co.uk
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-[var(--surface)] rounded-xl border border-[var(--border)]">
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)] mb-0.5">Area Served</div>
                      <div className="font-semibold text-[var(--foreground)]">Manchester & Surrounds</div>
                    </div>
                  </div>

                  <a
                    href="https://instagram.com/anthonysgardening"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[var(--surface)] rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                      <ExternalLink className="w-5 h-5 text-[var(--primary)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)] mb-0.5">Instagram</div>
                      <div className="font-semibold text-[var(--foreground)]">@anthonysgardening</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-[var(--surface)] rounded-xl border border-[var(--border)]">
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)] mb-0.5">Response Time</div>
                      <div className="font-semibold text-[var(--foreground)]">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <CheckCircle className="w-16 h-16 text-[var(--primary)] mb-4" />
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--muted)] text-lg">
                    Thanks for getting in touch. Anthony will be with you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="07700 900000"
                        className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your garden and what you need..."
                      className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try calling us directly on 07843 023366.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-[var(--muted)] text-xs text-center">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152059.78265498556!2d-2.3629476!3d53.4807593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f8ab%3A0x187a7768003fdc93!2sManchester!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anthony's Gardening Services location - Manchester"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
