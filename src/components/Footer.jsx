import React from 'react';
import { Github, Linkedin, Mail, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Vira-Intelligence',
      color: 'hover:text-[#FAEDCD]'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/company/vira-intelligence',
      color: 'hover:text-[#0A66C2]'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:viranoradev@gmail.com',
      color: 'hover:text-[#D4A373]'
    }
  ];

  const productLinks = [
    { name: 'ViraFlow', path: '/viraflow', status: 'available' },
    { name: 'ViraSocial', path: '/virasocial', status: 'development' },
    { name: 'ViraTime', path: '/viratime', status: 'soon' }
  ];

  const companyLinks = [
    { name: 'Contact', path: '/contact' },
    { name: 'Manifesto', path: '/manifesto', disabled: true },
    { name: 'Careers', path: '/careers', disabled: true }
  ];

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10 bg-gradient-to-b from-transparent to-[#1E1B18]/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#D4A373]/10">
                <Sparkles className="w-6 h-6 text-[#D4A373]" />
              </div>
              <span className="text-2xl font-bold text-[#D4A373]">Vira Intelligence</span>
            </div>
            <p className="text-[#FAEDCD]/70 text-sm leading-relaxed">
              Building privacy-first AI applications that actually work.
              Human-centered design meets cutting-edge technology.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-white/5 text-[#FAEDCD]/50 ${social.color} hover:bg-white/10 transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-[#D4A373]">Products</span>
              <ArrowUpRight className="w-4 h-4 text-[#FAEDCD]/40" />
            </h4>
            <div className="space-y-4">
              {productLinks.map((product) => (
                <Link
                  key={product.name}
                  to={product.path}
                  className="group flex items-center justify-between py-2"
                >
                  <span className="text-[#FAEDCD]/70 group-hover:text-[#FAEDCD] transition-colors">
                    {product.name}
                  </span>
                  <div className="flex items-center gap-2">
                    {product.status === 'available' && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[#D4A373]/20 text-[#D4A373]">
                        Live
                      </span>
                    )}
                    {product.status === 'development' && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[#A5A58D]/20 text-[#A5A58D]">
                        Dev
                      </span>
                    )}
                    {product.status === 'soon' && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-[#FAEDCD]/40">
                        Soon
                      </span>
                    )}
                    <ArrowUpRight className="w-3 h-3 text-[#FAEDCD]/40 group-hover:text-[#D4A373] transition-colors opacity-0 group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-[#A5A58D]">Company</span>
              <ArrowUpRight className="w-4 h-4 text-[#FAEDCD]/40" />
            </h4>
            <div className="space-y-4">
              {companyLinks.map((link) => (
                link.disabled ? (
                  <div key={link.name} className="flex items-center justify-between py-2 group">
                    <span className="text-[#FAEDCD]/40 cursor-not-allowed">
                      {link.name}
                    </span>
                    <span className="text-xs text-[#FAEDCD]/20 italic">
                      Coming
                    </span>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-center justify-between py-2"
                  >
                    <span className="text-[#FAEDCD]/70 group-hover:text-[#FAEDCD] transition-colors">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#FAEDCD]/40 group-hover:text-[#A5A58D] transition-colors opacity-0 group-hover:opacity-100" />
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Connected</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-[#FAEDCD]/60 mb-3">Primary Contact</p>
                <a
                  href="mailto:viranoradev@gmail.com"
                  className="inline-flex items-center gap-3 text-[#FAEDCD] hover:text-[#D4A373] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#D4A373]/10 group-hover:bg-[#D4A373]/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">viranoradev@gmail.com</p>
                    <p className="text-xs text-[#FAEDCD]/60">Direct response within 24h</p>
                  </div>
                </a>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-[#FAEDCD]/60 mb-3">Development</p>
                <a
                  href="https://github.com/Vira-Intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#FAEDCD] hover:text-[#FAEDCD] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Vira-Intelligence</p>
                    <p className="text-xs text-[#FAEDCD]/60">GitHub Organization</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#FAEDCD]/50 text-sm">
              © {currentYear} Vira Intelligence. All rights reserved.
            </p>
            <p className="text-[#FAEDCD]/30 text-xs mt-1">
              Privacy-first • Human-centered • Open where possible
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-xs text-[#FAEDCD]/40 hover:text-[#FAEDCD]/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-xs text-[#FAEDCD]/40 hover:text-[#FAEDCD]/60 transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-xs text-[#FAEDCD]/40 hover:text-[#FAEDCD]/60 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-xs text-[#FAEDCD]/40 hover:text-[#D4A373] transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUpRight className="w-3 h-3 rotate-90 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
