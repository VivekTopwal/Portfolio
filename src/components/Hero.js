import React from "react";
import { Download, ArrowRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

const Hero = () => {
  return (
    <FadeInSection>
    
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 via-indigo-100 to-pink-200 overflow-hidden"
      >
 
        <div className="absolute -top-16 left-0 w-72 h-72 bg-gradient-to-tr from-blue-400 via-blue-200 to-transparent rounded-full opacity-40 blur-2xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-400 via-pink-200 to-transparent rounded-full opacity-40 blur-2xl animate-pulse delay-200" />

    
        <div className="relative z-10 flex flex-col items-center bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl px-8 py-12 mt-10 max-w-2xl border border-white/30">
       
          <img
            src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
            alt="Vivek Topwal"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-6 object-cover animate-fadeIn"
            style={{ boxShadow: "0 4px 40px 0 rgba(59,130,246,0.2)" }}
          />

    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 animate-gradient-x">
  <span className="bg-gradient-to-r from-blue-700 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
    Hi, I'm Vivek Topwal
  </span>{" "}
<span className="animate-waving-hand text-4xl md:text-5xl align-baseline ml-2 relative top-[1px]">👋</span>
</h1>




          <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">
            Full Stack Developer
          </p>
          <p className="text-md md:text-lg text-gray-500 max-w-xl mb-8">
            I create beautiful, performant web apps with React, Node.js, and MongoDB. Passionate about UI/UX and modern web technologies.
          </p>

         
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-7 py-3 rounded-xl text-lg font-semibold shadow-lg hover:from-indigo-700 hover:to-blue-700 hover:scale-105 transition-all duration-300 gap-2"
            >
              <ArrowRight size={20} /> View My Work
            </a>
            <a
              href="/resume (4).pdf"
              download
              className="inline-flex items-center justify-center px-7 py-3 bg-white/80 text-blue-700 font-semibold rounded-xl border border-blue-300 shadow hover:bg-blue-50 hover:scale-105 transition-all duration-300 gap-2"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
      </section>

    
    </FadeInSection>
  );
};

export default Hero;
