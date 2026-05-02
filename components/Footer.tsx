import Link from "next/link";
import { Leaf, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const services = [
  "Lawn Mowing & Edging",
  "Hedge Trimming",
  "Garden Maintenance",
  "Weeding & Pruning",
  "Seasonal Tidy Ups",
  "Pressure Washing",
];

const pages = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book a Quote" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[var(--primary)] rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg leading-tight block">Anthony&apos;s</span>
                <span className="text-white/60 text-xs leading-tight block">Gardening Services</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your green space, my expert care. Professional gardening services across Manchester. Fully insured and eco-friendly.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/anthonysgardening"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--primary)] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/90">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/90">Quick Links</h3>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/90">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <a
                  href="tel:07843023366"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  07843 023366
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <a
                  href="mailto:enquiries@anthonysgardening.co.uk"
                  className="text-white/60 hover:text-white text-sm transition-colors break-all"
                >
                  enquiries@anthonysgardening.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Manchester & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Anthony&apos;s Gardening Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/40 text-sm">Fully Insured</span>
            <span className="text-white/40 text-sm">Eco-Friendly</span>
            <span className="text-white/40 text-sm">Manchester</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
