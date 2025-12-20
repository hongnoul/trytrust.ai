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
      ].join(" ")}
    >
      <div className="grid h-full w-full grid-cols-[1fr_auto_1fr] items-center px-8">
        <div className="justify-self-start mt-2">
          <Link href="/" aria-label="Home" className="inline-flex items-center">
            <Image
              src="/trust.svg"
              alt="Logo"
              width={48}
              height={48}
              priority
            />
          </Link>
        </div>

        <nav aria-label="Primary" className="justify-self-center">
          <ul className="flex items-center gap-[300px] text-[12px] font-medium tracking-[0.01em] text-black">
            <li>
              <Link href="/services" className="hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-black">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/mission-configurator" className="hover:text-black">
                Mission Configurator
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-self-end gap-4">
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-[44px] w-[44px] items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              width="500"
              height="22"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M3 8h99
                  M3 16h99"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
