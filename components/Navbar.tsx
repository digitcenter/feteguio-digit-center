
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, Home, Info, Briefcase, Layout, GraduationCap, Mail } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Accueil', path: '/', icon: <Home size={20} /> },
    { name: 'À Propos', path: '/about', icon: <Info size={20} /> },
    { name: 'Services', path: '/services', icon: <Briefcase size={20} /> },
    { name: 'Portfolio', path: '/portfolio', icon: <Layout size={20} /> },
    { name: 'Formations', path: '/training', icon: <GraduationCap size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 shadow-xl py-2 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
              <Logo className="h-10 md:h-12" />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-all duration-300 relative group ${isActive(link.path) ? 'text-[#FF6600]' : 'text-slate-600 hover:text-[#0084FF]'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF6600] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
              <Link to="/contact" className="bg-[#0084FF] text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-[#FF6600] transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center gap-2 group">
                <Phone size={16} className="group-hover:animate-tada" /> Devis Gratuit
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${isOpen ? 'bg-slate-100 text-[#FF6600]' : 'text-slate-600 hover:bg-slate-50'}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide-out Mobile Menu Container */}
      <div 
        className={`fixed inset-0 z-[110] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop overlay */}
        <div 
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Side Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-in-out transform flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header of Sidebar */}
          <div className="p-6 flex justify-between items-center border-b border-slate-50">
            <Logo className="h-8" showText={true} />
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg bg-slate-50 text-slate-500 hover:text-[#FF6600] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow overflow-y-auto py-8 px-6 space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 px-4">Menu de navigation</p>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${isActive(link.path) ? 'bg-orange-50 text-[#FF6600]' : 'text-slate-600 hover:bg-slate-50'}`}
                onClick={() => setIsOpen(false)}
              >
                <div className={`p-2.5 rounded-xl transition-colors duration-300 ${isActive(link.path) ? 'bg-white shadow-sm text-[#FF6600]' : 'bg-slate-100 text-slate-400 group-hover:text-[#0084FF]'}`}>
                  {link.icon}
                </div>
                <span className="font-black text-lg flex-grow">{link.name}</span>
                <ChevronRight size={18} className={`transition-transform duration-300 ${isActive(link.path) ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
              </Link>
            ))}
          </div>

          {/* Footer of Sidebar */}
          <div className="p-8 border-t border-slate-50 bg-slate-50/50 space-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Besoin d'un expert ?</span>
              <a 
                href="tel:+2250585339243" 
                className="text-lg font-black text-slate-900 hover:text-[#0084FF] transition-colors flex items-center gap-2"
              >
                <Phone size={18} className="text-[#0084FF]" /> +225 05 85 33 92 43
              </a>
            </div>
            <Link 
              to="/contact" 
              className="w-full py-5 bg-[#0084FF] text-white rounded-2xl font-black text-center shadow-xl shadow-blue-500/20 hover:bg-[#FF6600] transition-all flex items-center justify-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              Demander un Devis <ChevronRight size={20} />
            </Link>
            
            {/* Small Footer Text */}
            <div className="pt-2 text-center">
              <p className="text-[10px] font-bold text-slate-400">© {new Date().getFullYear()} FETEGUIO DIGIT-CENTER</p>
              <p className="text-[9px] font-medium text-slate-400">Bouaké, Côte d'Ivoire</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
