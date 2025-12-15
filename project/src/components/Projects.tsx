import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Database, Globe, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLSection>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with Django REST Framework backend and React frontend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["Python", "Django REST", "React.js", "PostgreSQL", "Docker"],
      icon: Globe,
      color: "blue",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Network Monitoring Dashboard",
      description: "Real-time network monitoring system using Nagios integration. Built with React for the frontend and Python backend, featuring alert management and performance metrics visualization.",
      technologies: ["Python", "React.js", "Nagios", "WebSocket", "Chart.js"],
      icon: Database,
      color: "purple",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Task Management Mobile App",
      description: "Android application for project management with offline capabilities. Implements clean architecture patterns and integrates with REST APIs for synchronization.",
      technologies: ["Android Studio", "Java", "SQLite", "REST API", "Material Design"],
      icon: Smartphone,
      color: "teal",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Automated deployment pipeline for microservices architecture. Includes containerization, testing automation, and deployment orchestration using modern DevOps practices.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "Python", "Bash"],
      icon: Code,
      color: "orange",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 border-blue-500/50 hover:border-blue-400',
      purple: 'from-purple-500 to-purple-600 border-purple-500/50 hover:border-purple-400',
      teal: 'from-teal-500 to-teal-600 border-teal-500/50 hover:border-teal-400',
      orange: 'from-orange-500 to-orange-600 border-orange-500/50 hover:border-orange-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of applications and systems I've built, demonstrating my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="group bg-gray-700/30 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${getColorClasses(project.color).split(' ')[0]} ${getColorClasses(project.color).split(' ')[1]} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-600/50 text-gray-300 text-sm rounded-full border border-gray-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600/50 hover:bg-gray-600/70 text-gray-300 hover:text-white rounded-lg transition-all duration-200 border border-gray-500/30 hover:border-gray-400/50">
                        <Github size={16} />
                        <span>Code</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-200 border border-blue-500/30 hover:border-blue-400/50">
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
              <h3 className="text-2xl font-bold mb-4 text-white">More Projects Coming Soon</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                I'm constantly working on new projects and experimenting with emerging technologies. 
                Check back regularly for updates on my latest work.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;