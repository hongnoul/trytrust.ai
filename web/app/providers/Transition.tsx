// /web/app/providers/Transition.tsx

"use client";

import { useEffect, useRef, PropsWithChildren } from "react";
import { TransitionRouter } from "next-transition-router";
import gsap from "gsap";

const BLOCK_SIZE = 60;

export default function Transition({ children }: PropsWithChildren) {
  const gridRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const didInitRef = useRef(false);

  const createGrid = () => {
    const container = gridRef.current;
    if (!container) return;

    container.replaceChildren();
    blocksRef.current = [];

    const { innerWidth: w, innerHeight: h } = window;
    const cols = Math.ceil(w / BLOCK_SIZE);
    const rows = Math.ceil(h / BLOCK_SIZE) + 1;

    const offsetX = (w - cols * BLOCK_SIZE) / 2;
    const offsetY = (h - rows * BLOCK_SIZE) / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const block = document.createElement("div");
        block.className = "transition-block";
        block.style.cssText = `
          width:${BLOCK_SIZE}px;
          height:${BLOCK_SIZE}px;
          left:${c * BLOCK_SIZE + offsetX}px;
          top:${r * BLOCK_SIZE + offsetY}px;
        `;
        container.appendChild(block);
        blocksRef.current.push(block);
      }
    }

    gsap.set(blocksRef.current, { opacity: 0 });
  };

  useEffect(() => {
    createGrid();
    window.addEventListener("resize", createGrid);
    return () => window.removeEventListener("resize", createGrid);
  }, []);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        const tween = gsap.to(blocksRef.current, {
          opacity: 1,
          duration: 0.05,
          ease: "power2.inOut",
          stagger: { amount: 0.5, from: "random" },
          onComplete: next,
        });
        return () => tween.kill();
      }}
      enter={(next) => {
        gsap.set(blocksRef.current, { opacity: 1 });
        const tween = gsap.to(blocksRef.current, {
          opacity: 0,
          duration: 0.05,
          delay: 0.3,
          ease: "power2.inOut",
          stagger: { amount: 0.5, from: "random" },
          onComplete: next,
        });
        return () => tween.kill();
      }}
    >
      <div ref={gridRef} className="transition-grid" />
      {children}
    </TransitionRouter>
  );
}
