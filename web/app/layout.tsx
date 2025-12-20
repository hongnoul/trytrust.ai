import type { Metadata } from "next";
import "./globals.css";
import Nav from "./ui/Nav";

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
        <Nav />
        {children}
      </body>
    </html>
  );
}
