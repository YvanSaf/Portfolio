import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Server, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                <div className="p-3 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30 animate-pulse">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <div className="p-3 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30 animate-pulse delay-150">
                  <Server className="w-8 h-8 text-purple-400" />
                </div>
                <div className="p-3 bg-teal-500/20 rounded-full backdrop-blur-sm border border-teal-500/30 animate-pulse delay-300">
                  <Database className="w-8 h-8 text-teal-400" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                  Hello, I'm a
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Junior Software Developer
              </h2>
              
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300">
                & System Administrator
              </h3>
              
              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                Passionate about building scalable applications and managing robust infrastructure. 
                Experienced in full-stack development, DevOps practices, and system administration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToNext()}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  View My Work
                </button>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Side - Large Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                {/* Animated background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-600 to-teal-500 rounded-full blur-lg opacity-40 animate-pulse delay-75"></div>
                
                {/* Main image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 via-purple-500 to-teal-400 p-2 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <img 
                      src="/WhatsApp_Image_2025-06-06_at_6.27.03_PM-removebg-preview.png" 
                      alt="Profile - Junior Software Developer & System Administrator"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center animate-bounce">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-bounce delay-150">
                  <Server className="w-8 h-8 text-purple-400" />
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-teal-500/20 rounded-full backdrop-blur-sm border border-teal-500/30 flex items-center justify-center animate-bounce delay-300">
                  <Database className="w-6 h-6 text-teal-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToNext} className="p-2 text-gray-400 hover:text-white transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;