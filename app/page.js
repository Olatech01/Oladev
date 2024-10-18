import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero";
import ParticlesComponent from "@/components/Particle";
import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[10rem] sm:px-4">
      <Hero />
      <Contact />
    </div>
  );
}
