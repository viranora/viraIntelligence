import React from 'react';
import { Users, Lock, EyeOff, Sparkles, Calendar } from 'lucide-react';

const ViraSocialPage = () => {
  return (
    <div className="pt-24">
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A5A58D]/10 border border-[#A5A58D]/20 mb-8">
              <Sparkles className="w-5 h-5 text-[#A5A58D]" />
              <span className="text-lg font-semibold text-[#A5A58D]">
                In Development
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="block">Social Media,</span>
              <span className="bg-gradient-to-r from-[#A5A58D] to-[#D4A373] bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>
            
            <p className="text-xl text-[#FAEDCD]/80 max-w-3xl mx-auto mb-12">
              Private, intelligent social networking with AI-curated content and zero tracking.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">What is ViraSocial?</h2>
                <p className="text-[#FAEDCD]/70 leading-relaxed">
                  ViraSocial is our vision for a better social network—one that respects your privacy, 
                  enhances your connections, and uses AI to show you what actually matters.
                </p>
                <p className="text-[#FAEDCD]/70 leading-relaxed">
                  No algorithms designed to keep you scrolling. No data harvesting. 
                  Just meaningful connections and intelligent content curation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#A5A58D]">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    'End-to-end encrypted messaging',
                    'AI-curated content feed',
                    'No advertisements or tracking',
                    'Focus mode to reduce digital fatigue',
                    'Smart notifications that matter'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#A5A58D] mt-2"></div>
                      <span className="text-[#FAEDCD]/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-[#A5A58D]/10 blur-2xl"></div>
              <div className="bg-gradient-to-br from-[#2D2926] to-[#1E1B18] border border-white/10 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Users className="w-12 h-12 text-[#A5A58D]" />
                    <div>
                      <h4 className="text-2xl font-bold">Join the Waitlist</h4>
                      <p className="text-[#FAEDCD]/60">Be among the first to experience ViraSocial</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-[#FAEDCD] placeholder-[#FAEDCD]/40 focus:outline-none focus:border-[#A5A58D]/50"
                    />
                    <button className="w-full bg-[#A5A58D] text-[#1E1B18] font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-[#A5A58D]/80">
                      Join Waitlist
                    </button>
                  </div>
                  
                  <p className="text-sm text-[#FAEDCD]/40 text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViraSocialPage;
