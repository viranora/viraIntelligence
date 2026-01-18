import React, { useState, useEffect } from 'react';
import { Smartphone, Zap, WifiOff, Lock, Eye, Calendar, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const ViraFlowPage = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Smart Parsing',
      description: 'Think, Write, Release. Our AI extracts tasks, dates, and categories from messy notes automatically.',
      color: 'border-[#D4A373]/30 bg-gradient-to-br from-[#D4A373]/10 to-transparent'
    },
    {
      icon: WifiOff,
      title: 'Offline-First',
      description: "No Connection? We're Here. Automatically switches to Secure Offline mode when internet is lost.",
      color: 'border-[#A5A58D]/30 bg-gradient-to-br from-[#A5A58D]/10 to-transparent'
    },
    {
      icon: Lock,
      title: 'Hardware Security',
      description: 'Your Data, Your Device. Everything is stored in your device\'s hardware encryption layer.',
      color: 'border-[#D4A373]/30 bg-gradient-to-br from-[#D4A373]/10 to-transparent'
    },
    {
      icon: Eye,
      title: 'Visual Kanban',
      description: 'See the Big Picture. Drag-and-drop interface with warm matte design for maximum focus.',
      color: 'border-[#A5A58D]/30 bg-gradient-to-br from-[#A5A58D]/10 to-transparent'
    }
  ];

  const techStack = [
    'React Native',
    'Expo',
    'Google Gemini AI',
    'Python FastAPI',
    'Hardware Encryption',
    'Offline Sync'
  ];

  // Sadeleştirilmiş telefon mockup
  const PhoneMockup = () => {
    const [activeTask, setActiveTask] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveTask((prev) => (prev + 1) % 2);
      }, 4000); // Daha yavaş animasyon
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-80 h-[640px] mx-auto">
        {/* Floating Animation Elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#D4A373]/10 blur-xl animate-pulse"></div>
        <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-[#A5A58D]/10 blur-xl animate-pulse"></div>
        
        {/* Phone Frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2926] to-[#1E1B18] rounded-[3rem] border-[14px] border-[#2D2926] shadow-2xl">
          {/* Notch & Status Bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-7 bg-[#2D2926] rounded-b-2xl flex items-center justify-between px-8">
            <span className="text-xs text-[#FAEDCD]/60 font-medium">{currentTime}</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-1.5 rounded-full bg-[#D4A373]/30"></div>
              <div className="w-4 h-1.5 rounded-full bg-[#D4A373]/50"></div>
              <div className="w-4 h-1.5 rounded-full bg-[#D4A373]/70"></div>
              <div className="w-4 h-1.5 rounded-full bg-[#D4A373]"></div>
            </div>
          </div>
          
          {/* Screen Content */}
          <div className="absolute inset-[14px] rounded-[2.5rem] overflow-hidden bg-[#1E1B18]">
            {/* App Header */}
            <div className="p-6 bg-gradient-to-r from-[#D4A373]/15 to-[#A5A58D]/15">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-2xl">ViraFlow</h4>
                  <p className="text-base text-[#FAEDCD]/60">Product Launch</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#D4A373]/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#D4A373]" />
                </div>
              </div>
            </div>

            {/* Basitleştirilmiş Kanban Board - Sadece 2 görev */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h5 className="font-bold text-xl">Today's Focus</h5>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D4A373] animate-pulse"></div>
                  <span className="text-sm text-[#FAEDCD]/50">AI Active</span>
                </div>
              </div>

              {/* 2 Büyük Task Kartı */}
              <div className="space-y-4">
                {/* Task 1 */}
                <div 
                  className={`p-6 rounded-2xl bg-[#2D2926] border transition-all duration-700 ${
                    activeTask === 0 ? 'border-[#D4A373]/50 scale-105' : 'border-white/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 rounded-full bg-[#A5A58D] mt-1.5"></div>
                    <div className="flex-1">
                      <h6 className="text-lg font-semibold mb-2">Write launch copy</h6>
                      <p className="text-sm text-[#FAEDCD]/50">Marketing • High Priority</p>
                    </div>
                  </div>
                  {activeTask === 0 && (
                    <div className="mt-4 flex items-center gap-3 text-[#D4A373] animate-fade-up">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#A5A58D]"></div>
                      <span className="text-sm font-medium">AI analyzing...</span>
                    </div>
                  )}
                </div>

                {/* Task 2 */}
                <div 
                  className={`p-6 rounded-2xl bg-[#2D2926] border transition-all duration-700 ${
                    activeTask === 1 ? 'border-[#D4A373]/50 scale-105' : 'border-white/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 rounded-full bg-[#D4A373] mt-1.5"></div>
                    <div className="flex-1">
                      <h6 className="text-lg font-semibold mb-2">Design email template</h6>
                      <p className="text-sm text-[#FAEDCD]/50">Design • In Progress</p>
                    </div>
                  </div>
                  {activeTask === 1 && (
                    <div className="mt-4 flex items-center gap-3 text-[#D4A373] animate-fade-up">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-medium">Ready to move →</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Basit AI Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4A373]/20 to-[#A5A58D]/20 border border-[#D4A373]/30">
                  <div className="w-2 h-2 rounded-full bg-[#D4A373] animate-ping"></div>
                  <span className="text-sm text-[#FAEDCD]/70">AI Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-[#1E1B18] to-[#2D2926]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A373]/10 border border-[#D4A373]/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#D4A373]" />
                <span className="text-sm font-medium text-[#D4A373]">
                  Deploy Stage • Beta Testing
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="block">Turn Noise into</span>
                <span className="bg-gradient-to-r from-[#D4A373] to-[#A5A58D] bg-clip-text text-transparent">
                  Clarity
                </span>
              </h1>
              
              <p className="text-xl text-[#FAEDCD]/80 mb-8 leading-relaxed">
                Privacy-first AI that transforms unstructured notes into organized Kanban workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#D4A373]/20 text-[#D4A373] font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#D4A373]/30 border border-[#D4A373]/40 flex items-center justify-center gap-3 text-lg">
                  <Calendar className="w-5 h-5" />
                  Coming to iOS & Android Q1 2026
                </button>
              </div>
              
              <p className="text-sm text-[#FAEDCD]/50 mt-4">
                Currently in final testing phase. App Store & Play Store launch Q1 2026.
              </p>
            </div>
            
            <div className="relative flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-[#2D2926]/30 to-[#1E1B18]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-[#D4A373]">ViraFlow</span>?
            </h2>
            <p className="text-xl text-[#FAEDCD]/80 max-w-3xl mx-auto">
              Built from the ground up for privacy, productivity, and peace of mind.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border ${feature.color} hover:border-[#D4A373]/50 transition-all duration-300 hover:scale-[1.02] animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-white/5 mb-4">
                  <feature.icon className="w-6 h-6 text-[#D4A373]" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-[#FAEDCD]/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-[#2D2926] to-[#1E1B18]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Built with <span className="text-[#D4A373]">Cutting-Edge</span> Technology
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FAEDCD]/70 hover:border-[#D4A373]/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-[#FAEDCD]/60">
                <strong className="text-[#D4A373]">Design Philosophy:</strong> Earth Tones & Warm Minimalist.
                Cognitive load-reducing, matte earth tones and focus-enhancing interface.
              </p>
            </div>
            
            <div className="bg-[#1E1B18] border border-white/10 rounded-3xl p-8 hover:border-[#D4A373]/30 transition-colors">
              <h4 className="text-2xl font-bold mb-4">Ready for Launch</h4>
              <p className="text-[#FAEDCD]/70 mb-6">
                ViraFlow is in final deployment stage. We're preparing for App Store and Play Store release in Q1 2026.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#FAEDCD]/60">
                  <CheckCircle2 className="w-5 h-5 text-[#A5A58D]" />
                  <span>Beta testing completed</span>
                </div>
                <div className="flex items-center gap-3 text-[#FAEDCD]/60">
                  <CheckCircle2 className="w-5 h-5 text-[#A5A58D]" />
                  <span>App Store submission in progress</span>
                </div>
                <div className="flex items-center gap-3 text-[#FAEDCD]/60">
                  <div className="w-5 h-5 rounded-full border-2 border-[#D4A373] border-t-transparent animate-spin"></div>
                  <span>Final deployment phase</span>
                </div>
              </div>
              <p className="text-sm text-[#FAEDCD]/40 mt-6 text-center">
                Expected launch: Q1 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViraFlowPage;