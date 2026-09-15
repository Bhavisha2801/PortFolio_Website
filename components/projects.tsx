"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  imgSrc: string;
  link: string;
  githubLink: string;
  techStack: string;
  features: string;
  description: string;
};

const projects: Project[] = [
  {
    id: "elwotools",
    title: "ElwoTools",
    imgSrc: "/images/elwotools.png",
    link: "https://www.elwotools.se/",
    githubLink: "",
    techStack:
      "React.js | Next.js | TypeScript | JavaScript | HTML | SCSS | Material UI",
    features:
      "Product Listings | Cart | Checkout | Admin Panel",
    description:
      "Contributed to product and cart pages with improved UI and functionality. Also implemented key Admin Panel features for efficient platform management.",
  },

  {
    id: "apnadesk",
    title: "ApnaDesk",
    imgSrc: "/images/apnadesk.png",
    link: "https://apna-desk.vercel.app/",
    githubLink: "https://github.com/Bhavisha2801/apnadesk",
    techStack:
      "Next.js | TypeScript | Node.js | MongoDB | Redux Toolkit | Tailwind CSS",
    features:
      "Customer Management | Dynamic Forms | Notes | Files | CRUD | Dashboard",
    description:
      "SaaS-based customer management platform designed with a scalable full-stack architecture. Includes customer records, dynamic forms, notes and file management with Redux-powered state handling and API-driven CRUD operations.",
  },

  {
    id: "postit",
    title: "PostIt",
    imgSrc: "/images/postitPrompts.png",
    link: "https://postit-prompts.vercel.app/",
    githubLink: "https://github.com/Bhavisha2801/postit",
    techStack:
      "Next.js | JavaScript | MongoDB | Node.js | Tailwind CSS",
    features:
      "Create Prompts | Edit | Delete | User Profile | Prompt Sharing",
    description:
      "Developed a full-stack prompt-sharing application with frontend and backend functionality, user profiles and CRUD operations for managing prompts.",
  },

  {
    id: "ypp",
    title: "YPP",
    imgSrc: "/images/ypp.png",
    link: "https://www.yourproductpartners.com/",
    githubLink: "",
    techStack: "Velo | Wix",
    features:
      "Profile Management | Forms | Email Automation | Quote Requests",
    description:
      "Designed profile and form layouts with Velo functionality, including automated email workflows for form submissions and quote requests.",
  },

  {
    id: "apollo",
    title: "Apollo Pharmacy",
    imgSrc: "/images/apollo.png",
    link: "https://apolloclone.netlify.app/doctors",
    githubLink: "https://github.com/Bhavisha2801/Apollo_Clone",
    techStack: "JavaScript | HTML | CSS",
    features:
      "Doctors Directory | Pharmacy | Appointments | Blog | Health Records",
    description:
      "Built a responsive healthcare platform interface using JavaScript, HTML and CSS with dynamic data rendering and multiple healthcare-focused sections.",
  },

  {
    id: "moveballs",
    title: "Move Balls",
    imgSrc: "/images/moveballs.png",
    link: "https://move-balls.vercel.app/",
    githubLink: "https://github.com/Bhavisha2801/move-balls",
    techStack: "React.js | JavaScript | HTML | CSS",
    features:
      "Dynamic Ball Positioning | Click Interaction | State Management",
    description:
      "Built an interactive React application demonstrating dynamic state management and real-time rendering of movable elements.",
  },

  {
    id: "rockpaperscissors",
    title: "Rock-Paper-Scissors",
    imgSrc: "/images/rock-paper-scissors.png",
    link: "https://bhavisha2801.github.io/rock-paper-scissors/",
    githubLink: "",
    techStack: "JavaScript | HTML | CSS",
    features:
      "Gameplay | Random Choices | Score Tracking | Reset | Auto Play",
    description:
      "Created an interactive browser game using JavaScript DOM manipulation with dynamic gameplay, score tracking and automated play functionality.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<number | null>(null);

  /**
   * Handles project selection from Navbar.
   */
  useEffect(() => {
    const handleProjectSelect = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      const projectId = customEvent.detail;

      const projectIndex = projects.findIndex(
        (project) => project.id === projectId
      );

      if (projectIndex === -1) {
        return;
      }

      // Open selected project
      setSelectedProject(projectIndex);

      // Scroll to Projects section
      setTimeout(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 50);
    };

    window.addEventListener(
      "select-portfolio-project",
      handleProjectSelect
    );

    return () => {
      window.removeEventListener(
        "select-portfolio-project",
        handleProjectSelect
      );
    };
  }, []);

  const handleClick = (index: number) => {
    setSelectedProject(
      index === selectedProject ? null : index
    );
  };

  return (
    <section
      id="projects"
      className="body-font mb-20 text-white md:px-40 sm:px-4"
    >
      <div className="container mx-auto px-5 py-24">
        {/* Section Header */}
        <div className="mb-10 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="title-font mb-2 text-2xl font-medium text-black sm:text-3xl">
              Projects
            </h1>

            <div className="h-1 w-20 rounded bg-indigo-500" />
          </div>

          <p className="w-full leading-relaxed text-white lg:w-1/2" />
        </div>

        {/* Projects */}
        <div className="flex flex-wrap -m-4">
          {/* Project List */}
          <div className="w-full p-4 md:w-1/3">
            <div className="rounded-lg bg-gray-800 p-6">
              <ul>
                {projects.map((project, index) => {
                  const isSelected =
                    selectedProject === index;

                  return (
                    <li
                      key={project.id}
                      className={`mb-4 cursor-pointer rounded-md px-3 py-2 transition-all duration-300 ${
                        isSelected
                          ? "bg-indigo-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      {project.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Project Details */}
          <div className="w-full p-4 md:w-2/3">
            {selectedProject !== null ? (
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
                {/* Project Image */}
                <Link
                  href={projects[selectedProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projects[selectedProject].imgSrc}
                    height={1000}
                    width={1000}
                    className="mb-6 h-40 w-full rounded object-contain"
                    alt={projects[selectedProject].title}
                  />
                </Link>

                {/* GitHub */}
                <div className="mb-2 mt-1 flex items-center justify-between">
                  {projects[selectedProject].githubLink ? (
                    <Link
                      href={
                        projects[selectedProject].githubLink
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="title-font flex items-center rounded-xl text-xs font-medium tracking-widest text-indigo-500 transition-colors hover:text-indigo-400">
                        <FaLink className="mr-1 inline-block" />
                        Visit GitHub
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="title-font flex cursor-not-allowed items-center rounded-xl text-xs font-medium tracking-widest text-gray-500">
                      <FaLink className="mr-1 inline-block" />
                      GitHub Not Available
                    </h3>
                  )}
                </div>

                {/* Project Content */}
                <Link
                  href={projects[selectedProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="title-font mb-2 text-lg font-medium text-white">
                    {projects[selectedProject].title}
                  </h2>

                  <p className="mb-2 text-sm leading-relaxed">
                    <b>Tech Stack:</b>{" "}
                    {projects[selectedProject].techStack}
                  </p>

                  <p className="mb-2 text-sm leading-relaxed">
                    <b>Features:</b>{" "}
                    {projects[selectedProject].features}
                  </p>

                  <p className="mb-2 text-sm leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </Link>
              </div>
            ) : (
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <h2 className="title-font mb-2 text-lg font-medium text-white">
                  Select a project
                </h2>

                <p className="mb-2 text-sm leading-relaxed text-gray-300">
                  Click on a project to view its details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
