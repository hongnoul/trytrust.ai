"use client";

import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const Spline = dynamic(() => import("./SplineClient"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-black" />,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section className={inter.className}>
      <div className="mx-auto max-w-[1920px] px-[5px]">
        <div
          className={[
            "relative overflow-hidden rounded-bl-[24px] rounded-br-[24px]",
            "h-[870px]",
            "bg-black",
          ].join(" ")}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/Inn9vJSwXI5RMpio/scene.splinecode" />
          </div>

          {/* Slight dark overlay (Oligo legibility) */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Progressive edge blur for “liquid/metal” feel */}
          <div
            className={[
              "pointer-events-none absolute inset-0 rounded-[28px]",
              "backdrop-blur-[18px]",
              "[mask-image:radial-gradient(ellipse_at_center,transparent_55%,black_100%)]",
              "[-webkit-mask-image:radial-gradient(ellipse_at_center,transparent_55%,black_100%)]",
            ].join(" ")}
          />

          {/* Big title (Oligo scale/placement) */}
          <div className="absolute left-[28px] top-[36px] z-10">
            <div
              className={[
                "text-white",
                "font-semibold tracking-[-0.02em] leading-[0.9]",
                // responsive “Oligo-sized” type
                "text-[clamp(64px,12vw,300px)]",
                "drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]",
              ].join(" ")}
            >
              TrustAI
            </div>
          </div>

          {/* Bottom-left copy (to match Oligo structure) */}
          <div className="absolute bottom-[34px] left-[28px] z-10 max-w-[860px]">
            <h1 className="text-[clamp(22px,2.2vw,34px)] font-semibold tracking-[-0.01em] text-white">
              Governance for agentic RAG systems, designed to minimize hallucinations at scale
            </h1>
            <p className="mt-3 text-[14px] leading-relaxed tracking-[0.01em] text-white/80">
              A verification-first layer for retrieval, policies, and evidence—so AI outputs stay grounded, auditable,
              and safe to ship.
            </p>
          </div>

          {/* Bottom-right replacement (your spec) */}
          <div className="absolute bottom-[34px] right-[28px] z-10 max-w-[420px] text-right">
            <div className="text-[16px] font-semibold tracking-[0.01em] text-white">
              RAG-based AI Governance
            </div>
            <div className="mt-2 text-[12px] leading-relaxed tracking-[0.01em] text-white/75">
              Delivering flight ready, space deployed ESPA class platforms in less than 7 months
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
