import React, { useState } from "react";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ElwoTools",
      imgSrc: "/images/elwotools.png",
      link: "https://www.elwotools.se/",
      githubLink: "",
      techStack: "React.js | Next.js | TypeScript | JavaScript | HTML | SCSS | Material UI",
      features: "Products | Cart | Checkout(payment) | Admin Panel etc",
      description: "Worked on product and cart page design and feature related tasks and implemented Admin Panel.",
    },
    {
      title: "PostIt",
      imgSrc: "/images/postitPrompts.png",
      link: "https://postit-prompts.vercel.app/",
      githubLink: "https://github.com/Bhavisha2801/postit",
      techStack: "Next.js | JavaScript | MongoDB | Node.js | Tailwind Css",
      features: "Read Prompts | Create Prompt | Edit Prompt | Delete Prompt | Profile",
      description: "Implemented Full stack app named postit using. Handled frontend and backend both including design.",
    },
    {
      title: "YPP",
      imgSrc: "/images/ypp.png",
      link: "https://www.yourproductpartners.com/",
      githubLink: "",
      techStack: "Velo | Wix",
      features: "Profiles | Upload Profiles | Profiles Details | Pricing | FAQ | Get A Quote",
      description: "Handled profiles designs and forms designs and features like submit a form and automations emails on submit.",
    },
    {
      title: "Apollo Pharmacy",
      imgSrc: "/images/apollo.png",
      link: "https://apolloclone.netlify.app/",
      githubLink: "https://github.com/Bhavisha2801/Apollo_Clone",
      techStack: "JavaScript | HTML | CSS",
      features: "Doctors | Pharmacy | Appointment | Blog | Health Record",
      description: "Created using JS and HTML/CSS. Basic site created to show data using JS and design a static website.",
    },
    {
      title: "Move Balls",
      imgSrc: "/images/moveballs.png",
      link: "https://move-balls.vercel.app/",
      githubLink: "https://github.com/Bhavisha2801/move-balls",
      techStack: "React.js  | JavaScript | HTML | CSS",
      features: "Input(ball position) | Click Balls",
      description: "Simple state management project using ReactJs, in which balls can be managed using the state.",
    },
    {
      title: "Dadoji",
      imgSrc: "/images/dadoji.png",
      link: "https://www.dadoji.com/",
      githubLink: "",
      techStack: "Wix | Velo",
      features: "Temple | History | Amenities | Gallery | Things to do | Location | Contact us",
      description: "Created using wix editor with velo code for dadoji temple.",
    },
  ];

  const handleClick = (index:any) => {
    setSelectedProject(index === selectedProject ? null : index);
  };

  return (
    <section className="text-white body-font md:px-40 lg:px-40 px-20 mb-20" id="projects">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
              Projects
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-white"></p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <ul>
                {projects.map((project, index) => (
                  <li
                    key={index}
                    className="mb-4 cursor-pointer hover:text-indigo-500 transition-colors duration-300"
                    onClick={() => handleClick(index)}
                  >
                    {project.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4">
            {selectedProject !== null ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <Link href={projects[selectedProject].link} target="_blank">
                  <Image
                    src={projects[selectedProject].imgSrc}
                    height="1000"
                    width="1000"
                    className="h-40 rounded w-full object-contain mb-6"
                    alt={projects[selectedProject].title}
                  />
                </Link>
                <div className="flex justify-between items-center mt-1 mb-2">
                  {projects[selectedProject].githubLink?.length > 0 ? (
                    <Link href={projects[selectedProject].githubLink} target="_blank">
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font flex-start rounded-xl">
                        <FaLink className="mr-1 inline-block" />
                        Visit GitHub
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font flex-start rounded-xl disabled cursor-not-allowed">
                      <FaLink className="mr-1 inline-block" />
                      Visit GitHub
                    </h3>
                  )}
                </div>
                <Link href={projects[selectedProject].link} target="_blank">
                  <h2 className="text-lg text-white font-medium title-font mb-2">
                    {projects[selectedProject].title}
                  </h2>
                  <p className="leading-relaxed text-sm mb-2">
                    <b>Tech Stack:</b> {projects[selectedProject].techStack}
                  </p>
                  <p className="leading-relaxed text-sm mb-2">
                    <b>Features:</b> {projects[selectedProject].features}
                  </p>
                  <p className="leading-relaxed text-sm mb-2">
                    {projects[selectedProject].description}
                  </p>
                </Link>
              </div>
            ) : (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg text-white font-medium title-font mb-2">Select a project</h2>
                <p className="leading-relaxed text-sm mb-2">Click on a project title to view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
