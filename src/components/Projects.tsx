import React from 'react';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "EcoCommerce Platform",
    subtitle: "Sustainable E-commerce Solution",
    category: "Full-Stack Web App",
    year: "2024",
    duration: "8 weeks",
    role: "Lead Developer & Designer",
    challenge: "Creating an eco-friendly e-commerce platform that makes sustainable shopping accessible and engaging",
    solution: "Developed a React-based platform with AI-powered sustainability scoring and carbon footprint tracking",
    result: "Increased sustainable product discovery by 300% and improved user engagement by 250%",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Figma"],
    links: {
      live: "#",
      github: "#",
      case_study: "#"
    },
    image: "",
    featured: true
  },
  {
    id: 2,
    title: "HealthTech Dashboard",
    subtitle: "Medical Data Visualization",
    category: "Healthcare SaaS",
    year: "2024",
    duration: "6 weeks",
    role: "Frontend Developer",
    challenge: "Complex medical data needed intuitive visualization for healthcare professionals",
    solution: "Built interactive dashboards with real-time data updates and accessibility compliance",
    result: "Reduced data analysis time by 60% and improved patient care efficiency",
    techStack: ["React", "D3.js", "TypeScript", "Chart.js", "Material-UI"],
    links: {
      live: "#",
      github: "#",
      case_study: "#"
    },
    image: "",
    featured: true
  },
  {
    id: 3,
    title: "Creative Portfolio System",
    subtitle: "Designer Showcase Platform",
    category: "Creative Platform",
    year: "2023",
    duration: "4 weeks",
    role: "Full-Stack Developer",
    challenge: "Designers needed a platform to showcase work with smooth animations and fast loading",
    solution: "Created a custom CMS with optimized media handling and animation framework",
    result: "Helped 50+ designers increase client inquiries by 180%",
    techStack: ["Next.js", "Sanity CMS", "Framer Motion", "Tailwind CSS"],
    links: {
      live: "#",
      github: "#",
      case_study: "#"
    },
    image: "",
    featured: false
  },
  {
    id: 4,
    title: "FinTech Mobile App",
    subtitle: "Personal Finance Management",
    category: "Mobile Application",
    year: "2023",
    duration: "10 weeks",
    role: "UI/UX Designer",
    challenge: "Making complex financial data accessible and actionable on mobile devices",
    solution: "Designed intuitive interfaces with progressive disclosure and smart categorization",
    result: "Achieved 4.8/5 app store rating with 95% user retention rate",
    techStack: ["Figma", "Principle", "After Effects", "React Native"],
    links: {
      live: "#",
      case_study: "#"
    },
    image: "",
    featured: false
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <div className="group relative w-full">
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
        {/* Project Content */}
        <div className="p-6">
          {/* Project Category and Featured Badges */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-creative-500 text-white text-sm font-medium rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-creative-500 dark:text-creative-400 text-sm font-medium">{project.year} • {project.duration}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{project.role}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-primary-500 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.subtitle}</p>
          
          {project.featured && (
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-primary-500 dark:text-white mb-1">Challenge:</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{project.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-500 dark:text-white mb-1">Solution:</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{project.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-500 dark:text-white mb-1">Result:</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{project.result}</p>
              </div>
            </div>
          )}
          
          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project Links */}
          <div className="flex items-center gap-4">
            {project.links.live && (
              <a 
                href={project.links.live}
                className="flex items-center gap-2 text-creative-500 dark:text-creative-400 hover:text-creative-600 dark:hover:text-creative-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-medium">Live Demo</span>
              </a>
            )}
            {project.links.github && (
              <a 
                href={project.links.github}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium">Code</span>
              </a>
            )}
            {project.links.case_study && (
              <a 
                href={project.links.case_study}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                <span className="font-medium">Case Study</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-creative-500"></div>
            <span className="text-creative-500 font-medium tracking-wider uppercase text-sm">Featured Work</span>
            <div className="w-12 h-px bg-creative-500"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-primary-500 mb-6">
            DIGITAL ARTISTRY
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcase of projects where creative vision meets technical excellence. 
            Each piece tells a story of innovation, problem-solving, and user-centered design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-8 bg-gradient-to-r from-creative-500/10 to-purple-500/10 dark:from-creative-500/20 dark:to-purple-500/20 rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold text-primary-500 dark:text-white mb-2">
                Want to see more work?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Check out my complete portfolio and detailed case studies
              </p>
              <button className="px-6 py-3 bg-creative-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                View Full Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;