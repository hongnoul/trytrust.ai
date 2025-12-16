// app/page.tsx
import Navbar from "./ui/navbar";
import Hero from "./ui/hero";
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
