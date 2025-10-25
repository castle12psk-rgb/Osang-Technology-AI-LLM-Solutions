import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className={`relative rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 ${
          isScrolled 
          ? 'bg-navy/70 backdrop-blur-xl shadow-lg border border-white/10' 
          : 'bg-white/10 backdrop-blur-xl border border-white/20'
        }`}>
          <div className="flex items-center">
            <h1 className="text-xl font-bold tracking-wider">
              OSANG <span className="text-ai-blue">TECH</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-base font-medium text-silver hover:text-white transition-colors"
              >
                {link.title}
              </button>
            ))}
          </nav>
          <button onClick={() => scrollToSection('contact')} className="hidden md:block bg-gradient-to-r from-ai-blue to-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-ai-blue/40 transition-all">
            문의하기
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className={`md:hidden mt-2 rounded-lg p-4 transition-colors duration-300 ${
            isScrolled ? 'bg-navy/70 backdrop-blur-xl shadow-md' : 'bg-navy/70 backdrop-blur-xl'
          }`}>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-base text-left text-silver hover:text-white transition-colors"
                >
                  {link.title}
                </button>
              ))}
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-ai-blue to-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:shadow-lg hover:shadow-ai-blue/40 transition-all">
                문의하기
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;