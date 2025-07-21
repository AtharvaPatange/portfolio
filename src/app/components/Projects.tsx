import { Trophy, Eye, Github, ExternalLink, Target, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from 'react';

const Projects = () => {
  const projects: Array<{
    title: string;
    subtitle: string;
    description: string;
    architecture?: string;
    impact?: string;
    tech: string[];
    award?: string;
    features?: string[];
    accuracy?: string;
    color: string;
  }> = [
    {
      title: "AI-Powered Crop Classification",
      subtitle: "🏆 Hackathon Winner - Infosys Bangalore DC",
      description: "Used Random Forest on satellite imagery (Google Earth Engine) to classify crops for optimizing agriculture monitoring, yield prediction, and food security planning.",
      architecture: "Data Collection → Preprocessing → Feature Extraction → ML Training → Classification",
      impact: "Optimized agriculture monitoring, yield prediction, and food security planning",
      tech: ["Google Earth Engine", "Random Forest", "Python", "Scikit-learn"],
      award: "Winner, Infosys AI in Action – National-level hackathon",
      color: "from-primary-500 to-accent-500"
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
      color: "from-secondary-500 to-accent-500"
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
      color: "from-primary-500 to-accent-500"
    },
    {
      title: "AI-Powered Crop Classification",
      subtitle: "🏆 Hackathon Winner - Infosys Bangalore DC",
      description: "Used Random Forest on satellite imagery (Google Earth Engine) to classify crops for optimizing agriculture monitoring, yield prediction, and food security planning.",
      architecture: "Data Collection → Preprocessing → Feature Extraction → ML Training → Classification",
      impact: "Optimized agriculture monitoring, yield prediction, and food security planning",
      tech: ["Google Earth Engine", "Random Forest", "Python", "Scikit-learn"],
      award: "Winner, Infosys AI in Action – National-level hackathon",
      color: "from-primary-500 to-accent-500"
    },
    {
      title: "Nationwide Hackathon Winner",
      subtitle: "🏆 SKN Sinhgad College of Engineering, Korti, Pandharpur • Mar 2025",
      description: "Built an award-winning low-bandwidth telemedicine platform tailored for rural healthcare, AI-based diagnostics (ECG, X-ray, retina, etc.), RAG-powered chatbot, multilingual voice assistance, offline chat (WebSockets), IVR emergency support.",
      tech: ["AI/ML", "RAG", "WebSockets", "Voice Assistance", "Telemedicine"],
      award: "Winner, Nationwide Hackathon",
      color: "from-primary-500 to-accent-500"
    },
    {
      title: "Google Gemini API Developer Competition",
      subtitle: "🤖 Google",
      description: "Developed an AI-powered app, Cookbook, using the Gemini API to enhance user experience. The event is part of the global competition for developers working with the Gemini API.",
      tech: ["Gemini API", "AI/ML", "Cookbook App"],
      award: "Gemini API Developer Competition",
      color: "from-secondary-500 to-accent-500"
    }
  ];

  const swiperRef = useRef<any>(null);

  return (
    <div className="py-20 bg-gradient-to-b from-bg-secondary to-bg-primary">
      <div className="w-full relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Major AI/ML Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"></div>
        </div>

        {/* Arrows */}
        <button
          className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-lg border border-slate-200 rounded-full shadow-lg w-12 h-12 hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous project"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-lg border border-slate-200 rounded-full shadow-lg w-12 h-12 hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next project"
        >
          <ChevronRight size={28} />
        </button>

        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          speed={800}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full !pb-12"
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1.2 },
          }}
          onSwiper={swiper => (swiperRef.current = swiper)}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-xl border border-slate-100 transition-transform duration-300 hover:shadow-3xl min-h-[540px] flex flex-col h-full w-full max-w-4xl lg:max-w-5xl mx-auto px-2 sm:px-4">
                {/* Modern gradient border accent */}
                <div className={`absolute -top-1 -left-1 right-0 h-1 bg-gradient-to-r ${project.color ? project.color : 'from-primary-500 to-accent-500'} z-10`}></div>
                {/* Floating badge for award */}
                {project.award && (
                  <div className="absolute top-3 right-2 md:top-6 md:right-6 z-20 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 bg-amber-100/90 border border-amber-300 text-amber-700 rounded-full shadow-md font-semibold text-xs md:text-sm animate-pulse">
                    <Trophy size={16} className="mr-1" />
                    Winner
                  </div>
                )}
                <div className="p-8 md:p-10 flex flex-col gap-6 flex-1">
                  <div>
                    <h3 className="text-3xl font-extrabold text-slate-800 mb-1 gradient-text drop-shadow-sm">{project.title}</h3>
                    <p className="text-lg text-primary-600 mb-3 font-medium">{project.subtitle}</p>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-2">{project.description}</p>
                  {project.architecture && (
                    <div className="mb-2">
                      <h4 className="text-base font-semibold text-accent-600 mb-1 flex items-center gap-2">
                        <Target size={18} /> Architecture
                      </h4>
                      <p className="text-slate-600 bg-slate-50 border border-slate-200 p-3 rounded-lg font-mono text-xs">
                        {project.architecture}
                      </p>
                    </div>
                  )}
                  {project.features && (
                    <div className="mb-2">
                      <h4 className="text-base font-semibold text-secondary-600 mb-1 flex items-center gap-2">
                        <Zap size={18} /> Key Features
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                            <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-2">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary-50 border border-primary-200 text-primary-700 rounded-full text-xs font-medium hover:bg-primary-100 transition-colors duration-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.accuracy && (
                      <div className="text-right">
                        <h4 className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">Accuracy</h4>
                        <p className="text-xl font-bold gradient-text">{project.accuracy}</p>
                      </div>
                    )}
                  </div>
                  {project.impact && (
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="text-xs font-semibold text-orange-600 mb-1 uppercase tracking-wide">Impact</h4>
                      <p className="text-slate-600 text-sm">{project.impact}</p>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;