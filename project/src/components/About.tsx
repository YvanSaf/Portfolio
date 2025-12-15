import React, { useEffect, useRef, useState } from 'react';
import { User, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A dedicated junior developer with a passion for creating efficient solutions 
              and maintaining robust systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Developer</h3>
              <p className="text-gray-300">
                Building scalable applications using modern frameworks and best practices. 
                Experienced in full-stack development with React, Python, and more.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Administrator</h3>
              <p className="text-gray-300">
                Managing and configuring systems, networks, and servers. Skilled in 
                DevOps practices, containerization, and infrastructure management.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-600/30 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Problem Solver</h3>
              <p className="text-gray-300">
                Analytical mindset with expertise in testing, debugging, and optimizing 
                systems. Experienced with various testing frameworks and methodologies.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">My Journey</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  As a junior software developer and system administrator, I'm passionate about 
                  bridging the gap between development and operations. My expertise spans across 
                  multiple programming languages, frameworks, and infrastructure technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in continuous learning and staying updated with the latest industry 
                  trends. My goal is to create efficient, scalable solutions while maintaining 
                  high code quality and system reliability.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">System Administration</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-300">DevOps & CI/CD</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Testing & Quality Assurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;