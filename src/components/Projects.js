import React from "react";
import FadeInSection from "./FadeInSection"; 
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; 

const projects = [
  {
    title: "Fitness Tracker",
    description:
      "A full-stack fitness tracking app with workouts, meal logging, analytics, and AI-generated personalized plans. Built to empower users on their health journey.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Gemini API"],
    link: "https://fitness-tracker-frontend-alpha.vercel.app/", 
    githubfrontend: "https://github.com/VivekTopwal/fitness-tracker-frontend", 
    githubbackend: "https://github.com/VivekTopwal/fitness-tracker", 
  },
  {
    title: "Real-time Chat Application",
    description:
      "A feature-rich real-time chat application built with the MERN stack and Socket.io. It enables instant messaging, private chats, and secure file sharing, offering a seamless and interactive user experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
    link: "https://chat-app-frontend-mu-nine.vercel.app/",
    githubfrontend: "https://github.com/VivekTopwal/chat-app-frontend",
    githubbackend: "https://github.com/VivekTopwal/chat-app-backend", 
  },

 
  {
    title: "Portfolio Website",
    description:
      "This very portfolio! A clean, modern, and responsive personal portfolio to showcase my skills and projects. Built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://your-portfolio-link.com", 
    githubfrontend: "https://github.com/your-username/your-portfolio-repo",
  },
];

const Projects = () => {
  return (
    <FadeInSection>
      <section id="projects" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 px-6 md:px-12 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 top-1/2 left-1/4"></div>
          <div className="absolute w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000 bottom-1/4 right-1/4"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-lg">
            My <span className="text-indigo-600">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between
                           hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out
                           border border-gray-100 transform cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-bold text-indigo-700 mb-3 leading-tight">{project.title}</h3>
                  <p className="text-gray-700 mb-4 text-base leading-relaxed">{project.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium
                                   border border-indigo-200 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold
                                   hover:underline transition-colors duration-200 group"
                      >
                        <FaExternalLinkAlt className="text-lg group-hover:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    )}
                    {project.githubfrontend && (
                      <a
                        href={project.githubfrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold
                                   hover:underline transition-colors duration-200 group"
                      >
                        <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                        Frontend
                      </a>
                    )}
                    {project.githubbackend && (
                      <a
                        href={project.githubbackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold
                                   hover:underline transition-colors duration-200 group"
                      >
                        <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                        Backend
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Projects;