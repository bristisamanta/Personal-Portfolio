import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code, Palette } from 'lucide-react';

const RotatingRoles = () => {
  const roles = [
    "Creative Developer",
    "UI/UX Designer", 
    "Frontend Engineer",
    "Digital Artist"
  ];

  return (
    <div className="text-3xl md:text-5xl mt-8 h-20 overflow-hidden">
      <motion.div
        animate={{ y: [0, -80, -160, -240, 0] }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
        className="space-y-5"
      >
        {roles.map((role, index) => (
          <div key={index} className="h-20 flex items-center font-light text-gray-300">
            {role}
          </div>
        ))}
        <div className="h-20 flex items-center font-light text-gray-300">
          {roles[0]}
        </div>
      </motion.div>
    </div>
  );
};

const CreativeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating creative elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 opacity-10"
      >
        <Code size={60} className="text-pink-500" />
      </motion.div>
      
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 100, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-3/4 right-1/4 opacity-10"
      >
        <Palette size={80} className="text-purple-500" />
      </motion.div>

      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 opacity-10"
      >
        <Sparkles size={40} className="text-pink-400" />
      </motion.div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Creative Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Bristi
            </span>
          </h1>
        </motion.div>
        
        {/* Dynamic Role Display */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <RotatingRoles />
        </motion.div>

        {/* Creative Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 mt-8 max-w-2xl leading-relaxed"
        >
          I craft digital experiences where{' '}
          <span className="text-pink-400 font-semibold">creativity meets code</span>,
          turning complex ideas into beautiful, intuitive interfaces.
        </motion.p>
        
        {/* Creative CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 107, 157, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            Explore My Universe
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-pink-500/50 rounded-full text-pink-400 font-semibold text-lg hover:bg-pink-500/10 transition-all duration-300"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Creative Background Elements */}
      <CreativeBackground />
    </section>
  );
};

export default Hero;