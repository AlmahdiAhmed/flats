"use client";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </main>
  );
}
