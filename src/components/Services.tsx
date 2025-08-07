import React from 'react';
import { Code, Palette, Zap, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "React.js applications with pixel-perfect design implementation and optimal performance",
    icon: Code,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    deliverables: [
      "Responsive Web Applications",
      "Component Libraries", 
      "Performance Optimization",
      "Cross-browser Compatibility",
      "SEO Implementation"
    ],
    timeline: "2-8 weeks",
    startingPrice: "$3,000",
    color: "blue"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centered design solutions that drive engagement and conversion",
    icon: Palette,
    technologies: ["Figma", "Adobe Creative Suite", "Principle", "InVision", "Miro"],
    deliverables: [
      "Design Systems",
      "Interactive Prototypes",
      "User Flow Diagrams",
      "Visual Identity",
      "Usability Testing"
    ],
    timeline: "1-4 weeks", 
    startingPrice: "$2,000",
    color: "pink"
  },
  {
    id: 3,
    title: "Creative Development",
    description: "Interactive experiences with advanced animations and creative interactions",
    icon: Zap,
    technologies: ["GSAP", "Three.js", "WebGL", "Canvas API", "Lottie"],
    deliverables: [
      "Interactive Websites",
      "3D Web Experiences",
      "Creative Animations",
      "Custom Interactions",
      "Performance Optimization"
    ],
    timeline: "3-10 weeks",
    startingPrice: "$4,000", 
    color: "purple"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
    text: "text-blue-500",
    border: "border-blue-500"
  },
  pink: {
    bg: "bg-creative-500", 
    gradient: "from-creative-500 to-creative-600",
    text: "text-creative-500",
    border: "border-creative-500"
  },
  purple: {
    bg: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600", 
    text: "text-purple-500",
    border: "border-purple-500"
  }
};

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const colors = colorClasses[service.color as keyof typeof colorClasses];
  
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Service Header */}
      <div className="mb-8">
        <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${colors.gradient} group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-primary-500">{service.title}</h3>
          <div className={`text-2xl font-bold ${colors.text}`}>{service.startingPrice}</div>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{service.timeline}</span>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h4 className="font-semibold text-primary-500 mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="mb-8">
        <h4 className="font-semibold text-primary-500 mb-4">What You'll Get:</h4>
        <ul className="space-y-3">
          {service.deliverables.map((deliverable) => (
            <li key={deliverable} className="flex items-center gap-3">
              <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
              <span className="text-gray-600">{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className={`w-full py-4 px-6 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
      >
        <span>Get Started</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-creative-500"></div>
            <span className="text-creative-500 font-medium tracking-wider uppercase text-sm">What I Offer</span>
            <div className="w-12 h-px bg-creative-500"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-primary-500 mb-6">
            WHAT I CRAFT
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive creative and technical services designed to bring your 
            digital vision to life with exceptional quality and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-creative-500/5 to-purple-500/5 dark:from-creative-500/10 dark:to-purple-500/10 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-500 dark:text-white mb-4">My Creative Process</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures every project delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your goals, audience, and requirements through detailed consultation"
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Creating a comprehensive plan with timelines, deliverables, and success metrics"
              },
              {
                step: "03",
                title: "Creation", 
                description: "Bringing ideas to life with iterative design and development cycles"
              },
              {
                step: "04",
                title: "Launch",
                description: "Testing, optimization, and successful delivery of your project"
              }
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-creative-gradient rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h4 className="font-bold text-primary-500 dark:text-white mb-2">{phase.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 p-8 bg-primary-500 dark:bg-gray-800 text-white rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to start your project?
              </h3>
              <p className="text-gray-300 dark:text-gray-400 mb-4">
                Let's discuss your needs and create something amazing together
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-creative-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;