'use client'

import Example from "@/components/ContactForm";
import { LampDemo } from "@/components/Lamp";
import { ThreeDCardDemo } from "@/components/card";
import Projects from "@/components/projects";
import { CardHoverEffectDemo } from "@/components/skills";

export default function Home() {
  return (
    <main>
      <LampDemo />
      <ThreeDCardDemo />
      <Projects />
      <CardHoverEffectDemo />
      <Example />
    </main>
  );
}
