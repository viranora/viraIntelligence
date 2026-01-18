import React from 'react';
import { ArrowRight, Sparkles, Brain, Shield, Smartphone, Users } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-overview');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24 py-16 md:py-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,163,115,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_70%_80%,rgba(165,165,141,0.2),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A373]/10 border border-[#D4A373]/20 mb-8">
              <Sparkles className="w-4 h-4 text-[#D4A373]" />
              <span className="text-sm font-medium text-[#D4A373]">
                AI-Powered Applications
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block">Human-Centered</span>
              <span className="bg-gradient-to-r from-[#D4A373] to-[#A5A58D] bg-clip-text text-transparent">
                AI Solutions
              </span>
              <span className="block mt-2 text-3xl md:text-4xl text-[#FAEDCD]/70">
                That Actually Work
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-[#FAEDCD]/80 mb-8 leading-relaxed">
              We build intuitive AI applications that enhance productivity while fiercely protecting your privacy.
            </p>

            {/* Description */}
            <p className="text-lg text-[#FAEDCD]/60 mb-12 leading-relaxed">
              Vira Intelligence specializes in creating practical, privacy-first AI tools 
              for everyday challenges. From personal productivity to team collaboration, 
              we make AI accessible, useful, and secure.
            </p>

            {/* CTA Button - Tek Buton */}
            <div className="flex">
              <button 
                onClick={scrollToProducts}
                className="bg-[#D4A373] text-[#1E1B18] font-semibold px-10 py-5 rounded-lg transition-all duration-300 hover:bg-[#D4A373]/90 active:scale-95 shadow-lg flex items-center gap-3 text-lg group w-full sm:w-auto justify-center"
              >
                <span className="text-xl">View Our Products</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Feature Icons */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: 'Privacy by Design',
                description: 'Every app built with zero-knowledge architecture',
                color: 'from-[#D4A373]/20 to-[#D4A373]/5'
              },
              {
                icon: Brain,
                title: 'Practical AI',
                description: 'Solutions for real-world problems',
                color: 'from-[#A5A58D]/20 to-[#A5A58D]/5'
              },
              {
                icon: Smartphone,
                title: 'Native Apps',
                description: 'iOS & Android with offline support',
                color: 'from-[#D4A373]/20 to-[#D4A373]/5'
              },
              {
                icon: Users,
                title: 'Team Ready',
                description: 'Scalable for individuals and teams',
                color: 'from-[#A5A58D]/20 to-[#A5A58D]/5'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} border border-white/5 hover:border-[#D4A373]/30 transition-all duration-300 group hover:scale-[1.02]`}
              >
                <feature.icon className="w-10 h-10 text-[#D4A373] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2 group-hover:text-[#D4A373] transition-colors">{feature.title}</h3>
                <p className="text-sm text-[#FAEDCD]/60 group-hover:text-[#FAEDCD]/70 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="w-6 h-10 border-2 border-[#D4A373]/30 rounded-full flex justify-center group-hover:border-[#D4A373]/50 transition-colors">
          <div className="w-1 h-3 bg-[#D4A373]/50 rounded-full mt-2 group-hover:bg-[#D4A373] transition-colors"></div>
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#FAEDCD]/40 group-hover:text-[#D4A373] transition-colors whitespace-nowrap">
          View Products
        </div>
      </div>
    </section>
  );
};

export default Hero;