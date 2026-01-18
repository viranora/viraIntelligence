import React from 'react';
import { Github, Mail, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'ViraFlow', path: '/viraflow', status: 'deploy' },
    { name: 'ViraSocial', path: '/virasocial', status: 'development' },
    { name: 'ViraTime', path: '/viratime', status: 'soon' }
  ];

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10 bg-gradient-to-b from-transparent to-[#1E1B18]/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-[#D4A373]">Products</span>
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
                    {product.status === 'deploy' && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[#D4A373]/20 text-[#D4A373]">
                        Deploy
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

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:viranoradev@gmail.com"
                className="flex items-center gap-3 text-[#FAEDCD] hover:text-[#D4A373] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#D4A373]/10 group-hover:bg-[#D4A373]/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-xs text-[#FAEDCD]/60">viranoradev@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://github.com/Vira-Intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#FAEDCD] hover:text-[#FAEDCD] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">GitHub</p>
                  <p className="text-xs text-[#FAEDCD]/60">Vira-Intelligence</p>
                </div>
              </a>
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

          <Link to="/contact" className="text-sm text-[#FAEDCD]/60 hover:text-[#D4A373] transition-colors">
            Get in Touch →
          </Link>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-xs text-[#FAEDCD]/40 hover:text-[#D4A373] transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUpRight className="w-3 h-3 -rotate-90 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;