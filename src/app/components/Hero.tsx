'use client';

import { useEffect, useState } from 'react';
import { Download, Youtube, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "AI/ML Engineer | Hackathon Winner | Full Stack Innovator";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleDownloadResume = () => {
    // Create a placeholder resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Atharva_Patange_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="floating-animation">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">Hi, I'm</span>
            <span className="block gradient-text">Atharva Patange</span>
            <span className="text-3xl"></span>
          </h1>
        </div>

        <div className="h-16 mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          I build intelligent solutions powered by LLMs, ML, Computer Vision & DevOps.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 pulse-glow"
          >
            <Download size={20} />
            Download Resume
          </button>
          
          <a
            href="https://www.youtube.com/@-AtharvaPatange"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Youtube size={20} />
            YouTube Channel
          </a>
          
          <a
            href="https://www.linkedin.com/in/atharva-patange-7596092a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={32} className="text-cyan-400 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;