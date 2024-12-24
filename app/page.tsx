'use client'

import Example from "@/components/ContactForm";
import { BackgroundCellAnimation } from "@/components/Lamp";
import { ThreeDCardDemo } from "@/components/card";
import Projects from "@/components/projects";
import { CardHoverEffectDemo } from "@/components/skills";

export default function Home() {
  return (
    <main className="m-0 p-0">
      <BackgroundCellAnimation />
      <ThreeDCardDemo />
      <Projects />
      <CardHoverEffectDemo />
      <Example />
    </main>
  );
}
