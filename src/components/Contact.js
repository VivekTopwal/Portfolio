import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import FadeInSection from "./FadeInSection";

const Contact = () => {
  return (
    <FadeInSection>
      <section
        id="contact"
        className="relative py-20 px-6 md:px-12 min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #c3e0f7 0%, #f7d6e0 100%)",
        }}
      >
        
        <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-pink-200 opacity-30 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-4 drop-shadow-lg">
            Contact Me
          </h2>
          <div className="flex justify-center mb-10">
            <span className="inline-block w-24 h-1 bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 rounded-full"></span>
          </div>

          <form
            action="https://formspree.io/f/xnnvpakb"
            method="POST"
            className="bg-white/60 backdrop-blur-lg max-w-xl mx-auto p-8 rounded-2xl shadow-2xl border border-blue-100 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="input w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 hover:from-blue-600 hover:to-pink-500 transition-all duration-200"
            >
              Send Message
            </button>
          </form>

          <div className="flex justify-center gap-8 mt-10">
            <a
              href="mailto:topwalvivek@gmail.com"
             
              target="_blank"
              rel="noreferrer"
              className="group"
              aria-label="Email"
            >
              <Mail className="w-8 h-8 text-blue-600 group-hover:text-pink-400 transition-colors duration-200 group-hover:scale-110" />
            </a>
            <a
              href="https://github.com/VivekTopwal"
              target="_blank"
              rel="noreferrer"
              className="group"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 text-blue-600 group-hover:text-pink-400 transition-colors duration-200 group-hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com/in/vivek-t-65737736a"
              target="_blank"
              rel="noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-blue-600 group-hover:text-pink-400 transition-colors duration-200 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Contact;
