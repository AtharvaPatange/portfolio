'use client';

import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  Cpu,
  Zap
} from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      name: "AI/ML & Data Science",
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "AI/ML", level: 92 },
        { name: "Generative AI", level: 85 },
        { name: "RAG (Retrieval-Augmented Generation)", level: 80 }
      ]
    },
    {
      name: "Backend Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Django", level: 90 },
        { name: "Flask", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      name: "Frontend & Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "Javascript", level: 90 },
        { name: "TypeScript", level: 82 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "Firebase", level: 88 },
        { name: "GCP", level: 82 },
        { name: "DigitalOcean", level: 85 },
        { name: "Docker", level: 78 },
        { name: "Linux", level: 90 }
      ]
    },
    {
      name: "Databases & Search",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Meilisearch", level: 88 },
        { name: "Appwrite", level: 75 },
        { name: "Firebase DB", level: 90 }
      ]
    },
    {
      name: "Specialized Tools",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "Google Earth Engine", level: 85 },
        { name: "LLMs (GPT/Gemini)", level: 90 },
        { name: "Shiprocket API", level: 88 },
        { name: "Stagehand", level: 82 },
        { name: "Git/GitHub", level: 95 }
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-bg-secondary to-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="modern-card p-8 card-hover group border-l-4 border-primary-400">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary-600 transition-colors duration-300">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-primary-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Icons */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-center gradient-text mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Jupyter", "VS Code", "Postman", "Figma", "Adobe Creative Suite", "Slack", "Notion", "Jira"].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-200 cursor-pointer tech-icon font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;