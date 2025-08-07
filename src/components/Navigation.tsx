import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary-500/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white font-bold text-xl hover:text-creative-500 transition-colors"
            >
              <Sparkles className="w-6 h-6 text-creative-500" />
              <span>Bristi</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-creative-500 font-medium transition-colors relative group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-creative-500 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
              <DarkModeToggle />
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-2 bg-creative-gradient text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <DarkModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-primary-500/98 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white hover:text-creative-500 font-medium py-2 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-4 px-6 py-3 bg-creative-gradient text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary-500/20 z-50">
        <div 
          className="h-full bg-creative-gradient transition-all duration-150 ease-out"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        ></div>
      </div>
    </>
  );
};

export default Navigation;