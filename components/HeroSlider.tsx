
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    tag: "INNOVATION IA",
    title: "L'Intelligence Artificielle au cœur de votre PME",
    desc: "Optimisez votre productivité avec nos solutions d'automatisation intelligente basées sur les derniers LLM.",
    btnText: "Solutions IA",
    link: "/services",
    accent: "bg-[#FF6600]"
  },
  {
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1600",
    tag: "COMMUNITY MANAGEMENT",
    title: "Propulsez votre Visibilité Sociale",
    desc: "Stratégies d'engagement et gestion de communauté native pour une image de marque forte et virale.",
    btnText: "Booster mes Réseaux",
    link: "/services",
    accent: "bg-[#0084FF]"
  },
  {
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=1600",
    tag: "ANGLAIS PROFESSIONNEL",
    title: "English for Tech: Accent Natif US",
    desc: "Une immersion totale en anglais américain pour le business : négociation, présentations et étiquette.",
    btnText: "Devenir Bilingue",
    link: "/training",
    accent: "bg-[#FF6600]"
  },
  {
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1600",
    tag: "VIBE CODING",
    title: "Apprenez le Vibe Coding assisté par IA",
    desc: "Développez des applications 10x plus vite en maîtrisant les outils de programmation de demain.",
    btnText: "Maîtriser le Code",
    link: "/training",
    accent: "bg-[#0084FF]"
  },
  {
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1600",
    tag: "BUREAUTIQUE PRO",
    title: "Maîtrisez les Outils de Collaboration",
    desc: "Formations avancées sur Google Workspace et Microsoft 365 pour une efficacité irréprochable.",
    btnText: "Se Former",
    link: "/training",
    accent: "bg-[#FF6600]"
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [current, isTransitioning]);

  const handleNext = useCallback(() => {
    goToSlide(current === slides.length - 1 ? 0 : current + 1);
  }, [current, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(current === 0 ? slides.length - 1 : current - 1);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="relative h-screen min-h-[750px] w-full overflow-hidden bg-slate-950">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            idx === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className={`h-full w-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-80 animate-kenburns' : 'opacity-0'}`} 
            />
            {/* Optimized Overlays: High visibility for image, high contrast for text using multiple layers */}
            <div className="absolute inset-0 bg-slate-950/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent"></div>
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
            <div className={`max-w-4xl space-y-8 transition-all duration-1000 delay-300 ${
              idx === current ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`px-6 py-2 rounded-full text-white text-[10px] font-black tracking-[0.3em] flex items-center gap-2 shadow-2xl ${slide.accent} uppercase border border-white/20`}>
                  <Zap size={14} fill="white" /> {slide.tag}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] uppercase tracking-tighter">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={`inline-block mr-3 ${
                    ['ia', 'digital', 'vibe', 'english', 'code', 'natif', 'pme'].some(k => word.toLowerCase().includes(k))
                    ? 'text-[#FF6600]' : ''
                  }`}>
                    {word}
                  </span>
                ))}
              </h1>

              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                {slide.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link 
                  to={slide.link} 
                  className={`px-10 py-5 ${slide.accent} text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 group border border-white/20`}
                >
                  {slide.btnText} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-black text-sm uppercase tracking-widest border border-white/30 hover:bg-white/20 transition-all flex items-center justify-center shadow-2xl"
                >
                  Nos Réalisations
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modern Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button onClick={handlePrev} className="p-4 rounded-full bg-white/10 hover:bg-white/30 text-white border border-white/20 backdrop-blur-md transition-all">
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-4 items-center">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goToSlide(i)} className={`h-2 transition-all duration-700 rounded-full ${i === current ? 'bg-[#FF6600] w-12 shadow-[0_0_20px_#FF6600]' : 'bg-white/30 w-4 hover:bg-white/50'}`} />
          ))}
        </div>
        <button onClick={handleNext} className="p-4 rounded-full bg-white/10 hover:bg-white/30 text-white border border-white/20 backdrop-blur-md transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
