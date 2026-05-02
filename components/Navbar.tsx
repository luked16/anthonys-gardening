"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center bg-white/90 rounded-lg p-1 shadow-sm" style={{ width: 46, height: 48 }}>
              <Image
                src="/logo.png"
                alt="Anthony's Gardening Services"
                width={58}
                height={82}
                className="object-contain"
                loading="eager"
              />
            </div>
            <div>
              <span className={`font-bold text-lg leading-tight block ${scrolled ? "text-[var(--foreground)]" : "text-white"}`}>
                Anthony&apos;s
              </span>
              <span className={`text-xs leading-tight block ${scrolled ? "text-[var(--muted)]" : "text-white/75"}`}>
                Gardening Services
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--primary)] bg-[var(--primary)]/10"
                    : "text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/booking" className="ml-4">
              <Button variant="default" size="sm">
                Book a Quote
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-[var(--background)] border-t border-[var(--border)] px-4 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[var(--primary)] bg-[var(--primary)]/10"
                  : "text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className="mt-2">
            <Button variant="default" className="w-full">
              Book a Free Quote
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
