import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovation Labs",
      location: "Remote",
      period: "2023 - Present",
      description: "Leading frontend development initiatives and creating scalable design systems.",
      achievements: [
        "Built responsive web applications using React.js and TypeScript",
        "Implemented design systems that improved development efficiency by 40%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "UI/UX Designer & Developer",
      company: "Creative Digital Agency",
      location: "New York, NY",
      period: "2022 - 2023",
      description: "Designed and developed user interfaces for web and mobile applications.",
      achievements: [
        "Created user-centered designs that increased user engagement by 35%",
        "Collaborated with cross-functional teams to deliver pixel-perfect implementations",
        "Conducted user research and usability testing"
      ],
      technologies: ["Figma", "Adobe XD", "React", "SCSS"]
    },
    {
      title: "Creative Developer",
      company: "Freelance",
      location: "Remote",
      period: "2021 - 2022",
      description: "Specialized in creative web experiences and interactive animations.",
      achievements: [
        "Developed interactive websites with advanced animations using GSAP",
        "Built custom WordPress themes for creative agencies",
        "Delivered projects for 15+ clients with 100% satisfaction rate"
      ],
      technologies: ["JavaScript", "GSAP", "WordPress", "Three.js"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Canvas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through the intersection of creativity and technology
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-pink-500/10 to-purple-600/10 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium border border-pink-200 dark:border-pink-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;