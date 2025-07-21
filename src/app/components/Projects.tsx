import { Trophy, Eye, Github, ExternalLink, Target, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Crop Classification",
      subtitle: "🏆 Hackathon Winner - Infosys Bangalore DC",
      description: "Used Random Forest on satellite imagery (Google Earth Engine) to classify crops for optimizing agriculture monitoring, yield prediction, and food security planning.",
      architecture: "Data Collection → Preprocessing → Feature Extraction → ML Training → Classification",
      impact: "Optimized agriculture monitoring, yield prediction, and food security planning",
      tech: ["Google Earth Engine", "Random Forest", "Python", "Scikit-learn"],
      award: "Winner, Infosys AI in Action – National-level hackathon",
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Fake News & Deepfake Detection System",
      subtitle: "🔍 CMR Hyderabad Project",
      description: "Built a real-time misinformation and fake video detection system using hybrid AI models to combat misinformation.",
      features: [
        "Used LLM + Google News API for real-time fact-checking",
        "CNN + LSTM for fake face detection in deepfake videos"
      ],
      tech: ["TensorFlow", "Python", "Flask", "LLM APIs", "Google News API"],
      impact: "Combats misinformation using hybrid AI models",
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "Smart Waste Bin",
      subtitle: "🚀 Startup MVP - AI + Hardware",
      description: "YOLOv8 + ResNet to detect waste type, show ads, auto-open correct bin, generate QR with eco-points.",
      features: [
        "Ad display upon person detection",
        "Object detection + bin classification (95% accuracy)",
        "App with QR scanning, eco-points dashboard, animated educational content",
        "Rewards system, user gamification, revenue opportunities"
      ],
      tech: ["YOLOv8", "ResNet", "Firebase", "Python", "Flutter", "ML"],
      accuracy: "95%",
      color: "from-purple-400 to-pink-600"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Major AI/ML Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="backdrop-blur-glass rounded-3xl overflow-hidden card-hover">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-xl text-cyan-600 mb-4">{project.subtitle}</p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{project.description}</p>
                  </div>
                  
                  {project.award && (
                    <div className="lg:ml-6 mb-4 lg:mb-0">
                      <div className="flex items-center bg-yellow-100 text-yellow-600 px-4 py-2 rounded-lg">
                        <Trophy size={20} className="mr-2" />
                        <span className="font-semibold">Winner</span>
                      </div>
                    </div>
                  )}
                </div>

                {project.architecture && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-600 mb-2 flex items-center">
                      <Target size={20} className="mr-2" />
                      Architecture
                    </h4>
                    <p className="text-gray-700 bg-gray-100 p-4 rounded-lg font-mono text-sm">
                      {project.architecture}
                    </p>
                  </div>
                )}

                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                      <Zap size={20} className="mr-2" />
                      Key Features
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-200 text-cyan-600 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.accuracy && (
                    <div className="text-right">
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">ACCURACY</h4>
                      <p className="text-2xl font-bold gradient-text">{project.accuracy}</p>
                    </div>
                  )}
                </div>

                {project.impact && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-orange-600 mb-2">IMPACT</h4>
                    <p className="text-gray-700">{project.impact}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;