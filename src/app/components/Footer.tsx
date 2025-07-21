const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Atharva Patange</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              AI/ML Engineer passionate about creating intelligent solutions that make a difference.
            </p>
            <p className="text-sm text-slate-500">
              © {currentYear} Atharva Patange. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Tech Stack', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="block text-slate-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="mailto:atharvapatange07@gmail.com"
                className="block text-slate-600 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                atharvapatange07@gmail.com
              </a>
              <a
                href="https://www.youtube.com/@-AtharvaPatange"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-600 hover:text-red-500 transition-colors duration-200 font-medium"
              >
                YouTube Channel
              </a>
              <a
                href="https://github.com/AtharvaPatange"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-600 hover:text-slate-800 transition-colors duration-200 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600">
            Built with ❤️ by Atharva Patange 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;