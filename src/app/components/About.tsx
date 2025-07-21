const About = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="modern-card p-8 card-hover border-l-4 border-primary-400">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center gap-3">
                🎓 <span>Education & Background</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                I'm a 3rd-year B.Tech student from <span className="text-slate-800 font-semibold">Walchand Institute of Technology</span>, 
                majoring in Information Technology and minoring in Electronics and Computer Engineering.
              </p>
            </div>

            <div className="modern-card p-8 card-hover border-l-4 border-primary-400">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center gap-3">
                🚀 <span>Specializations</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                I specialize in <span className="text-slate-800 font-semibold">AI/ML, GenAI and full-stack development</span>. 
                My passion lies in creating intelligent solutions that solve real-world problems.
              </p>
            </div>

            <div className="modern-card p-8 card-hover border-l-4 border-primary-400">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center gap-3">
                💼 <span>Professional Experience</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Selected as an <span className="text-slate-800 font-semibold">AI Expert on Outlier</span>, earned international income ($25) 
                from 4 successful LLM-based projects. Founder at <span className="text-slate-800 font-semibold">Nexentia</span> – 
                a startup focused on AI, automation, web, Android, and SEO/SEM services.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="modern-card p-8 card-hover border-l-4 border-primary-400">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center gap-3">
                📺 <span>YouTube Educator</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                I run a YouTube channel to simplify concepts in LLMs and emerging tech. 
                My goal is to make complex AI concepts accessible to everyone.
              </p>
              <a 
                href="https://www.youtube.com/@-AtharvaPatange"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200 group"
              >
                Visit Channel 
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="modern-card p-6 text-center card-hover group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                <div className="text-slate-500 font-medium">Years Experience</div>
              </div>
              <div className="modern-card p-6 text-center card-hover group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-slate-500 font-medium">Projects Built</div>
              </div>
              <div className="modern-card p-6 text-center card-hover group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
                <div className="text-slate-500 font-medium">Hackathons Won</div>
              </div>
              <div className="modern-card p-6 text-center card-hover group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-slate-500 font-medium">LinkedIn Connections</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;