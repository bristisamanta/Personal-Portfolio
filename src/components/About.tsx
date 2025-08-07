import React from 'react';
import { Heart, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Design", icon: Palette, items: ["Figma", "Adobe Creative Suite", "Sketch", "Prototyping"] },
    { category: "Frontend", icon: Code, items: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", icon: Zap, items: ["Node.js", "Python", "PostgreSQL", "API Design"] },
    { category: "Creative", icon: Heart, items: ["Framer Motion", "GSAP", "Lottie", "Three.js"] }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-creative-500"></div>
            <span className="text-creative-500 font-medium tracking-wider uppercase text-sm">About Me</span>
            <div className="w-12 h-px bg-creative-500"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-primary-500 mb-6">
            CREATOR & ENGINEER
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Story Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary-500 dark:text-white">
                From Design Enthusiast to Full-Stack Creator
              </h3>
              
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm passionate about bridging the gap between beautiful design and 
                  functional code. I believe the best digital experiences happen when 
                  creativity meets technical excellence.
                </p>
                
                <p>
                  With a background in both design and development, I bring a unique 
                  perspective to every project. I think in pixels and code in poetry, 
                  crafting interfaces that are not just visually stunning, but also 
                  intuitive and performant.
                </p>
                
                <p>
                  Currently exploring AI-assisted design tools, Web3 interfaces, 
                  and immersive 3D experiences while staying grounded in 
                  user-centered design principles.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-xl font-semibold text-primary-500 dark:text-white mb-4">
                Ready to create something amazing together?
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you're looking for someone who thinks in pixels and codes in poetry, 
                let's collaborate!
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-creative-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Creative Visual */}
          <div className="relative">
            {/* Animated text background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 overflow-hidden">
              <div className="text-8xl font-black rotate-12 animate-pulse-slow">
                CREATIVITY<br/>& CODE<br/>CREATIVITY<br/>& CODE
              </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-creative-gradient rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-primary-500 dark:text-white">My Creative Arsenal</h4>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={skill.category} className="text-center group">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-creative-500 transition-colors duration-300">
                      <skill.icon className="w-8 h-8 text-creative-500 group-hover:text-white" />
                    </div>
                    <h5 className="font-semibold text-primary-500 dark:text-white mb-2">{skill.category}</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {skill.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-creative-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "25+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-black text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;