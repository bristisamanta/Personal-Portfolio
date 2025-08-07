import React from 'react';
import { Sparkles, Heart, Coffee, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-900 dark:bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-2xl font-bold mb-6 hover:text-creative-500 transition-colors group"
            >
              <Sparkles className="w-7 h-7 text-creative-500 group-hover:rotate-180 transition-transform duration-500" />
              <span>Bristi Samanta</span>
            </button>
            
            <p className="text-gray-300 dark:text-gray-400 text-lg mb-6 max-w-md leading-relaxed">
              Creative Developer & UI/UX Designer passionate about crafting 
              digital experiences where creativity meets technical excellence.
            </p>
            
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/bristi-samanta-11a125315/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-creative-500 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-creative-500 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:hello@bristisamanta.com"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-creative-500 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Me', href: '#about' },
                { name: 'My Work', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Services', href: '#services' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-creative-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Frontend Development',
                'UI/UX Design',
                'Creative Development',
                'Design Systems',
                'Consultation'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 dark:text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-gray-700/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
              <span>© {currentYear} Bristi Samanta. Made with</span>
              <Heart className="w-4 h-4 text-creative-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-yellow-500" />
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400 dark:text-gray-500">
              <span>Available for exciting projects</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 dark:text-gray-600 font-mono">
            // Crafted with love, coffee, and countless pixels ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;