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
          <div className="w-[420px] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl">
            
            {/* Header */}
            <div className="mb-3 flex items-center justify-between px-1">
              <div>
                <p className="text-xs font-semibold text-white">
                  Featured Projects
                </p>
                <p className="text-[10px] text-slate-500">
                  Selected work
                </p>
              </div>
        
              <span className="rounded-full bg-indigo-500/10 px-2 py-1 text-[9px] font-medium text-indigo-400">
                4 Projects
              </span>
            </div>
        
            {/* Projects Grid */}
            <div className="grid grid-cols-2 gap-2">
        
              {/* ElwoTools */}
              <a
                href="https://www.elwotools.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-2.5 transition-all duration-200 hover:border-emerald-400/30 hover:bg-white/[0.08]"
              >
                <div className="h-11 w-14 shrink-0 overflow-hidden rounded-lg bg-white">
                  <img
                    src="/images/elwotools.png"
                    alt="ElwoTools"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
        
                <span className="truncate text-xs font-medium text-slate-200 transition-colors group-hover:text-white">
                  ElwoTools
                </span>
              </a>
        
              {/* ApnaDesk */}
              <a
                href="https://apna-desk-nk5ulk1t2-bhavisha2801s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-indigo-400/20 bg-indigo-500/[0.08] p-2.5 transition-all duration-200 hover:border-indigo-400/50 hover:bg-indigo-500/[0.14]"
              >
                <div className="h-11 w-14 shrink-0 overflow-hidden rounded-lg bg-white">
                  <img
                    src="/images/apnadesk.png"
                    alt="ApnaDesk"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
        
                <div className="min-w-0">
                  <span className="block truncate text-xs font-semibold text-white">
                    ApnaDesk
                  </span>
        
                  <span className="text-[9px] text-indigo-400">
                    Featured
                  </span>
                </div>
              </a>
        
              {/* PostIt */}
              <a
                href="https://postit-prompts.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-2.5 transition-all duration-200 hover:border-violet-400/30 hover:bg-white/[0.08]"
              >
                <div className="h-11 w-14 shrink-0 overflow-hidden rounded-lg bg-white">
                  <img
                    src="/images/postit.png"
                    alt="PostIt"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
        
                <span className="truncate text-xs font-medium text-slate-200 transition-colors group-hover:text-white">
                  PostIt
                </span>
              </a>
        
              {/* Apollo Pharmacy */}
              <a
                href="https://apolloclone.netlify.app/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-2.5 transition-all duration-200 hover:border-blue-400/30 hover:bg-white/[0.08]"
              >
                <div className="h-11 w-14 shrink-0 overflow-hidden rounded-lg bg-white">
                  <img
                    src="/images/apollo.png"
                    alt="Apollo Pharmacy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
        
                <span className="text-xs font-medium leading-tight text-slate-200 transition-colors group-hover:text-white">
                  Apollo Pharmacy
                </span>
              </a>
        
            </div>
        
            {/* Footer */}
            <div className="mt-3 border-t border-white/10 pt-2 text-center">
              <a
                href="#projects"
                className="text-[10px] font-medium text-slate-500 transition-colors hover:text-indigo-400"
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
