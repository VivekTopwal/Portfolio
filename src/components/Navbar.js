import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
        
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Portfolio
            </h1>
          </div>

    
          <ul className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
            </li>
          </ul>

         
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center space-y-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
            {['About', 'Projects', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium text-center hover:shadow-lg transition-all duration-300 transform ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;