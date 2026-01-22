import React from 'react';
import { 
  Users, 
  Briefcase, 
  MessageSquare, 
  Bell, 
  Search, 
  Shield, 
  Smartphone, 
  Database,
  Download 
} from 'lucide-react';

const ViraSocialPage = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "User & Profile Management",
      desc: "Distinct roles for Job Seekers & Employers. Customize bios, upload avatars, and manage CV links securely."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Smart Social Feed",
      desc: "Dual Mode filtering: Switch between Social updates and Job Listings. Text-first design for focused reading."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Discovery & Networking",
      desc: "Expand your network by searching usernames. Follow professionals and curate your personal feed."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Notifications & Utilities",
      desc: "Real-time alerts for likes and comments. Bookmark job listings to your personal archive."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#1E1B18]">
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* HERO SECTION */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A5A58D]/10 border border-[#A5A58D]/20 mb-8">
                <Smartphone className="w-4 h-4 text-[#A5A58D]" />
                <span className="text-sm font-semibold text-[#A5A58D]">
                  Mobile Application • React Native
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#FAEDCD]">
                Minimalist <br />
                <span className="bg-gradient-to-r from-[#A5A58D] to-[#D4A373] bg-clip-text text-transparent">
                  Career Networking
                </span>
              </h1>
              
              <p className="text-xl text-[#FAEDCD]/70 mb-8 leading-relaxed">
                viraSocial bridges the gap between social interaction and professional networking. 
                Share thoughts, post job opportunities, and connect with talent without the visual noise.
              </p>

              {/* DOWNLOAD BUTTON */}
              <div className="mb-8">
                <a 
                  href="https://github.com/viranora/viraSocial/releases/tag/v1.0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#A5A58D] text-[#1E1B18] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#A5A58D]/90 hover:scale-105 shadow-lg shadow-[#A5A58D]/20"
                >
                  <Download className="w-6 h-6" />
                  Download APK (v1.0.0)
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                 {/* Tech Stack Badges */}
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-[#61DAFB]"></div>
                    <span className="text-[#FAEDCD]/80 text-sm">React Native</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-[#FFCA28]"></div>
                    <span className="text-[#FAEDCD]/80 text-sm">Firebase</span>
                </div>
              </div>
            </div>

            {/* PHONE MOCKUP (CSS BASED) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#A5A58D]/20 rounded-full blur-3xl"></div>
              
              {/* Phone Frame */}
              <div className="relative w-[300px] h-[600px] bg-[#2D2926] border-[8px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="h-6 bg-[#1a1a1a] w-full flex justify-center items-center">
                    <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                </div>
                
                {/* App Header */}
                <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-[#1E1B18]">
                    <span className="font-bold text-[#FAEDCD] italic text-lg">viraSocial</span>
                    <Bell className="w-5 h-5 text-[#A5A58D]" />
                </div>

                {/* App Content Simulation */}
                <div className="p-4 space-y-4 flex-1 bg-[#1E1B18]">
                    {/* Post 1 */}
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="flex gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#A5A58D]/20"></div>
                            <div>
                                <div className="w-24 h-3 bg-[#FAEDCD]/20 rounded mb-1"></div>
                                <div className="w-16 h-2 bg-[#FAEDCD]/10 rounded"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-2 bg-[#FAEDCD]/10 rounded"></div>
                            <div className="w-3/4 h-2 bg-[#FAEDCD]/10 rounded"></div>
                        </div>
                        <div className="flex gap-4 mt-3">
                            <div className="w-4 h-4 rounded-full border border-[#FAEDCD]/20"></div>
                            <div className="w-4 h-4 rounded-full border border-[#FAEDCD]/20"></div>
                        </div>
                    </div>

                    {/* Post 2 (Job) */}
                    <div className="bg-[#FFF8E1]/5 p-4 rounded-xl border border-[#D4A373]/20">
                         <div className="flex justify-between mb-2">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#D4A373]/20"></div>
                                <div>
                                    <div className="w-20 h-3 bg-[#FAEDCD]/20 rounded mb-1"></div>
                                    <div className="px-2 py-0.5 bg-[#D4A373]/20 rounded text-[8px] text-[#D4A373]">EMPLOYER</div>
                                </div>
                            </div>
                            <div className="w-4 h-4 text-[#D4A373]"><Briefcase size={14}/></div>
                        </div>
                        <div className="space-y-2 mb-3">
                            <div className="w-full h-2 bg-[#FAEDCD]/10 rounded"></div>
                            <div className="w-full h-2 bg-[#FAEDCD]/10 rounded"></div>
                        </div>
                        <div className="w-full py-2 bg-[#D4A373]/10 rounded text-center text-[10px] text-[#D4A373]">Apply Now</div>
                    </div>
                </div>

                {/* Bottom Tab Bar */}
                <div className="h-16 border-t border-white/5 bg-[#1E1B18] flex justify-around items-center px-4">
                    <div className="w-6 h-6 rounded bg-[#A5A58D]"></div>
                    <div className="w-6 h-6 rounded bg-[#FAEDCD]/10"></div>
                    <div className="w-10 h-10 rounded-full bg-[#A5A58D]/20 flex items-center justify-center text-[#A5A58D]">+</div>
                    <div className="w-6 h-6 rounded bg-[#FAEDCD]/10"></div>
                    <div className="w-6 h-6 rounded-full border border-[#FAEDCD]/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold mb-12 text-[#FAEDCD] flex items-center gap-3">
                <span className="w-8 h-1 bg-[#A5A58D] rounded-full"></span>
                Key Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
                        <div className="w-12 h-12 bg-[#A5A58D]/10 rounded-xl flex items-center justify-center text-[#A5A58D] mb-6 group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#FAEDCD] mb-3">{feature.title}</h3>
                        <p className="text-[#FAEDCD]/60 text-sm leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
          </div>

          {/* PRIVACY & SECURITY SECTION */}
          <div className="bg-gradient-to-br from-[#2D2926] to-[#1E1B18] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A373]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-[#D4A373] font-semibold">
                        <Shield className="w-5 h-5" />
                        <span>Privacy Focused</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#FAEDCD]">
                        Your Career, <br/>Secure & Private.
                    </h2>
                    <p className="text-[#FAEDCD]/70">
                        We respect your data. With permanent account deletion options and GDPR compliant architecture, viraSocial gives you full control over your digital footprint.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-[#FAEDCD]/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#A5A58D]"></div>
                            No image clutter, text-first approach
                        </li>
                        <li className="flex items-center gap-3 text-[#FAEDCD]/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#A5A58D]"></div>
                            Secure authentication via Firebase
                        </li>
                    </ul>
                </div>
                
                <div className="bg-black/20 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <Database className="w-12 h-12 text-[#D4A373] mb-6" />
                    <h4 className="text-xl font-bold text-[#FAEDCD] mb-2">Tech Infrastructure</h4>
                    <p className="text-[#FAEDCD]/60">
                        Built on robust Firebase Firestore database with real-time listeners for instant chat-like interaction on posts.
                    </p>
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ViraSocialPage;