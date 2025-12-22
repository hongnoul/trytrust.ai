
// /web/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Nav from "./ui/Nav";
import Transition from "./providers/Transition";

export const metadata: Metadata = {
  title: "TrustAI",
  description: "Trust Layer for Agentic AI Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Transition>
          <Nav />
          {children}
        </Transition>
      </body>
    </html>
  );
}
