import React from 'react';
import { Clock, BarChart3, Target, Sparkles, Zap, Calendar } from 'lucide-react';

const ViraTimePage = () => {
  return (
    <div className="pt-24">
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4A373]/10 border border-[#D4A373]/20 mb-8">
              <Sparkles className="w-5 h-5 text-[#D4A373]" />
              <span className="text-lg font-semibold text-[#D4A373]">
                Coming Soon
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="block">Time Tracking with</span>
              <span className="bg-gradient-to-r from-[#D4A373] to-[#A5A58D] bg-clip-text text-transparent">
                AI Insights
              </span>
            </h1>
            
            <p className="text-xl text-[#FAEDCD]/80 max-w-3xl mx-auto mb-12">
              Intelligent time tracking with AI-powered insights and productivity analytics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Meet ViraTime</h2>
                <p className="text-[#FAEDCD]/70 leading-relaxed">
                  ViraTime goes beyond simple time tracking. Our AI analyzes your work patterns, 
                  identifies productivity bottlenecks, and provides actionable insights to help you work smarter.
                </p>
                <p className="text-[#FAEDCD]/70 leading-relaxed">
                  All processed locally on your device. Your time data never leaves your computer.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D4A373]/10">
                    <Target className="w-6 h-6 text-[#D4A373]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Goals</h3>
                    <p className="text-[#FAEDCD]/70">AI-powered goal setting and progress tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#A5A58D]/10">
                    <BarChart3 className="w-6 h-6 text-[#A5A58D]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Deep Analytics</h3>
                    <p className="text-[#FAEDCD]/70">Understand your productivity patterns with detailed insights</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D4A373]/10">
                    <Zap className="w-6 h-6 text-[#D4A373]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Focus Assistant</h3>
                    <p className="text-[#FAEDCD]/70">AI that helps you maintain focus and avoid distractions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#2D2926] to-[#1E1B18] border border-white/10 rounded-3xl p-8">
                <div className="space-y-6 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 rounded-2xl bg-[#D4A373]/10">
                      <Clock className="w-12 h-12 text-[#D4A373]" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">Coming Soon</h4>
                      <p className="text-[#FAEDCD]/60">Time tracking reimagined</p>
                    </div>
                  </div>
                  
                  <div className="py-8 border-t border-b border-white/10">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-[#D4A373]" />
                      <span className="text-sm text-[#FAEDCD]/60">Expected Launch</span>
                    </div>
                    <p className="text-3xl font-bold text-[#D4A373]">Q3 2026</p>
                  </div>
                  
                  <p className="text-sm text-[#FAEDCD]/60 leading-relaxed">
                    ViraTime is in early development. Follow us on{' '}
                    <a href="https://github.com/Vira-Intelligence" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:underline">
                      GitHub
                    </a>
                    {' '}for progress updates.
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

export default ViraTimePage;