import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // Ana sayfadaysa, en üste scroll et
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Başka sayfadaysa, ana sayfaya git
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'ViraFlow', href: '/viraflow' },
    { name: 'ViraSocial', href: '/virasocial', comingSoon: true },
    { name: 'ViraTime', href: '/viratime', comingSoon: true },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-6xl rounded-2xl transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-[#2D2926]/70 border border-white/10 shadow-xl' : 'bg-[#2D2926]/90'} px-6 py-3`}>
      <div className="flex items-center justify-between">
        {/* Logo - Tıklanabilir ve ana sayfaya gider */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity group"
        >
          <Sparkles className="w-6 h-6 text-[#D4A373] group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold text-[#D4A373] tracking-tight group-hover:text-[#D4A373]/90 transition-colors">
            Vira Intelligence
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative group text-[#FAEDCD]/80 hover:text-[#FAEDCD] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-medium">{item.name}</span>
              {item.comingSoon && (
                <span className="absolute -top-2 -right-6 text-xs text-[#A5A58D]">
                  Soon
                </span>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A373] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Link to="/viraflow" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="bg-transparent text-[#D4A373] font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:bg-[#D4A373]/10 active:scale-95 border border-[#D4A373]/30">
              Try ViraFlow
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#FAEDCD]" />
          ) : (
            <Menu className="w-6 h-6 text-[#FAEDCD]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10 animate-fade-up">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-[#FAEDCD]">{item.name}</span>
                {item.comingSoon && (
                  <span className="text-xs text-[#A5A58D] bg-[#A5A58D]/10 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </Link>
            ))}
            <Link to="/viraflow" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-transparent text-[#D4A373] font-medium px-6 py-2 rounded-lg mt-4 border border-[#D4A373]/30">
                Try ViraFlow
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
