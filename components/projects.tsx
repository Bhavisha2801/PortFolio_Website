"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
        "Product Listings | Cart | Checkout | Admin Panel",
      description:
        "Contributed to product and cart pages with enhanced UI and functionality. Implemented Admin Panel features for efficient platform management.",
    },

    // ⭐ SECOND PRIORITY PROJECT
    {
      title: "ApnaDesk",
      imgSrc: "/images/apnadesk.png",
      link: "https://apnadesk.vercel.app/",
      githubLink: "https://github.com/Bhavisha2801/apnadesk",
      techStack:
        "Next.js | TypeScript | Node.js | MongoDB | Redux Toolkit | Tailwind CSS",
      features:
        "Customer Management | Notes | Dynamic Forms | Form Responses | File Management",
      description:
        "Built a SaaS-style customer management platform with a feature-oriented architecture. Implemented customer workflows, schema-driven dynamic forms, Redux Toolkit state management, REST APIs, and MongoDB persistence.",
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
        "Developed a full-stack application for creating and managing user-generated prompts with frontend and backend functionality.",
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
        "Built a responsive healthcare platform with dynamic data rendering using JavaScript and a responsive HTML/CSS interface.",
    },

    {
    title: "YPP",
    imgSrc: "/images/ypp.png",
    link: "YOUR_YPP_LINK",
    githubLink: "YOUR_YPP_GITHUB_LINK",
    techStack: "Wix Studio | Velo | JavaScript",
    features:
      "User Profiles | Dynamic Pages | Email Automation",
    description:
      "Developed a Wix Studio website using Velo with dynamic user profiles and automated email workflows.",
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
        "Implemented an interactive React project demonstrating state management, dynamic positioning, and component rendering.",
    },

    {
      title: "Rock-Paper-Scissors",
      imgSrc: "/images/rock-paper-scissors.png",
      link: "https://bhavisha2801.github.io/rock-paper-scissors/",
      githubLink: "",
      techStack: "JavaScript | HTML | CSS",
      features:
        "Interactive Gameplay | Randomized Choices | Score Tracking | Reset | Auto Play",
      description:
        "Created an interactive game using JavaScript DOM manipulation with dynamic feedback, score tracking, and auto-play functionality.",
    },
  ];

  const handleClick = (index: number) => {
    setSelectedProject(
      index === selectedProject ? null : index
    );
  };

  const activeProject =
    selectedProject !== null
      ? projects[selectedProject]
      : null;

  return (
    <section
      className="body-font mb-20 px-4 text-white sm:px-6 md:px-20 lg:px-32"
      id="projects"
    >
      <div className="container mx-auto px-2 py-24">
        {/* Section Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-3xl font-semibold text-black">
            Projects
          </h1>

          <div className="h-1 w-20 rounded bg-indigo-500" />

          <p className="mt-4 max-w-2xl text-sm text-gray-500">
            A selection of projects showcasing my experience
            across frontend and full-stack development.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* ================= PROJECT NAVIGATION ================= */}
          <div className="w-full md:w-1/3">
            <div className="rounded-2xl bg-gray-900 p-3 shadow-xl">
              <p className="mb-3 px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Featured Projects
              </p>

              <ul className="space-y-1">
                {projects.map((project, index) => {
                  const isSelected =
                    selectedProject === index;

                  return (
                    <li key={project.title}>
                      <button
                        type="button"
                        onClick={() => handleClick(index)}
                        className={`group relative flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                          isSelected
                            ? "bg-indigo-500 text-white shadow-lg"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {/* Project number */}
                          <span
                            className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs ${
                              isSelected
                                ? "bg-white/20 text-white"
                                : "bg-gray-800 text-gray-500 group-hover:bg-gray-700 group-hover:text-gray-300"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {project.title}
                        </span>

                        {/* Arrow */}
                        <span
                          className={`text-lg transition-transform duration-300 ${
                            isSelected
                              ? "translate-x-1 text-white"
                              : "text-gray-600 group-hover:translate-x-1 group-hover:text-indigo-400"
                          }`}
                        >
                          →
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* ================= PROJECT DETAILS ================= */}
          <div className="w-full md:w-2/3">
            {activeProject ? (
              <div className="overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
                {/* Project Image */}
                <Link
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group relative overflow-hidden bg-gray-950">
                    <Image
                      src={activeProject.imgSrc}
                      height={1000}
                      width={1000}
                      className="h-52 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                      alt={activeProject.title}
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                      <span className="scale-90 rounded-lg bg-white px-4 py-2 text-xs font-medium text-gray-900 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        View Project
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  {/* Project title + links */}
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-xl font-semibold text-white">
                      {activeProject.title}
                    </h2>

                    <div className="flex items-center gap-4">
                      {activeProject.githubLink && (
                        <Link
                          href={activeProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-gray-400 transition hover:text-white"
                        >
                          <FaGithub />
                          GitHub
                        </Link>
                      )}

                      <Link
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-indigo-400 transition hover:text-indigo-300"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </Link>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Tech Stack
                    </p>

                    <p className="text-sm leading-6 text-gray-300">
                      {activeProject.techStack}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Key Features
                    </p>

                    <p className="text-sm leading-6 text-gray-300">
                      {activeProject.features}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-400">
                    {activeProject.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-gray-900 p-8 text-center shadow-xl">
                <div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl text-indigo-400">
                    ✦
                  </div>

                  <h2 className="mb-2 text-lg font-semibold text-white">
                    Explore My Projects
                  </h2>

                  <p className="max-w-sm text-sm leading-6 text-gray-400">
                    Select a project from the list to explore
                    its technologies, features and implementation.
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
