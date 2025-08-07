import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-4 h-4 bg-creative-500/30 dark:bg-creative-400/40 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300';
    cursor.style.top = '0px';
    cursor.style.left = '0px';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = (e.clientX - 8) + 'px';
      cursor.style.top = (e.clientY - 8) + 'px';
    };

    const scaleCursor = () => {
      cursor.style.transform = 'scale(3)';
    };

    const resetCursor = () => {
      cursor.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', moveCursor);
    
    // Scale cursor on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', scaleCursor);
      el.addEventListener('mouseleave', resetCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', scaleCursor);
        el.removeEventListener('mouseleave', resetCursor);
      });
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  useEffect(() => {
    // Smooth scroll behavior for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title
    document.title = 'Bristi Samanta - Creative Developer & UI/UX Designer';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Creative Developer & UI/UX Designer specializing in React.js, modern web development, and user-centered design. Available for freelance projects.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;