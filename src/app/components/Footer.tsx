const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Atharva Patange</h3>
            <p className="text-gray-600 mb-4">
              AI/ML Engineer passionate about creating intelligent solutions that make a difference.
            </p>
            <p className="text-sm text-gray-400">
              © {currentYear} Atharva Patange. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Tech Stack', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="block text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="mailto:atharvapatange07@gmail.com"
                className="block text-gray-600 hover:text-cyan-600 transition-colors duration-200"
              >
                atharvapatange07@gmail.com
              </a>
              <a
                href="https://www.youtube.com/@-AtharvaPatange"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                YouTube Channel
              </a>
              <a
                href="https://github.com/AtharvaPatange"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Built with ❤️ by Atharva Patange 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;