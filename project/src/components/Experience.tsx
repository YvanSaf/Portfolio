import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      location: "Remote",
      description: "Developing full-stack applications using Python/Django and React.js. Collaborating with cross-functional teams in Agile environment using Jira for project management.",
      achievements: [
        "Built RESTful APIs serving 10k+ daily requests",
        "Implemented automated testing reducing bugs by 40%",
        "Contributed to microservices architecture design"
      ],
      technologies: ["Python", "Django REST", "React.js", "PostgreSQL", "Docker"]
    },
    {
      title: "System Administrator Intern",
      company: "DataCenter Pro",
      period: "2022 - 2023",
      location: "On-site",
      description: "Managed network infrastructure and server configurations. Implemented monitoring solutions using Nagios and maintained Active Directory services.",
      achievements: [
        "Reduced system downtime by 30% through proactive monitoring",
        "Automated backup processes saving 10+ hours weekly",
        "Configured load balancers improving performance by 25%"
      ],
      technologies: ["Windows Server", "Active Directory", "Nagios", "DNS", "Networking"]
    },
    {
      title: "DevOps Trainee",
      company: "CloudFirst Solutions",
      period: "2022",
      location: "Hybrid",
      description: "Learned containerization and CI/CD practices. Worked on automating deployment pipelines and container orchestration using Docker and Kubernetes.",
      achievements: [
        "Set up CI/CD pipelines reducing deployment time by 60%",
        "Containerized 5+ legacy applications",
        "Implemented infrastructure monitoring and alerting"
      ],
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My journey in software development and system administration, building expertise through hands-on experience
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Award size={16} className="mr-2 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                            <TrendingUp size={12} className="mr-2 mt-1 text-green-400 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
              <h3 className="text-2xl font-bold mb-4 text-white">Looking Forward</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I'm actively seeking opportunities to grow as a full-stack developer and contribute to innovative projects. 
                Open to remote, hybrid, or on-site positions where I can make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;