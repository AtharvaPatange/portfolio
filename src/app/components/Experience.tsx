import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SDE Intern",
      company: "Logstrike",
      duration: "May - June 2025",
      location: "Remote",
      description: [
        "Developed a browser-based CI/CD automation tool using Stagehand",
        "Built micro frontend UI libraries for open-source use",
        "Managed cloud infra with DigitalOcean (droplets, cluster, server optimization on Linux VMs)",
        "Built a full-stack AI chip e-commerce platform with Next.js + Firebase + GCP",
        "Integrated Meilisearch for blazing-fast search and Shiprocket API for live order tracking",
        "Implemented Firebase custom claims for secure role-based access"
      ],
      tech: ["Next.js", "Firebase", "GCP", "DigitalOcean", "Meilisearch", "Shiprocket API"]
    },
    
    {
      title: "Backend Dev Intern",
      company: "Infosys",
      duration: "2024",
      location: "Remote",
      description: [
        "Developed Django-based insurance management system",
        "Implemented secure authentication and authorization",
        "Optimized database queries for better performance"
      ],
      tech: ["Django", "Python", "PostgreSQL", "REST APIs"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="modern-card p-8 card-hover group border-l-4 border-primary-400">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">{exp.title}</h3>
                  <h4 className="text-xl font-semibold gradient-text mb-4">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center text-slate-500 font-medium">
                    <Calendar size={16} className="mr-2" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center text-slate-500 font-medium">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {exp.description.map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-slate-600 text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary-50 border border-primary-200 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;