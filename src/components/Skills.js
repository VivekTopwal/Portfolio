import React from "react";
import FadeInSection from "./FadeInSection";


import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,

 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "REST API", icon: null }, 
  { name: "Responsive Design", icon: null }, 
  { name: "Problem Solving", icon: null }, 
 
];

const Skills = () => {
  return (
    <FadeInSection>
      <section
        id="skills"
        className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
      
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000 top-1/4 left-1/4"></div>
          <div className="absolute w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000 bottom-1/4 right-1/4"></div>
        </div>

        <div className="relative z-10">
         
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-lg">
            My <span className="text-blue-600">Skills</span>
          </h2>

         
          <div className="flex flex-wrap justify-center max-w-5xl mx-auto gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white text-blue-800 px-6 py-3 rounded-xl text-lg font-semibold
                           shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
                           border border-blue-100 flex items-center justify-center gap-2
                           transform group relative overflow-hidden"
              >
             
                <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></span>
              
                {skill.icon && <span className="text-xl relative z-10">{skill.icon}</span>}
            
                <span className="relative z-10">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Skills;