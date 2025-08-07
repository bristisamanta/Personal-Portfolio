import React from 'react';
import { Palette, Code, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: "Design Mastery",
    icon: Palette,
    color: "pink",
    skills: [
      { name: "UI/UX Design", proficiency: 95 },
      { name: "Visual Identity", proficiency: 90 },
      { name: "Prototyping", proficiency: 85 },
      { name: "Design Systems", proficiency: 88 }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: Code,
    color: "blue",
    skills: [
      { name: "React.js", proficiency: 92 },
      { name: "TypeScript", proficiency: 88 },
      { name: "Next.js", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 90 },
      { name: "Animation", proficiency: 87 }
    ]
  },
  {
    title: "Creative Tools",
    icon: Wrench,
    color: "purple",
    skills: [
      { name: "Figma", proficiency: 95 },
      { name: "Adobe Suite", proficiency: 85 },
      { name: "Blender", proficiency: 75 },
      { name: "After Effects", proficiency: 80 }
    ]
  },
  {
    title: "Development Stack",
    icon: Lightbulb,
    color: "green",
    skills: [
      { name: "Node.js", proficiency: 80 },
      { name: "Python", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 82 },
      { name: "Git", proficiency: 95 },
      { name: "Deployment", proficiency: 88 }
    ]
  }
];

const colorClasses = {
  pink: {
    bg: "bg-creative-500",
    text: "text-creative-500",
    border: "border-creative-500",
    gradient: "from-creative-500 to-creative-600"
  },
  blue: {
    bg: "bg-blue-500",
    text: "text-blue-500", 
    border: "border-blue-500",
    gradient: "from-blue-500 to-blue-600"
  },
  purple: {
    bg: "bg-purple-500",
    text: "text-purple-500",
    border: "border-purple-500", 
    gradient: "from-purple-500 to-purple-600"
  },
  green: {
    bg: "bg-green-500",
    text: "text-green-500",
    border: "border-green-500",
    gradient: "from-green-500 to-green-600"
  }
};

const SkillCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  const colors = colorClasses[category.color as keyof typeof colorClasses];
  
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Category Header */}
      <div className="text-center mb-8">
        <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${colors.gradient} group-hover:scale-110 transition-transform duration-300`}>
          <category.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-primary-500">{category.title}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-6">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className={`text-sm font-semibold ${colors.text}`}>{skill.proficiency}%</span>
            </div>
            <div className="relative">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-creative-500"></div>
            <span className="text-creative-500 font-medium tracking-wider uppercase text-sm">Skills & Expertise</span>
            <div className="w-12 h-px bg-creative-500"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-primary-500 mb-6">
            CREATIVE TOOLKIT
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive arsenal of design and development skills, honed through 
            years of creating digital experiences that inspire and perform.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-500 dark:text-white mb-4">
              Currently Exploring
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Always learning and expanding my creative and technical horizons
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-creative-500/10 to-purple-500/10 dark:from-creative-500/20 dark:to-purple-500/20 rounded-xl">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="font-bold text-primary-500 dark:text-white mb-2">AI-Assisted Design</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Exploring how AI can enhance creative workflows and design processes
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-teal-500/10 dark:from-blue-500/20 dark:to-teal-500/20 rounded-xl">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="font-bold text-primary-500 dark:text-white mb-2">Web3 Interfaces</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Designing user-friendly interfaces for blockchain and decentralized apps
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 rounded-xl">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="font-bold text-primary-500 dark:text-white mb-2">3D Experiences</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Creating immersive 3D web experiences with Three.js and WebGL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;