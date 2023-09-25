import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
    </main>
  );
}
