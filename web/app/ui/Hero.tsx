"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Hero() {
  return (
    <section className={inter.className}>
      <div className="mx-auto max-w-480 px-1.25">
        <div className="relative h-[870px] overflow-hidden rounded-bl-3xl rounded-br-3xl bg-black">
          <Image src="/pixabay.jpg" alt="Hero background" fill className="absolute inset-0 object-cover" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] backdrop-blur-[18px] [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,transparent_55%,black_100%)]" />

          <div className="absolute left-7 top-9 z-10 text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
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
