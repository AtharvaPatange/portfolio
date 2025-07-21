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
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "OpenCV", level: 85 },
        { name: "YOLOv8", level: 82 }
      ]
    },
    {
      name: "Backend Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
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
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
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
      color: "from-indigo-500 to-purple-500",
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
      color: "from-yellow-500 to-orange-500",
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
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="backdrop-blur-glass rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
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
        <div className="mt-16 pt-16 border-t border-gray-800">
          <h3 className="text-2xl font-bold text-center gradient-text mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Jupyter", "VS Code", "Postman", "Figma", "Adobe Creative Suite", "Slack", "Notion", "Jira"].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-all duration-200 cursor-pointer tech-icon"
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