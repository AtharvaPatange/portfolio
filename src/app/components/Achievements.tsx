import { Trophy, Award, Users, TrendingUp, Globe, DollarSign } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Winner, Infosys AI in Action Hackathon",
      description: "National-level hackathon winner for AI-powered crop classification system",
      highlight: "🏆 National Winner"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Google Gemini API Developer Competition",
      description: "Developed an AI-powered app, Cookbook,The event is part of the global competition for developers working with the Gemini API.",
      highlight: "🤖 Gemini API Developer"
    },
  
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Founder at Nexentia",
      description: "Founded AI & Software startup focusing on automation, web, Android, and SEO/SEM services",
      highlight: "🌐 Startup Founder"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "LinkedIn Network",
      description: "500+ LinkedIn connections, building a strong professional network in tech and AI.",
      highlight: "🔗 500+ Connections"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Problem Solving: 250+ DSA Problems",
      description: "Successfully solved over 250+ DSA problems consistently using Java.",
      highlight: "📚 250+ DSA Problems"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "International AI Project Income",
      description: "Earned international income via Outlier as AI Expert from 4 successful LLM-based projects",
      highlight: "🌍 International Income"
    }
  ];

  const stats = [
    { number: "25+", label: "Projects Built", icon: "💻" },
    { number: "4+", label: "Hackathons Won", icon: "🏆" },
    { number: "3+", label: "Years Experience", icon: "⏰" },
    { number: "500+", label: "LinkedIn Connections", icon: "🔗" }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-bg-secondary to-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Achievements & Milestones</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Celebrating the journey of innovation, learning, and impact
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="modern-card p-6 text-center card-hover group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
              <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="modern-card rounded-2xl overflow-hidden card-hover group border-l-4 border-primary-400">
              <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>
              
              <div className="p-8">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{achievement.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary-600 mb-2">
                      {achievement.highlight}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="modern-card p-8 card-hover border-l-4 border-secondary-400">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Collaborate?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on innovative projects that push the boundaries of AI/ML and create meaningful impact.
            </p>
            <a
              href="#contact"
              className="modern-button inline-flex items-center gap-2"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;