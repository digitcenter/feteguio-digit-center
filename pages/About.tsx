
import React from 'react';
import { Target, Eye, ShieldCheck, Zap, HeartHandshake, Award, MapPin, Linkedin, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const values = [
    { title: "Innovation", icon: <Zap className="text-[#FF6600]" />, desc: "Toujours à la pointe des dernières technologies." },
    { title: "Performance", icon: <Award className="text-[#0084FF]" />, desc: "Des résultats concrets et mesurables pour nos clients." },
    { title: "Engagement", icon: <HeartHandshake className="text-[#FF6600]" />, desc: "Un accompagnement personnalisé à chaque étape." },
    { title: "Intégrité", icon: <ShieldCheck className="text-[#0084FF]" />, desc: "Une transparence totale et une éthique irréprochable." }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="À Propos" 
        description="Qui est SORO FETEGUE DAVID ? Découvrez l'histoire de FETEGUIO DIGIT-CENTER, nos valeurs et notre mission à Bouaké, Côte d'Ivoire."
        keywords="Soro Fetegue David, agence digitale Bouaké, transformation numérique Afrique"
      />
      
      {/* Hero Header with High Visibility and Contrast */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover" 
            alt="Bureau moderne FETEGUIO" 
          />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-blue text-white text-xs font-black uppercase tracking-[0.3em] shadow-xl animate-in fade-in slide-in-from-bottom duration-700 border border-white/20">
             Fierté Ivoirienne
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            L'Excellence Digitale depuis <span className="text-brand-orange">Bouaké</span>
          </h1>
          <p className="text-white max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-bold drop-shadow-[0_5px_10px_rgba(0,0,0,0.9)]">
            FETEGUIO DIGIT-CENTER est le fruit de la vision portée par <span className="text-[#0084FF] font-black">SORO FETEGUE DAVID</span>.
          </p>
          <div className="flex justify-center pt-4">
            <div className="h-2 w-32 bg-[#FF6600] rounded-full shadow-[0_0_25px_#FF6600]"></div>
          </div>
        </div>
      </section>

      {/* CEO Circle Spotlight Section - Professional & Modern */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <div className="relative mb-12">
            <div className="absolute -inset-8 bg-brand-blue/10 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -inset-2 border-2 border-dashed border-brand-orange/40 rounded-full animate-[spin_30s_linear_infinite]"></div>
            
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[10px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] ring-4 ring-brand-blue/10 group">
              <img 
                src="founder.jpeg" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="SORO FETEGUE DAVID" 
              />
            </div>
            <div className="absolute bottom-6 -right-6 bg-brand-orange text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl border-4 border-white transform rotate-12">
              Fondateur & CEO
            </div>
          </div>

          <div className="space-y-8 max-w-4xl">
            <div className="space-y-4">
              <span className="text-brand-blue font-black uppercase tracking-[0.5em] text-[10px]">Leader Visionnaire</span>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none drop-shadow-sm">
                SORO <span className="text-brand-blue">FETEGUE</span> <span className="text-brand-orange">DAVID</span>
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg md:text-2xl leading-relaxed font-medium">
              Entrepreneur, expert en Intelligence Artificielle et consultant marketing bilingue, David est le moteur de l'innovation chez <span className="text-brand-blue font-black">FETEGUIO DIGIT-CENTER</span>. Sa vision : démocratiser l'excellence numérique en Côte d'Ivoire.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
               <span className="px-8 py-4 bg-slate-50 border-2 border-slate-100 rounded-full font-black text-[10px] tracking-widest text-[#0084FF] uppercase hover:border-brand-blue hover:bg-white transition-all shadow-sm">Expert en IA</span>
               <span className="px-8 py-4 bg-slate-50 border-2 border-slate-100 rounded-full font-black text-[10px] tracking-widest text-[#FF6600] uppercase hover:border-brand-orange hover:bg-white transition-all shadow-sm">Stratège Digital</span>
               <span className="px-8 py-4 bg-slate-50 border-2 border-slate-100 rounded-full font-black text-[10px] tracking-widest text-[#0084FF] uppercase hover:border-brand-blue hover:bg-white transition-all shadow-sm">Bilingue Pro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision/Mission with High Contrast Background Images */}
      <section className="py-32 relative overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0 opacity-50">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Vision" />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div className="p-12 rounded-[60px] bg-white/95 backdrop-blur-md border-2 border-white shadow-xl space-y-8 hover:-translate-y-2 transition-all group">
            <div className="w-20 h-20 rounded-3xl bg-brand-blue flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform">
              <Target size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 uppercase">Notre Mission</h2>
            <p className="text-slate-600 leading-relaxed text-xl font-medium">
              Accélérer la croissance des entreprises via le digital et former la nouvelle génération d'experts aux outils de demain.
            </p>
          </div>
          <div className="p-12 rounded-[60px] bg-white/95 backdrop-blur-md border-2 border-white shadow-xl space-y-8 hover:-translate-y-2 transition-all group">
            <div className="w-20 h-20 rounded-3xl bg-brand-orange flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform">
              <Eye size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 uppercase">Notre Vision</h2>
            <p className="text-slate-600 leading-relaxed text-xl font-medium">
              Faire de Bouaké un carrefour technologique incontournable en Afrique de l'Ouest d'ici 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section with Mesh and Higher Contrast Overlay */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Values" />
        </div>
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[#FF6600] font-black uppercase tracking-[0.5em] text-xs">L'Esprit FETEGUIO</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight drop-shadow-lg">Nos Valeurs</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => (
              <div key={i} className="p-12 rounded-[40px] bg-white/5 border border-white/10 hover:border-brand-blue hover:bg-white/10 transition-all text-center space-y-6 group">
                <div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center mx-auto shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(v.icon as React.ReactElement<any>, { size: 40 })}
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight group-hover:text-brand-blue transition-colors">{v.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
