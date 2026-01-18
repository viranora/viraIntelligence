import React from 'react';
import { Mail, Github, Linkedin, Sparkles, ArrowUpRight, Globe, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const contactLinks = [
    {
      icon: Mail,
      title: 'Email',
      info: 'viranoradev@gmail.com',
      link: 'mailto:viranoradev@gmail.com',
      description: 'Direct contact for all inquiries',
      color: 'bg-[#D4A373]/10 border-[#D4A373]/30',
      hoverColor: 'hover:border-[#D4A373]/50 hover:bg-[#D4A373]/5'
    },
    {
      icon: Github,
      title: 'GitHub',
      info: 'Vira-Intelligence',
      link: 'https://github.com/Vira-Intelligence',
      description: 'Open-source projects and code',
      color: 'bg-[#2D2926] border-white/10',
      hoverColor: 'hover:border-[#A5A58D]/30 hover:bg-[#2D2926]/80'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      info: 'Vira Intelligence',
      link: 'https://linkedin.com/company/vira-intelligence',
      description: 'Company updates and team',
      color: 'bg-[#2D2926] border-white/10',
      hoverColor: 'hover:border-[#D4A373]/30 hover:bg-[#2D2926]/80'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4A373]/10 border border-[#D4A373]/20 mb-8 animate-pulse">
              <Sparkles className="w-5 h-5 text-[#D4A373]" />
              <span className="text-lg font-semibold text-[#D4A373]">
                Connect With Us
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Let's Build <span className="bg-gradient-to-r from-[#D4A373] to-[#A5A58D] bg-clip-text text-transparent">Together</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#FAEDCD]/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Simple, direct, and effective. Reach out through any channel below.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {contactLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 rounded-3xl border ${item.color} ${item.hoverColor} transition-all duration-300 animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                      <item.icon className="w-8 h-8 text-[#D4A373]" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#FAEDCD]/40 group-hover:text-[#D4A373] transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D4A373] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#FAEDCD] text-lg font-medium mb-3">
                    {item.info}
                  </p>
                  
                  <p className="text-[#FAEDCD]/60 text-sm mt-auto">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Philosophy Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4A373] to-transparent"></div>
                <MessageSquare className="w-6 h-6 text-[#D4A373]" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4A373] to-transparent"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-[#D4A373]">Communication</span> Philosophy
              </h2>
              
              <div className="space-y-6 text-[#FAEDCD]/70 text-lg leading-relaxed">
                <p>
                  We believe in <span className="text-[#D4A373] font-medium">transparent</span> and{' '}
                  <span className="text-[#A5A58D] font-medium">direct</span> communication.
                  No unnecessary forms, no automated responses.
                </p>
                <p>
                  Whether you're a developer wanting to contribute, a potential partner,
                  or just curious about AI—we're here for genuine conversations.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                { value: '24h', label: 'Average Response Time' },
                { value: '100%', label: 'Human Replies' },
                { value: 'Open', label: 'Source Where Possible' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:border-[#D4A373]/30 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#D4A373] mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-[#FAEDCD]/60 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-[#D4A373]/20 to-[#A5A58D]/20 mb-8">
                <div className="px-8 py-4 rounded-xl bg-[#1E1B18]">
                  <p className="text-lg text-[#FAEDCD]/80">
                    <span className="text-[#D4A373] font-medium">Prefer email?</span>{' '}
                    Just write to{' '}
                    <a 
                      href="mailto:viranoradev@gmail.com" 
                      className="text-[#D4A373] hover:underline font-medium"
                    >
                      viranoradev@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <p className="text-[#FAEDCD]/60 max-w-2xl mx-auto">
                All communication is handled with the same privacy-first approach 
                that defines all Vira products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-transparent to-[#1E1B18]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-[#A5A58D]" />
            <span className="text-sm text-[#A5A58D] font-medium">BACK TO PRODUCTS</span>
            <Globe className="w-6 h-6 text-[#A5A58D]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore Our <span className="text-[#D4A373]">AI Solutions</span>
          </h2>
          
          <p className="text-xl text-[#FAEDCD]/80 mb-8 max-w-2xl mx-auto">
            Ready to see what we're building? Check out our suite of privacy-first AI applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/"
              className="bg-[#D4A373] text-[#1E1B18] font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#D4A373]/90 hover:scale-105 inline-flex items-center gap-2"
            >
              View All Products
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a 
              href="/viraflow"
              className="bg-transparent text-[#FAEDCD] font-medium px-8 py-4 rounded-lg border border-[#A5A58D]/30 hover:bg-white/5 hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              Try ViraFlow
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
