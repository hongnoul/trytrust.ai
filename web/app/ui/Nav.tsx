"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/mission-configurator", label: "Mission Configurator" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const desktopGap = useMemo(
    () =>
      "gap-[clamp(32px,6vw,300px)] lg:gap-[clamp(48px,7vw,300px)] xl:gap-[200px]",
    []
  );

  return (
    <header
      className={[
        inter.className,
        "sticky top-0 z-50",
        "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        "border-b border-black/10",
      ].join(" ")}
    >
      {/* Desktop: keep original 3-col grid layout */}
      <div className="hidden h-[72px] w-full items-center px-8 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start mt-2">
          <Link href="/" aria-label="Home" className="inline-flex items-center">
            <Image src="/trust.svg" alt="Logo" width={48} height={48} priority />
          </Link>
        </div>

        <nav aria-label="Primary" className="justify-self-center">
          <ul
            className={[
              "flex items-center",
              desktopGap,
              "text-[12px] font-medium tracking-[0.01em] text-black",
            ].join(" ")}
          >
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 font-bold text-black/80 transition hover:text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Mobile: compact top bar */}
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-4 md:hidden">
        <Link href="/" aria-label="Home" className="inline-flex items-center">
          <Image
            src="/trust.svg"
            alt="Logo"
            width={42}
            height={42}
            priority
            className="h-[36px] w-[36px]"
          />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-black/15 bg-white shadow-sm transition hover:border-black/25 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            aria-hidden="true"
            focusable="false"
            className="text-black"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={[
          "md:hidden",
          "fixed inset-0 z-50",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0",
            "bg-black/35 backdrop-blur-[2px]",
            "transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-label="Close menu backdrop"
        />

        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          className={[
            "absolute right-3 top-3 left-3",
            "rounded-3xl border border-black/10 bg-white shadow-[0_16px_80px_rgba(0,0,0,0.18)]",
            "transition duration-200",
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Image
                src="/trust.svg"
                alt="Logo"
                width={34}
                height={34}
                className="h-[34px] w-[34px]"
              />
              <div>
                <div className="text-[12px] font-semibold tracking-[0.1em] text-black">
                  TRUST AI
                </div>
                <div className="text-[11px] tracking-[0.02em] text-black/55">
                  Navigation
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="px-2 pb-2">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-[15px] font-medium tracking-[0.02em] text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
                  >
                    <span>{item.label}</span>
                    <span className="text-black/30">↗</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-2 grid grid-cols-2 gap-2 p-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-[44px] items-center justify-center rounded-2xl border border-black/10 bg-black text-[12px] font-medium tracking-[0.08em] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                Contact
              </Link>
              <Link
                href="/mission-configurator"
                onClick={() => setOpen(false)}
                className="inline-flex h-[44px] items-center justify-center rounded-2xl border border-black/10 bg-white text-[12px] font-medium tracking-[0.06em] text-black/80 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                Configure
              </Link>
            </div>

            <div className="px-4 pb-4 pt-2 text-[11px] tracking-[0.02em] text-black/45">
              Tip: press{" "}
              <span className="rounded-md border border-black/10 px-1.5 py-0.5">
                Esc
              </span>{" "}
              to close.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
