import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

import img2 from "../assets/Screenshot 2025-08-12 150003.png";
import img5 from "../assets/Screenshot 2025-08-12 154459.png";
import img13 from "../assets/img13.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const projects = [
    {
      title: "Freelance Marketplace",
      description:
        "A modern platform where freelancers and clients can connect, post jobs, and complete projects efficiently.",
      features: [
        "Secure Authentication",
        "Real-time Bidding System",
        "Payment Integration",
      ],
      techStack: [
        {
          icon: <FaReact />,
          name: "React",
          bg: "bg-blue-100",
          text: "text-blue-600",
        },
        {
          icon: <FaJsSquare />,
          name: "JavaScript",
          bg: "bg-yellow-100",
          text: "text-yellow-600",
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB",
          bg: "bg-green-100",
          text: "text-green-600",
        },
        {
          icon: <SiExpress />,
          name: "Express.js",
          bg: "bg-gray-200",
          text: "text-gray-700",
        },
        {
          icon: <FaNodeJs />,
          name: "Node.js",
          bg: "bg-green-200",
          text: "text-green-800",
        },
      ],
      image: img2,
      links: {
        live: "https://assingment-10-79094.web.app/",
        client:
          "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-abuhasanxt",
        server:
          "https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-abuhasanxt",
      },
    },
    {
      title: "Food Sharing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ipsam, nihil enim, iusto similique autem rerum voluptatem sunt aliquam tempore in inventore! Voluptates architecto aut tenetur nam magnam quod hic.",
      features: [
        "Secure Authentication",
        "Real-time Bidding System",
        "Payment Integration",
      ],
      techStack: [
        {
          icon: <FaReact />,
          name: "React",
          bg: "bg-blue-100",
          text: "text-blue-600",
        },
        {
          icon: <FaJsSquare />,
          name: "JavaScript",
          bg: "bg-yellow-100",
          text: "text-yellow-600",
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB",
          bg: "bg-green-100",
          text: "text-green-600",
        },
        {
          icon: <SiExpress />,
          name: "Express.js",
          bg: "bg-gray-200",
          text: "text-gray-700",
        },
        {
          icon: <FaNodeJs />,
          name: "Node.js",
          bg: "bg-green-200",
          text: "text-green-800",
        },
      ],
      image: img5,
      links: {
        live: "#",
        client: "#",
        server: "#",
      },
    },
    {
      title: "Blood Donation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor earum aliquid in commodi ratione quod rerum ad, voluptatem dolorum quam blanditiis officiis accusantium quaerat reprehenderit laboriosam repellendus! Sunt, quae in.",
      features: [
        "Secure Authentication",
        "Real-time Bidding System",
        "Payment Integration",
      ],
      techStack: [
        {
          icon: <FaReact />,
          name: "React",
          bg: "bg-blue-100",
          text: "text-blue-600",
        },
        {
          icon: <FaJsSquare />,
          name: "JavaScript",
          bg: "bg-yellow-100",
          text: "text-yellow-600",
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB",
          bg: "bg-green-100",
          text: "text-green-600",
        },
        {
          icon: <SiExpress />,
          name: "Express.js",
          bg: "bg-gray-200",
          text: "text-gray-700",
        },
        {
          icon: <FaNodeJs />,
          name: "Node.js",
          bg: "bg-green-200",
          text: "text-green-800",
        },
      ],
      image: img13,
      links: {
        live: "https://assignment-12-dde71.web.app",
        client:
          "https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-abuhasanxt",
        server:
          "https://github.com/Programming-Hero-Web-Course4/b11a12-server-side-abuhasanxt",
      },
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 relative inline-block mb-12"
        data-aos="fade-down"
      >
        Projects
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded bg-teal-500"></span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
            data-aos="fade-up"
          >
            <img
              src={project.image}
              alt={`${project.title} Screenshot`}
              className="h-68 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>

              <ul className="mt-4 space-y-2 text-gray-700">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map(({ icon, name, bg, text }, i) => (
                  <span
                    key={i}
                    title={name}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${bg} ${text}`}
                  >
                    {icon} {name}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
                >
                  Live <FaExternalLinkAlt />
                </a>
                <a
                  href={project.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-gray-900 text-white rounded-lg shadow hover:scale-105 transition-transform"
                >
                  Client Code <FaGithub />
                </a>
                <a
                  href={project.links.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-gray-900 text-white rounded-lg shadow hover:scale-105 transition-transform"
                >
                  Server Code <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
