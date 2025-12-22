"use client";

import Image from "next/image";

export default function Foot() {
  return (
    <footer className="w-full bg-var(--foreground) py-24 flex justify-center">
      <Image
        src="/inline.svg"
        alt="Footer"
        width={1800}
        height={320}
        priority
        className="w-[92%] max-w-[1800px] h-auto"
      />
    </footer>
  );
}
