"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export default function Hero() {
  return (
    <section className={inter.className}>
      <div className="mx-auto max-w-480 px-1.25">
        <div
          className={[
            "relative overflow-hidden rounded-bl-3xl rounded-br-3xl bg-black",
            "h-[calc(100svh-64px)] md:h-[calc(99svh-72px)]",
            "min-h-140",
          ].join(" ")}
        >
          <Image
            src="/pixabay.jpg"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/15" />

          <div
            className={[
              "pointer-events-none absolute inset-0",
              "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.70)_100%)]",
            ].join(" ")}
          />

          <div
            className={[
              "pointer-events-none absolute inset-0",
              "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.55)_100%)]",
            ].join(" ")}
          />

          <div className="absolute left-7 top-9 z-10 text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
            <div className="text-[clamp(64px,12vw,300px)] font-semibold leading-[0.9] tracking-[-0.02em]">
              TrustAI
            </div>
          </div>

          <div className="absolute bottom-8 left-7 z-10 max-w-216 text-white">
            <h1 className="text-[clamp(22px,2.2vw,34px)] font-semibold tracking-[-0.01em]">
              Governance for agentic RAG systems, designed to minimize hallucinations at scale
            </h1>
            <p className="mt-3 text-[14px] leading-relaxed tracking-[0.01em] text-white/80">
              A verification-first layer for retrieval, policies, and evidence—so AI outputs stay grounded, auditable,
              and safe to ship.
            </p>
          </div>

          <div className="absolute bottom-8 right-7 z-10 max-w-105 text-right text-white">
            <div className="text-[16px] font-semibold tracking-[0.01em]">RAG-based AI Governance</div>
            <div className="mt-2 text-[12px] leading-relaxed tracking-[0.01em] text-white/75">
              Delivering flight ready, space deployed ESPA class platforms in less than 7 months
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
