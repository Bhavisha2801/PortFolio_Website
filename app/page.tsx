'use client'

import Example from "@/components/ContactForm";
import { Hero } from "@/components/HeroSection/Hero";
import { CV } from "@/components/CV";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="m-0 p-0">
      <Hero />
      <CV />
      <Projects />
      <Skills />
      <Example />
    </main>
  );
}
