import { Github, Linkedin, Youtube, Code, Mail } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:atharvapatange07@gmail.com",
      color: "hover:text-green-400",
      label: "Email"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/AtharvaPatange",
      color: "hover:text-gray-400",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/atharva-patange-7596092a1/",
      color: "hover:text-blue-400",
      label: "LinkedIn"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://www.youtube.com/@-AtharvaPatange",
      color: "hover:text-red-400",
      label: "YouTube"
    },
    {
      icon: <Code className="w-5 h-5" />,
      href: "https://leetcode.com/u/Atharva__93/",
      color: "hover:text-orange-400",
      label: "LeetCode"
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="backdrop-blur-glass rounded-full p-4 space-y-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-2 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;