"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Navbar() {
  return (
    <header
      className={[
        inter.className,
        "sticky top-0 z-50",
        "h-[72px] bg-white",
        "border-b border-black/10",
      ].join(" ")}
    >
      <div className="mx-auto grid h-full max-w-[1280px] grid-cols-[56px_1fr_auto] items-center px-[22px]">
        {/* Left: logo */}
        <Link href="/" aria-label="Home" className="inline-flex items-center">
          <Image
            src="/trust.svg"
            alt="Logo"
            width={44}
            height={44}
            priority
            className="h-[44px] w-[44px]"
          />
        </Link>

        {/* Center: nav */}
        <nav aria-label="Primary" className="justify-self-center">
          <ul className="flex items-center gap-[140px] text-[14px] font-medium tracking-[0.01em] text-black/90">
            <li>
              <Link href="/services" className="hover:text-black">
                Services
                <sup className="ml-[2px] align-super text-[10px] font-semibold text-black/60">
                  4
                </sup>
              </Link>
            </li>

            <li>
              <Link href="/careers" className="hover:text-black">
                Careers
              </Link>
            </li>

            <li>
              <Link href="/mission-configurator" className="font-bold hover:text-black">
                Mission Configurator
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right */}
        <div className="flex items-center justify-self-end gap-4">
          <Link
            href="/contact"
            className="text-[14px] font-medium tracking-[0.01em] text-black/90 hover:text-black"
          >
            Contact
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[10px] border border-black/10 bg-white hover:bg-black/[0.02]"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
