"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "ElwoTools",
      imgSrc: "/images/elwotools.png",
      link: "https://www.elwotools.se/",
      githubLink: "",
      techStack:
        "React.js | Next.js | TypeScript | JavaScript | HTML | SCSS | Material UI",
      features:
        "Product Listings | Cart | Checkout (Payment Integration) | Admin Panel",
      description:
        "Contributed to the development of product and cart pages with enhanced designs and functionality. Implemented key features for the Admin Panel, enabling efficient management of platform operations.",
    },
    {
      title: "ApnaDesk",
      imgSrc: "/images/apnadesk.png",
      link: "https://apna-desk-nk5ulk1t2-bhavisha2801s-projects.vercel.app/",
      githubLink: "https://github.com/Bhavisha2801/apnadesk",
      techStack:
        "Next.js | TypeScript | Node.js | MongoDB | Redux Toolkit | Tailwind CSS",
      features:
        "Customer Management | Dynamic Forms | Notes | Files | CRUD Operations",
      description:
        "A SaaS-based customer management platform designed to manage customers, dynamic forms, notes and files from a single workspace. Built with a scalable full-stack architecture with plans to evolve into a complete MERN-based SaaS application.",
    },
    {
      title: "PostIt",
      imgSrc: "/images/postitPrompts.png",
      link: "https://postit-prompts.vercel.app/",
      githubLink: "https://github.com/Bhavisha2801/postit",
      techStack:
        "Next.js | JavaScript | MongoDB | Node.js | Tailwind CSS",
      features:
        "Read Prompts | Create Prompt | Edit Prompt | Delete Prompt | User Profile",
      description:
        "Developed a full-stack application for creating and managing user-generated prompts. Designed and implemented both frontend and backend functionalities, ensuring a seamless user experience.",
    },
    {
      title: "YPP",
      imgSrc: "/images/ypp.png",
      link: "https://www.yourproductpartners.com/",
      githubLink: "",
      techStack: "Velo | Wix",
      features:
        "Profile Management | Profile Uploads | Pricing Details | FAQs | Get A Quote Form",
      description:
        "Designed and developed profile and form layouts, including automation for form submissions and email notifications. Enhanced the platform's usability through optimized design and functionality.",
    },
    {
      title: "Apollo Pharmacy",
      imgSrc: "/images/apollo.png",
      link: "https://apolloclone.netlify.app/",
      githubLink: "https://github.com/Bhavisha2801/Apollo_Clone",
      techStack: "JavaScript | HTML | CSS",
      features:
        "Doctors Directory | Pharmacy | Appointment Scheduling | Blog | Health Records",
      description:
        "Built a static website showcasing a healthcare platform. Used JavaScript for dynamic data rendering and HTML/CSS for responsive design and layout.",
    },
    {
      title: "Move Balls",
      imgSrc: "/images/moveballs.png",
      link: "https://move-balls.vercel.app/",
      githubLink: "https://github.com/Bhavisha2801/move-balls",
      techStack: "React.js | JavaScript | HTML | CSS",
      features:
        "Dynamic Ball Positioning | Clickable Balls | State Management",
      description:
        "Implemented a React-based interactive project to manage ball positions dynamically using state management. Demonstrated proficiency in handling React states and rendering.",
    },
    {
      title: "Rock-Paper-Scissors",
      imgSrc: "/images/rock-paper-scissors.png",
      link: "https://bhavisha2801.github.io/rock-paper-scissors/",
      githubLink: "",
      techStack: "JavaScript | HTML | CSS",
      features:
        "Interactive Gameplay | Randomized Computer Choices | Score Tracking | Reset Option | Auto Play",
      description:
        "Created an engaging Rock-Paper-Scissors game leveraging JavaScript DOM manipulation. Features include dynamic feedback, score tracking, and an intuitive user interface.",
    },
  ];

  const handleClick = (index: number) => {
    setSelectedProject(index === selectedProject ? null : index);
  };

  /*
   * Handles project selection from the Navbar.
   * This keeps your existing Navbar -> Projects interaction.
   */
  useEffect(() => {
    const handleNavbarProjectSelection = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      const projectMap: Record<string, number> = {
        elwotools: 0,
        apnadesk: 1,
        postit: 2,
        ypp: 3,
        apollo: 4,
        moveballs: 5,
        rockpaperscissors: 6,
      };

      const index = projectMap[customEvent.detail];

      if (index === undefined) return;

      setSelectedProject(index);

      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    };

    window.addEventListener(
      "select-portfolio-project",
      handleNavbarProjectSelection
    );

    return () => {
      window.removeEventListener(
        "select-portfolio-project",
        handleNavbarProjectSelection
      );
    };
  }, []);

  return (
    <section
      id="projects"
      className="mb-20 scroll-mt-24 bg-white px-4 py-16 text-white sm:px-6 md:px-12 lg:px-20 xl:px-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-indigo-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
              My Work
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Projects
          </h1>

          <div className="mt-3 h-1 w-16 rounded-full bg-indigo-500" />

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            A selection of projects showcasing my experience across frontend,
            full-stack and web development.
          </p>
        </div>

        {/* Projects Container */}
        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* Project List */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-3 shadow-xl shadow-slate-200/60">
            {/* List Header */}
            <div className="px-3 pb-3 pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Featured Projects
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Explore my selected work
              </p>
            </div>

            {/* Project Items */}
            <div className="space-y-1">
              {projects.map((project, index) => {
                const isActive = selectedProject === index;

                return (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => handleClick(index)}
                    className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {/* Number */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-semibold transition ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Project Name */}
                    <span className="truncate text-sm font-medium">
                      {project.title}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`ml-auto text-sm transition-transform duration-200 ${
                        isActive
                          ? "translate-x-0 text-white"
                          : "-translate-x-1 text-slate-600 opacity-0 group-hover:translate-x-0 group-hover:text-slate-400 group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Details */}
          <div className="min-w-0">
            {selectedProject !== null ? (
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-200/60">
                {/* Decorative Background */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

                <div className="relative p-5 sm:p-7">
                  {/* Project Image */}
                  <Link
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="group relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-950 sm:h-56">
                      <Image
                        src={projects[selectedProject].imgSrc}
                        height={1000}
                        width={1000}
                        className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
                        alt={projects[selectedProject].title}
                      />

                      {/* Image Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/30 group-hover:opacity-100">
                        <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-900 shadow-lg">
                          View Project ↗
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* GitHub */}
                  <div className="mb-4">
                    {projects[selectedProject].githubLink?.length > 0 ? (
                      <Link
                        href={projects[selectedProject].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-indigo-400 transition-colors hover:text-indigo-300"
                      >
                        <FaLink size={11} />
                        Visit GitHub
                      </Link>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-1.5 text-xs font-medium tracking-wide text-slate-600">
                        <FaLink size={11} />
                        Visit GitHub
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <Link
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-indigo-400">
                      {projects[selectedProject].title}
                    </h2>
                  </Link>

                  {/* Information */}
                  <div className="space-y-4">
                    {/* Tech Stack */}
                    <div>
                      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Tech Stack
                      </p>

                      <p className="text-sm leading-6 text-slate-300">
                        {projects[selectedProject].techStack}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Features
                      </p>

                      <p className="text-sm leading-6 text-slate-300">
                        {projects[selectedProject].features}
                      </p>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Overview
                      </p>

                      <p className="max-w-4xl text-sm leading-6 text-slate-400">
                        {projects[selectedProject].description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Project Link */}
                  <div className="mt-6 border-t border-slate-800 pt-4">
                    <Link
                      href={projects[selectedProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-indigo-400 transition-all hover:gap-3 hover:text-indigo-300"
                    >
                      Explore Project
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty State */
              <div className="flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-xl shadow-slate-200/60">
                <div>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-xl text-indigo-400">
                    ✦
                  </div>

                  <h2 className="text-lg font-semibold text-white">
                    Select a project
                  </h2>

                  <p className="mt-2 text-sm text-slate-400">
                    Click on a project to view its details.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
