"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
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

  /**
   * Smoothly scroll to a section without adding
   * #section-name to the browser URL.
   */
  const scrollToSection = (sectionId: string) => {
    setActive(null);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Remove any existing hash from URL
      window.history.replaceState(
        null,
        "",
        window.location.pathname
      );
    }
  };

  /**
   * Select a project from the navbar dropdown
   * and open it inside the Projects section.
   */
  const handleProjectClick = (projectId: string) => {
    setActive(null);

    // Tell Projects component which project to open
    window.dispatchEvent(
      new CustomEvent("select-portfolio-project", {
        detail: projectId,
      })
    );

    // Scroll to Projects section
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Remove hash from URL
    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );
  };

  /**
   * Scroll to top for Home
   */
  const handleHomeClick = () => {
    setActive(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Remove hash if any
    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );
  };

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-10 z-50 mx-auto w-[92%] max-w-2xl text-sm md:text-base",
        className
      )}
    >
      <Menu setActive={setActive}>

        {/* Home */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
          linkVal=""
          onClick={handleHomeClick}
        />

        {/* CV */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="CV"
          linkVal=""
          onClick={() => scrollToSection("cv")}
        />

        {/* Projects */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
          linkVal=""
          onClick={() => scrollToSection("projects")}
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
              <button
                type="button"
                onClick={() => handleProjectClick("elwotools")}
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-2.5 text-left transition-all duration-200 hover:border-emerald-400/30 hover:bg-white/[0.08]"
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
              </button>

              {/* ApnaDesk */}
              <button
                type="button"
                onClick={() => handleProjectClick("apnadesk")}
                className="group relative flex items-center gap-3 rounded-xl border border-indigo-400/20 bg-indigo-500/[0.08] p-2.5 text-left transition-all duration-200 hover:border-indigo-400/50 hover:bg-indigo-500/[0.14]"
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
              </button>

              {/* PostIt */}
              <button
                type="button"
                onClick={() => handleProjectClick("postit")}
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-2.5 text-left transition-all duration-200 hover:border-violet-400/30 hover:bg-white/[0.08]"
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
              </button>

              {/* Apollo Pharmacy */}
              <button
                type="button"
                onClick={() => handleProjectClick("apollo")}
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-2.5 text-left transition-all duration-200 hover:border-blue-400/30 hover:bg-white/[0.08]"
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
              </button>
            </div>

            {/* Footer */}
            <div className="mt-3 border-t border-white/10 pt-2 text-center">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="text-[10px] font-medium text-slate-500 transition-colors hover:text-indigo-400"
              >
                View all projects →
              </button>
            </div>
          </div>
        </MenuItem>

        {/* Skills */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Skills"
          linkVal=""
          onClick={() => scrollToSection("skills")}
        />

        {/* Contact */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Me"
          linkVal=""
          onClick={() => scrollToSection("contact")}
        />

      </Menu>
    </div>
  );
}
