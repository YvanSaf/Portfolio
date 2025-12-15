import React, { useEffect, useRef, useState } from 'react';
import { Code2, Server, TestTube, Cog, Users, Database } from 'lucide-react';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      title: 'Development',
      icon: Code2,
      color: 'blue',
      skills: ['Python (Django REST)', 'React.js', 'Android Studio', 'VB.NET', 'OOP Architecture', 'MVC Pattern']
    },
    {
      title: 'Infrastructure',
      icon: Server,
      color: 'purple',
      skills: ['Web Server Config', 'DNS Management', 'Active Directory', 'Nagios', 'Webmin', 'Network Admin']
    },
    {
      title: 'Testing',
      icon: TestTube,
      color: 'teal',
      skills: ['Cypress', 'Pytest', 'Unittest', 'API Testing', 'Postman', 'Quality Assurance']
    },
    {
      title: 'DevOps',
      icon: Cog,
      color: 'orange',
      skills: ['Containerization', 'CI/CD Pipelines', 'Microservices', 'Container Orchestration', 'Docker', 'Kubernetes']
    },
    {
      title: 'Design & Modeling',
      icon: Database,
      color: 'green',
      skills: ['UML Modeling', 'MERISE', 'Database Design', 'System Architecture', 'Data Modeling', 'ER Diagrams']
    },
    {
      title: 'Project Management',
      icon: Users,
      color: 'pink',
      skills: ['Agile Methodology', 'Jira', 'Trello', 'Scrum', 'Project Planning', 'Team Collaboration']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 border-blue-500/50 hover:border-blue-400',
      purple: 'from-purple-500 to-purple-600 border-purple-500/50 hover:border-purple-400',
      teal: 'from-teal-500 to-teal-600 border-teal-500/50 hover:border-teal-400',
      orange: 'from-orange-500 to-orange-600 border-orange-500/50 hover:border-orange-400',
      green: 'from-green-500 to-green-600 border-green-500/50 hover:border-green-400',
      pink: 'from-pink-500 to-pink-600 border-pink-500/50 hover:border-pink-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit spanning development, infrastructure, testing, and project management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className={`p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-600/30 hover:${category.color === 'blue' ? 'border-blue-400' : category.color === 'purple' ? 'border-purple-400' : category.color === 'teal' ? 'border-teal-400' : category.color === 'orange' ? 'border-orange-400' : category.color === 'green' ? 'border-green-400' : 'border-pink-400'} transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center p-2 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} rounded-full mr-3`}></div>
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
              <h3 className="text-2xl font-bold mb-4 text-white">Always Learning</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to continuous learning. 
                Currently exploring advanced cloud technologies, AI/ML integration, and modern architectural patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;