import React, { useState } from 'react';
import { Mail, MapPin, Clock, Linkedin, Github, ExternalLink, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual EmailJS integration
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', project_type: '', budget: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-primary-500 dark:bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-slide-up">
            <CheckCircle className="w-20 h-20 text-creative-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Message Sent Successfully!</h2>
            <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </p>
            <div className="text-6xl">🎉</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-primary-500 dark:bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 text-8xl font-black text-creative-500 rotate-12">
          LETS
        </div>
        <div className="absolute bottom-1/4 right-10 text-8xl font-black text-creative-500 -rotate-12">
          CREATE
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-creative-500"></div>
            <span className="text-creative-500 font-medium tracking-wider uppercase text-sm">Get In Touch</span>
            <div className="w-12 h-px bg-creative-500"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            LET'S CREATE MAGIC
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and 
            create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg text-white placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:border-creative-500 focus:bg-white/30 dark:focus:bg-gray-700/70 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg text-white placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:border-creative-500 focus:bg-white/30 dark:focus:bg-gray-700/70 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="project_type" className="block text-sm font-medium mb-2">
                  Project Type *
                </label>
                <select
                  id="project_type"
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg text-white focus:outline-none focus:border-creative-500 focus:bg-white/30 dark:focus:bg-gray-700/70 transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="creative-development">Creative Development</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg text-white focus:outline-none focus:border-creative-500 focus:bg-white/30 dark:focus:bg-gray-700/70 transition-all"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-30k">$15,000 - $30,000</option>
                  <option value="30k-plus">$30,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg text-white placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:border-creative-500 focus:bg-white/30 dark:focus:bg-gray-700/70 transition-all resize-none"
                  placeholder="Tell me about your project, goals, and timeline..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-creative-gradient rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-creative-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@bristisamanta.com" className="text-creative-500 hover:text-creative-400 transition-colors">
                      hello@bristisamanta.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-creative-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300 dark:text-gray-400">Available Worldwide (Remote)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-creative-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-gray-300 dark:text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/bristi-samanta-11a125315/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/10 dark:bg-gray-700/30 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-300 dark:text-gray-400">Professional Network</p>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white/10 dark:bg-gray-700/30 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-gray-300" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-300 dark:text-gray-400">Code Portfolio</p>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Current Availability</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="font-medium text-green-400">Available for new projects</p>
                </div>
                <p className="text-gray-300 dark:text-gray-400 text-sm">
                  Currently accepting projects for Q1 2024. Book early to secure your spot!
                </p>
                <div className="pt-4 border-t border-white/20 dark:border-gray-600/30">
                  <p className="text-sm text-gray-300 dark:text-gray-400 mb-2">Next available start date:</p>
                  <p className="font-semibold text-creative-500">February 1, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;