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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="floating-animation">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-slate-800">Hi, I'm</span>
            <span className="block gradient-text">Atharva Patange</span>
          </h1>
        </div>

        <div className="h-16 mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 font-light">
            {displayText}
            <span className="animate-pulse text-primary-500">|</span>
          </p>
        </div>

        <p className="text-lg sm:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
          I build intelligent solutions powered by LLMs, ML, Computer Vision & DevOps.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={handleDownloadResume}
            className="modern-button-outline flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </button>
          
          <a
            href="https://www.youtube.com/@-AtharvaPatange"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary-50 border-2 border-primary-400 text-primary-600 hover:bg-primary-500 hover:text-white hover:border-primary-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Youtube size={20} />
            YouTube Channel
          </a>
          
          <a
            href="https://www.linkedin.com/in/atharva-patange-7596092a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary-50 border-2 border-primary-400 text-primary-600 hover:bg-primary-500 hover:text-white hover:border-primary-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={32} className="text-primary-400 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;