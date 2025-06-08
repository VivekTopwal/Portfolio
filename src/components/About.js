import React from "react";
import FadeInSection from "./FadeInSection"; 

const About = () => {
  return (
    <FadeInSection>
      <section id="about" className="py-16 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-indigo-100 text-center relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-48 h-48 bg-blue-300 rounded-full -top-12 -left-12 opacity-20 animate-blob"></div>
          <div className="absolute w-64 h-64 bg-purple-300 rounded-full -bottom-16 -right-16 opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute w-56 h-56 bg-pink-300 rounded-full top-1/4 left-1/4 opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10"> 
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 drop-shadow-md">
            About <span className="text-indigo-600">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          

            
            <div className="md:w-2/3 text-lg md:text-xl text-gray-700 leading-relaxed text-left">
              <p className="mb-4">
                Hello! I'm a passionate and dedicated <strong className="font-extrabold text-indigo-600">Full Stack Developer</strong> with a knack for crafting dynamic and efficient web applications. My journey in development has equipped me with robust skills across the entire stack.
              </p>
              <p className="mb-4">
                I specialize in building end-to-end solutions using modern technologies like <strong className="font-extrabold text-blue-600">React</strong> for engaging front-end experiences, and a powerful back-end combination of <strong className="font-extrabold text-green-600">Node.js, Express.js, and MongoDB</strong> to handle data and logic seamlessly.
              </p>
              <p>
                What truly drives me is the challenge of <strong className="font-extrabold text-purple-600">solving complex problems</strong>, turning innovative ideas into tangible products that genuinely help people, and constantly refining my craft. I'm always eager to learn new technologies and collaborate with a forward-thinking team to build something amazing.
              </p>
            </div>
          </div>
        </div>

 <div className="text-center mt-16">
            <blockquote className="text-xl md:text-2xl font-light text-gray-600 italic">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <p className="text-gray-500 mt-2">- Cory House</p>
          </div>
        

      </section>
    </FadeInSection>
  );
};

export default About;