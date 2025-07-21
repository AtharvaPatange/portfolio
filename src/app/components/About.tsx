import { GraduationCap, Rocket, Briefcase, Youtube, Laptop, Trophy, AlarmClock, Link2 } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text drop-shadow-lg mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full shadow-md"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-7">
            {/* Education */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-primary-100 shadow-lg p-8 card-hover">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary-500" /> Education & Background
              </h3>
              <div className="mb-2">
                <span className="text-slate-800 font-semibold">Walchand Institute of Technology, Solapur</span><br/>
                <span className="italic">BTech • <b>Information Technology (Major)</b>, Electronics and Computer Engineering (Minor)</span> • 2022 - 2027
              </div>
              <div>
                <span className="text-slate-800 font-semibold">Walchand College of Arts and Science, Solapur</span><br/>
                <span className="italic">Higher Secondary Certificate (HSC)</span> • 2020 - 2022
              </div>
            </div>

            {/* Specializations */}
            <div className="rounded-2xl  border border-primary-100 shadow-lg p-8 card-hover">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center gap-3">
                <Rocket className="w-7 h-7 text-accent-500" /> Specializations
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                I specialize in <span className="text-primary-700 font-semibold">AI/ML, GenAI and full-stack development</span>. 
                My passion lies in creating intelligent solutions that solve real-world problems.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-primary-100 shadow-lg p-8 card-hover">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center gap-3">
                <Briefcase className="w-7 h-7 text-secondary-500" /> Professional Experience
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Selected as an <span className="text-primary-700 font-semibold">AI Expert on Outlier</span>, earned international income ($25) 
                from 4 successful LLM-based projects. Founder at <span className="text-primary-700 font-semibold">Nexentia</span> – 
                a startup focused on AI, automation, web, Android, and SEO/SEM services.
              </p>
            </div>
          </div>

          <div className="space-y-7">
            {/* YouTube Educator */}
            <div className="rounded-2xl border border-primary-100 shadow-lg p-8 card-hover">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center gap-3">
                <Youtube className="w-7 h-7 text-primary-500" /> YouTube Educator
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
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

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/80 border border-primary-100 shadow-md p-6 text-center card-hover group flex flex-col items-center">
                <Laptop className="w-8 h-8 text-primary-500 mb-2" />
                <div className="text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-slate-500 font-medium">Projects Built</div>
              </div>
              <div className="rounded-2xl bg-white/80 border border-primary-100 shadow-md p-6 text-center card-hover group flex flex-col items-center">
                <Trophy className="w-8 h-8 text-accent-500 mb-2" />
                <div className="text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">4+</div>
                <div className="text-slate-500 font-medium">Hackathons Won</div>
              </div>
              <div className="rounded-2xl bg-white/80 border border-primary-100 shadow-md p-6 text-center card-hover group flex flex-col items-center">
                <AlarmClock className="w-8 h-8 text-secondary-500 mb-2" />
                <div className="text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">3+</div>
                <div className="text-slate-500 font-medium">Years Experience</div>
              </div>
              <div className="rounded-2xl bg-white/80 border border-primary-100 shadow-md p-6 text-center card-hover group flex flex-col items-center">
                <Link2 className="w-8 h-8 text-slate-400 mb-2" />
                <div className="text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
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