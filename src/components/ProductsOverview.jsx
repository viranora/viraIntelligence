import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Users, Clock, ArrowRight } from 'lucide-react';

const ProductsOverview = () => {
  const products = [
    {
      name: 'ViraFlow',
      description: 'AI-powered productivity & task management with privacy-first design.',
      icon: Zap,
      status: 'Available Now',
      link: '/viraflow',
      color: 'from-[#D4A373]/20 to-[#D4A373]/5',
      borderColor: 'border-[#D4A373]/30'
    },
    {
      name: 'ViraSocial',
      description: 'Private, intelligent social networking with AI-curated content.',
      icon: Users,
      status: 'In Development',
      link: '/virasocial',
      color: 'from-[#A5A58D]/20 to-[#A5A58D]/5',
      borderColor: 'border-[#A5A58D]/30'
    },
    {
      name: 'ViraTime',
      description: 'Smart time tracking with AI-powered insights and analytics.',
      icon: Clock,
      status: 'Coming Soon',
      link: '/viratime',
      color: 'from-[#D4A373]/20 to-[#D4A373]/5',
      borderColor: 'border-[#D4A373]/30'
    }
  ];

  return (
    <section id="products-overview" className="px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-b from-transparent to-[#1E1B18]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-[#D4A373] to-[#A5A58D] bg-clip-text text-transparent">Product Suite</span>
          </h2>
          <p className="text-xl text-[#FAEDCD]/80 max-w-3xl mx-auto">
            A growing ecosystem of intelligent applications designed to work seamlessly together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className={`p-8 rounded-3xl border ${product.borderColor} bg-gradient-to-br ${product.color} hover:scale-[1.02] transition-all duration-300 group animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  <product.icon className="w-8 h-8 text-[#D4A373] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-[#D4A373] transition-colors">{product.name}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full mt-2 inline-block transition-colors ${
                    product.status === 'Available Now' 
                      ? 'bg-[#D4A373]/20 text-[#D4A373] group-hover:bg-[#D4A373]/30'
                      : 'bg-[#A5A58D]/20 text-[#A5A58D] group-hover:bg-[#A5A58D]/30'
                  }`}>
                    {product.status}
                  </span>
                </div>
              </div>
              
              <p className="text-[#FAEDCD]/70 mb-6 leading-relaxed group-hover:text-[#FAEDCD]/80 transition-colors">
                {product.description}
              </p>
              
              <div className="flex items-center text-[#D4A373] font-medium group-hover:gap-3 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#FAEDCD]/60 max-w-2xl mx-auto">
            All Vira products are built on our core principles: Privacy-first, Offline-capable, 
            AI-enhanced, and Human-centered design.
          </p>
          
          {/* Back to top button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 mt-8 text-[#FAEDCD]/60 hover:text-[#D4A373] transition-colors text-sm"
          >
            <ArrowRight className="w-4 h-4 rotate-90" />
            Back to top
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
