// app/page.tsx
import Navbar from "./ui/navbar";
import Hero from "./ui/Hero";
import AboutSection from "./ui/AboutSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
    </>
  );
}
