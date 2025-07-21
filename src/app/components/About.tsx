const About = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="backdrop-blur-glass rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">🎓 Education & Background</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a 3rd-year B.Tech student from <span className="text-white font-semibold">Walchand Institute of Technology</span>, 
                majoring in Information Technology and minoring in Electronics and Computer Engineering.
              </p>
            </div>

            <div className="backdrop-blur-glass rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-green-400 mb-4">🚀 Specializations</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in <span className="text-white font-semibold">AI/ML, GenAI and full-stack development</span>. 
                My passion lies in creating intelligent solutions that solve real-world problems.
              </p>
            </div>

            <div className="backdrop-blur-glass rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">💼 Professional Experience</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Selected as an <span className="text-white font-semibold">AI Expert on Outlier</span>, earned international income ($25) 
                from 4 successful LLM-based projects. Founder at <span className="text-white font-semibold">Nexentia</span> – 
                a startup focused on AI, automation, web, Android, and SEO/SEM services.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="backdrop-blur-glass rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">📺 YouTube Educator</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I run a YouTube channel to simplify concepts in LLMs and emerging tech. 
                My goal is to make complex AI concepts accessible to everyone.
              </p>
              <a 
                href="https://www.youtube.com/@-AtharvaPatange"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
              >
                Visit Channel →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-glass rounded-xl p-6 text-center card-hover">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="backdrop-blur-glass rounded-xl p-6 text-center card-hover">
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <div className="text-gray-400">Projects Built</div>
              </div>
              <div className="backdrop-blur-glass rounded-xl p-6 text-center card-hover">
                <div className="text-3xl font-bold gradient-text mb-2">4+</div>
                <div className="text-gray-400">Hackathons Won</div>
              </div>
              <div className="backdrop-blur-glass rounded-xl p-6 text-center card-hover">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-400">Linkedin Connections</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;