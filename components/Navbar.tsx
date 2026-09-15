"use client";

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <NavbarComp className="top-2" />
    </div>
  );
}

function NavbarComp({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-10 z-50 mx-auto w-[92%] max-w-2xl text-sm md:text-base",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
          linkVal=""
        />

        <MenuItem
          setActive={setActive}
          active={active}
          item="CV"
          linkVal="#cv"
        />

        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
          linkVal="#projects"
        >
          {/* Projects Dropdown */}
          <div className="w-[620px] rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl">
            
            {/* Header */}
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  Featured Projects
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  A few things I&apos;ve built
                </p>
              </div>

              <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-indigo-300">
                Portfolio
              </span>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* ElwoTools */}
              <div className="group rounded-xl border border-white/5 bg-white/[0.04] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.08]">
                <ProductItem
                  title="ElwoTools"
                  href="https://www.elwotools.se/"
                  src="/images/elwotools.png"
                  description="Product, cart and Admin Panel development."
                />
              </div>

              {/* ApnaDesk */}
              <div className="relative rounded-xl border border-indigo-400/30 bg-indigo-500/[0.08] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:bg-indigo-500/[0.14]">
                <span className="absolute right-2 top-2 z-10 rounded-full bg-indigo-500 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white shadow-lg">
                  Featured
                </span>

                <ProductItem
                  title="ApnaDesk"
                  href="https://apna-desk-nk5ulk1t2-bhavisha2801s-projects.vercel.app/"
                  src="/images/apnadesk.png"
                  description="SaaS customer management platform with dynamic forms, notes and files."
                />
              </div>

              {/* PostIt */}
              <div className="group rounded-xl border border-white/5 bg-white/[0.04] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.08]">
                <ProductItem
                  title="PostIt"
                  href="https://postit-prompts.vercel.app/"
                  src="/images/postit.png"
                  description="Full-stack prompt sharing application."
                />
              </div>

              {/* Apollo Pharmacy */}
              <div className="group rounded-xl border border-white/5 bg-white/[0.04] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.08]">
                <ProductItem
                  title="Apollo Pharmacy"
                  href="https://apolloclone.netlify.app/doctors"
                  src="/images/apollo.png"
                  description="Healthcare platform with dynamic data and responsive UI."
                />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-[11px] text-slate-500">
                React • Next.js • TypeScript • Node.js
              </span>

              <a
                href="#projects"
                className="text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                View all projects →
              </a>
            </div>
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="Skills"
          linkVal="#skills"
        />

        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Me"
          linkVal="#contact"
        />
      </Menu>
    </div>
  );
}
