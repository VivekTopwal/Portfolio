import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-10 mt-20 shadow-2xl overflow-hidden">
     
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-blue-400 to-pink-400 opacity-70 rounded-t-lg"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left relative z-10">
       
        <p className="text-base font-light mb-4 md:mb-0 opacity-90 tracking-wide">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-pink-300">Vivek Topwal</span>. All rights reserved.
        </p>

        <div className="flex gap-8">
          <a
            href="mailto:topwalvivek@gmail.com"
            className="group flex items-center text-white hover:text-pink-300 transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <span className="p-2 rounded-full bg-white/10 group-hover:bg-pink-400 group-hover:text-white transition-all mr-2 shadow-md">
              <Mail size={22} className="group-hover:animate-bounce" />
            </span>
            <span className="hidden md:inline">Email</span>
          </a>
          <a
            href="https://github.com/VivekTopwal"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center text-white hover:text-pink-300 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <span className="p-2 rounded-full bg-white/10 group-hover:bg-pink-400 group-hover:text-white transition-all mr-2 shadow-md">
              <Github size={22} className="group-hover:animate-bounce" />
            </span>
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/vivek-t-65737736a"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center text-white hover:text-pink-300 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <span className="p-2 rounded-full bg-white/10 group-hover:bg-pink-400 group-hover:text-white transition-all mr-2 shadow-md">
              <Linkedin size={22} className="group-hover:animate-bounce" />
            </span>
            <span className="hidden md:inline">LinkedIn</span>
          </a>
        </div>
      </div>

      
      <div className="absolute left-[-60px] bottom-[-60px] w-48 h-48 bg-pink-300 opacity-20 rounded-full blur-2xl z-0"></div>
      <div className="absolute right-[-80px] top-[-40px] w-56 h-56 bg-blue-300 opacity-20 rounded-full blur-2xl z-0"></div>
    </footer>
  );
};

export default Footer;
