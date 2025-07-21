'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube, Code } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "atharvapatange07@gmail.com",
      href: "mailto:atharvapatange07@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Solapur, Maharashtra, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/AtharvaPatange",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/atharva-patange-7596092a1/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      label: "YouTube",
      href: "https://www.youtube.com/@-AtharvaPatange",
      color: "hover:text-red-400"
    },
    {
      icon: <Code className="w-6 h-6" />,
      label: "LeetCode",
      href: "https://leetcode.com/u/Atharva__93/",
      color: "hover:text-orange-400"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Let's Collaborate</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to work together on innovative AI/ML projects? Let's create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="modern-card p-8 card-hover">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <p className="text-emerald-700 font-medium">Thanks for your message! I'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-slate-800 transition-all duration-200 hover:border-slate-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-slate-800 transition-all duration-200 hover:border-slate-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-slate-800 transition-all duration-200 hover:border-slate-300"
                  placeholder="Let's collaborate on an AI project"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-slate-800 transition-all duration-200 hover:border-slate-300 resize-none"
                  placeholder="Tell me about your project idea or how we can work together..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="modern-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="modern-card p-8 card-hover">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl mr-4">
                      <div className="text-primary-600">{info.icon}</div>
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-800 font-semibold hover:text-primary-600 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

      
            {/* Call to Action */}
            <div className="modern-card p-8 card-hover border-l-4 border-primary-400">
              <h3 className="text-xl font-bold gradient-text mb-4">Open to Opportunities</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                I'm always interested in challenging projects, research opportunities, and collaborations in AI/ML, 
                full-stack development, and innovative tech solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI/ML Projects", "Research", "Hackathons", "Consulting", "Full-Stack Dev"].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary-50 border border-primary-200 text-primary-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;