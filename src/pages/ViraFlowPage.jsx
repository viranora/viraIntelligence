import React, { useState, useEffect } from 'react';
import { Smartphone, Zap, WifiOff, Lock, Eye, Download, ArrowRight, Sparkles } from 'lucide-react';

const ViraFlowPage = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Saati güncelle
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

  // Animasyonlu telefon mockup'ı için
  const PhoneMockup = () => {
    const [activeTask, setActiveTask] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveTask((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    const demoTasks = [
      { id: 1, title: 'Write launch copy', column: 'todo', color: 'bg-[#A5A58D]' },
      { id: 2, title: 'Design email template', column: 'todo', color: 'bg-[#A5A58D]' },
      { id: 3, title: 'Final QA check', column: 'todo', color: 'bg-[#A5A58D]' },
      { id: 4, title: 'App store assets', column: 'doing', color: 'bg-[#D4A373]' },
      { id: 5, title: 'Demo video script', column: 'doing', color: 'bg-[#D4A373]' },
      { id: 6, title: 'Press release', column: 'done', color: 'bg-[#FAEDCD]/30' },
    ];

    return (
      <div className="relative w-80 h-[640px]">
        {/* Floating Animation Elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#D4A373]/10 blur-xl animate-pulse"></div>
        <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-[#A5A58D]/10 blur-xl animate-pulse delay-1000"></div>
        
        {/* Phone Frame with Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2926] to-[#1E1B18] rounded-[3rem] border-[14px] border-[#2D2926] shadow-2xl animate-float">
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
            {/* App Header with Animation */}
            <div className="p-6 bg-gradient-to-r from-[#D4A373]/15 to-[#A5A58D]/15 relative overflow-hidden">
              {/* Animated Background Lines */}
              <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-[#D4A373]/10 to-transparent"
                    style={{
                      top: `${30 + i * 20}%`,
                      left: '-10%',
                      width: '120%',
                      animation: `moveLine ${15 + i * 5}s linear infinite`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xl">ViraFlow</h4>
                  <p className="text-sm text-[#FAEDCD]/60">Product Launch • 6 tasks</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D4A373]/20 flex items-center justify-center animate-pulse">
                  <Zap className="w-5 h-5 text-[#D4A373]" />
                </div>
              </div>
            </div>

            {/* Kanban Board with Animation */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-6">
                <h5 className="font-bold text-lg">Today's Tasks</h5>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D4A373] animate-ping"></div>
                  <span className="text-xs text-[#FAEDCD]/40">AI Processing...</span>
                </div>
              </div>

              {/* Animated Kanban Columns */}
              <div className="grid grid-cols-3 gap-4">
                {/* To Do Column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#A5A58D] animate-pulse"></div>
                    <span className="text-sm font-medium">To Do</span>
                    <span className="ml-auto text-xs text-[#FAEDCD]/40">3</span>
                  </div>
                  <div className="space-y-2">
                    {demoTasks.filter(t => t.column === 'todo').map((task, i) => (
                      <div 
                        key={task.id}
                        className={`p-3 rounded-xl bg-[#2D2926] border ${activeTask === i ? 'border-[#D4A373]/50' : 'border-white/5'} transition-all duration-500`}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full ${task.color} mt-1.5`}></div>
                          <span className="text-sm">{task.title}</span>
                        </div>
                        {activeTask === i && (
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-xs text-[#FAEDCD]/40">AI analyzing...</div>
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#D4A373] to-[#A5A58D] animate-spin"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doing Column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#D4A373] animate-pulse"></div>
                    <span className="text-sm font-medium">Doing</span>
                    <span className="ml-auto text-xs text-[#FAEDCD]/40">2</span>
                  </div>
                  <div className="space-y-2">
                    {demoTasks.filter(t => t.column === 'doing').map((task, i) => (
                      <div 
                        key={task.id}
                        className={`p-3 rounded-xl bg-[#2D2926] border ${activeTask === i + 3 ? 'border-[#D4A373]/50' : 'border-white/5'} transition-all duration-500`}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full ${task.color} mt-1.5`}></div>
                          <span className="text-sm">{task.title}</span>
                        </div>
                        {activeTask === i + 3 && (
                          <div className="mt-2 flex items-center gap-2">
                            <div className="text-xs text-[#D4A373]">In progress →</div>
                            <div className="w-3 h-0.5 bg-[#D4A373] animate-pulse rounded-full"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Done Column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FAEDCD]/30 animate-pulse"></div>
                    <span className="text-sm font-medium">Done</span>
                    <span className="ml-auto text-xs text-[#FAEDCD]/40">1</span>
                  </div>
                  <div className="space-y-2">
                    {demoTasks.filter(t => t.column === 'done').map((task, i) => (
                      <div 
                        key={task.id}
                        className="p-3 rounded-xl bg-[#2D2926]/50 border border-white/5 opacity-70"
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full ${task.color} mt-1.5`}></div>
                          <span className="text-sm line-through">{task.title}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-1">
                          <span className="text-xs text-[#A5A58D]">Completed</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated AI Assistant */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4A373] to-[#A5A58D] flex items-center justify-center shadow-xl animate-bounce">
                    <div className="w-7 h-7 bg-[#1E1B18] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#D4A373] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  {/* Pulsing Rings */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-[#D4A373]/30 animate-ping"></div>
                  <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-[#D4A373]/20 animate-ping delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Task Moving Indicator */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-[#D4A373]"></div>
            <div className="text-sm text-[#D4A373] font-medium">Task moving →</div>
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
                  Flagship Product
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
                <button className="bg-[#D4A373] text-[#1E1B18] font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#D4A373]/90 active:scale-95 shadow-lg flex items-center gap-3 text-lg animate-pulse hover:animate-none">
                  <Download className="w-5 h-5" />
                  Download Now
                </button>
                <button className="bg-transparent text-[#FAEDCD] font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/5 active:scale-95 border border-[#A5A58D]/30">
                  Watch Demo
                </button>
              </div>
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
              <h4 className="text-2xl font-bold mb-4">Ready to get started?</h4>
              <p className="text-[#FAEDCD]/70 mb-6">
                Join thousands of users who have transformed their productivity with ViraFlow.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-[#D4A373] text-[#1E1B18] font-semibold py-4 rounded-lg transition-all duration-300 hover:bg-[#D4A373]/90 active:scale-95 hover:scale-105">
                  Download for iOS
                </button>
                <button className="w-full bg-transparent text-[#FAEDCD] font-medium py-4 rounded-lg transition-all duration-300 hover:bg-white/5 border border-[#A5A58D]/30 hover:border-[#A5A58D]/50">
                  Download for Android
                </button>
              </div>
              <p className="text-sm text-[#FAEDCD]/40 mt-4 text-center">
                Free 14-day trial • No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViraFlowPage;
