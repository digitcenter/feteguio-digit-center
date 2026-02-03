
import React, { useState, useRef } from 'react';
import { 
  Laptop, LineChart, BrainCircuit, Code, Globe, 
  MessageCircle, Smartphone, Award, X, ArrowRight, 
  Zap, CheckCircle, Shield, ChevronLeft, ChevronRight,
  TrendingUp, Rocket, Sparkles, Target
} from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<null | typeof agencyServices[0]>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const agencyServices = [
    {
      id: "web-dev",
      title: "Développement Web & Mobile",
      shortDesc: "Sites vitrines, e-commerce et applications mobiles performantes pour le marché local et international.",
      details: "Nous créons des architectures robustes et scalables. Nos solutions incluent l'intégration native de paiements locaux (Mobile Money) et une optimisation SEO avancée pour dominer le marché numérique.",
      benefits: [
        "Vitesse de chargement ultra-rapide (Core Web Vitals)",
        "Interface utilisateur intuitive et 100% responsive",
        "Paiements Orange/MTN/Moov intégrés nativement",
        "Maintenance proactive et sécurité haute performance"
      ],
      icon: <Code className="text-white" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      accentIcon: <Rocket size={24} className="text-[#0084FF]" />
    },
    {
      id: "ia-business",
      title: "Intelligence Artificielle Business",
      shortDesc: "Implémentation de chatbots, analyse prédictive et automatisation intelligente des processus.",
      details: "L'IA est votre levier de croissance majeur. Nous déployons des agents autonomes capables de gérer votre support client 24/7 et d'automatiser vos flux de travail répétitifs pour libérer votre temps.",
      benefits: [
        "Réduction des coûts de support jusqu'à 40%",
        "Analyse de données prédictive pour vos ventes",
        "Agents conversationnels intelligents (GPT-4)",
        "Automatisation intelligente des processus (RPA)"
      ],
      icon: <BrainCircuit className="text-white" />,
      color: "orange",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      accentIcon: <Sparkles size={24} className="text-[#FF6600]" />
    },
    {
      id: "marketing-digital",
      title: "Marketing Digital & Stratégie",
      shortDesc: "Maximisez votre visibilité et convertissez vos prospects en clients fidèles avec une approche data-driven.",
      details: "Nous construisons des tunnels de conversion sur mesure. De l'audit SEO aux campagnes Meta Ads ultra-ciblées, nous gérons votre croissance numérique avec une approche orientée ROI.",
      benefits: [
        "Audit SEO complet et stratégie de ranking",
        "Campagnes publicitaires à haut retour sur investissement",
        "Copywriting persuasif pour vos pages de vente",
        "Analyse précise de l'audience et segmentation"
      ],
      icon: <LineChart className="text-white" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      accentIcon: <TrendingUp size={24} className="text-[#0084FF]" />
    },
    {
      id: "community-management",
      title: "Community Management Pro",
      shortDesc: "Gérez votre image de marque sur Facebook, Instagram et LinkedIn avec une stratégie native.",
      details: "Nous créons du contenu viral qui résonne avec votre audience. Notre équipe assure une présence vibrante et une interaction humaine qui booste l'engagement et la confiance envers votre marque.",
      benefits: [
        "Design graphique premium pour vos réseaux",
        "Production de Reels et vidéos virales",
        "Gestion de crise et modération active",
        "Reporting mensuel détaillé des performances"
      ],
      icon: <Smartphone className="text-white" />,
      color: "orange",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
      accentIcon: <Target size={24} className="text-[#FF6600]" />
    },
    {
      id: "cyber-sec",
      title: "Cybersécurité & Réseaux",
      shortDesc: "Protégez vos actifs numériques et sécurisez vos échanges contre les cybermenaces.",
      details: "Nous sécurisons vos infrastructures critiques. Nos experts déploient des solutions de protection avancées et des protocoles de sauvegarde inviolables pour garantir la pérennité de votre entreprise.",
      benefits: [
        "Audit de vulnérabilité et tests d'intrusion",
        "Protection contre les ransomwares et malwares",
        "Sauvegarde Cloud cryptée et sécurisée",
        "Configuration de VPN et pare-feu d'entreprise"
      ],
      icon: <Shield className="text-white" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      accentIcon: <Shield size={24} className="text-[#0084FF]" />
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const getWhatsAppLink = (serviceTitle: string) => {
    const message = `Bonjour David, je suis intéressé par votre service : ${serviceTitle}. J'aimerais discuter des bénéfices pour mon projet et m'inscrire.`;
    return `https://wa.me/2250585339243?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO 
        title="Services & Expertises" 
        description="Découvrez nos solutions digitales innovantes : IA, Développement Web, Marketing et Cybersécurité à Bouaké avec FETEGUIO DIGIT-CENTER."
      />
      
      {/* Hero Header with High Contrast Overlay */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover" 
            alt="Bureau technologique moderne" 
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.4em] shadow-xl border border-white/20">
             Nos Pôles d'Excellence
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] uppercase tracking-tighter">
            Solutions <span className="text-brand-blue">Digitales</span>
          </h1>
          <p className="text-slate-100 text-xl md:text-2xl max-w-3xl mx-auto font-bold drop-shadow-lg">
            Propulsez votre entreprise vers l'avenir avec nos expertises technologiques sur mesure.
          </p>
        </div>
      </section>

      {/* Services Slider Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-xs">Innovation & Performance</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase">Nos <span className="text-brand-blue">Services</span></h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')} 
              className="p-5 rounded-2xl bg-white shadow-xl text-slate-400 hover:text-brand-blue transition-all border border-slate-100 hover:scale-110 active:scale-95"
              aria-label="Précédent"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-5 rounded-2xl bg-white shadow-xl text-slate-400 hover:text-brand-blue transition-all border border-slate-100 hover:scale-110 active:scale-95"
              aria-label="Suivant"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-20 px-4 md:px-[calc((100vw-1280px)/2)] scrollbar-hide snap-x"
        >
          {agencyServices.map((s, i) => (
            <div 
              key={s.id}
              onClick={() => setSelectedService(s)}
              className={`min-w-[320px] md:min-w-[420px] snap-center group relative p-12 rounded-[60px] bg-white border border-slate-100 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-4 ${s.color === 'blue' ? 'hover:shadow-[0_40px_80px_-20px_rgba(0,132,255,0.3)] hover:border-brand-blue/30' : 'hover:shadow-[0_40px_80px_-20px_rgba(255,102,0,0.3)] hover:border-brand-orange/30'}`}
            >
              {/* Icon Container with Glow */}
              <div className={`w-20 h-20 rounded-[30px] ${s.color === 'blue' ? 'bg-brand-blue shadow-[0_10px_30px_rgba(0,132,255,0.4)]' : 'bg-brand-orange shadow-[0_10px_30px_rgba(255,102,0,0.4)]'} flex items-center justify-center mb-10 group-hover:rotate-12 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 36 })}
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight group-hover:text-brand-blue transition-colors">
                {s.title}
              </h3>
              
              <p className="text-slate-500 text-lg leading-relaxed mb-10 line-clamp-3">
                {s.shortDesc}
              </p>
              
              <div className="flex items-center gap-3 text-slate-400 font-black uppercase text-[10px] tracking-widest group-hover:text-brand-orange group-hover:gap-6 transition-all">
                Voir les bénéfices détaillés <ArrowRight size={16} />
              </div>

              {/* Decorative Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-[100px] transition-all group-hover:opacity-10 ${s.color === 'blue' ? 'bg-brand-blue' : 'bg-brand-orange'}`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="bg-white rounded-[70px] max-w-5xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-500 border-[12px] border-slate-50 shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 p-4 rounded-full bg-slate-50 text-slate-400 hover:bg-brand-orange hover:text-white transition-all z-20 shadow-xl"
              aria-label="Fermer"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Column */}
              <div className="w-full md:w-1/2 h-[350px] md:h-auto sticky top-0 overflow-hidden">
                <img 
                  src={selectedService.image} 
                  className="w-full h-full object-cover animate-kenburns" 
                  alt={selectedService.title} 
                />
                <div className={`absolute inset-0 opacity-40 mix-blend-multiply ${selectedService.color === 'blue' ? 'bg-brand-blue' : 'bg-brand-orange'}`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 p-8 rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                   <div className="flex items-center gap-3 mb-2">
                     <span className={`p-2 rounded-lg bg-white/20`}>{React.cloneElement(selectedService.icon as React.ReactElement<any>, { size: 16 })}</span>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-80">Expertise Digitale</span>
                   </div>
                   <div className="text-3xl font-black uppercase tracking-tighter leading-none">{selectedService.title}</div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 p-12 md:p-20 space-y-16 bg-white">
                <div className="space-y-6">
                  <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] ${selectedService.color === 'blue' ? 'bg-brand-blue' : 'bg-brand-orange'}`}>
                    <CheckCircle size={14} /> Pourquoi choisir cette solution ?
                  </div>
                  <h2 className="text-5xl font-black text-slate-900 uppercase leading-none tracking-tighter">
                    Bénéfices <br/>
                    <span className={selectedService.color === 'blue' ? 'text-brand-blue' : 'text-brand-orange'}>FETEGUIO</span>
                  </h2>
                  <p className="text-slate-600 text-xl leading-relaxed font-medium">
                    {selectedService.details}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-8">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] flex items-center gap-3">
                    <TrendingUp size={16} /> Résultats Attendus
                  </h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-5 p-6 bg-slate-50 rounded-[30px] border-2 border-transparent hover:border-slate-100 transition-all group">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${selectedService.color === 'blue' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-orange/10 text-brand-orange'}`}>
                          <CheckCircle size={24} />
                        </div>
                        <span className="font-bold text-slate-800 uppercase tracking-wide text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="pt-12 border-t border-slate-100 flex flex-col gap-6">
                  <a 
                    href={getWhatsAppLink(selectedService.title)}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`w-full py-8 text-white rounded-[35px] font-black text-xl text-center flex items-center justify-center gap-4 transition-all hover:scale-105 shadow-2xl bg-[#25D366] hover:brightness-110 shadow-green-500/30`}
                  >
                    <MessageCircle size={32} /> S'inscrire via WhatsApp
                  </a>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-slate-100 overflow-hidden">
                      <img src="founder.jpeg" alt="David Soro" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Consultation gratuite avec</p>
                      <p className="text-sm font-black text-slate-900 uppercase">David Soro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Secondary Values Section with Contrast */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover" 
            alt="Réunion d'équipe" 
          />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
           <div className="space-y-10 text-white">
              <h2 className="text-5xl md:text-8xl font-black leading-none uppercase tracking-tighter">
                Toujours à vos <br/>
                <span className="text-brand-orange">Côtés</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                   { icon: <Zap />, text: "Réativité Maximale", desc: "Support client réactif sous 24h." },
                   { icon: <Shield />, text: "Data-Protection", desc: "Confidentialité totale de vos données." },
                   { icon: <Award />, text: "Experts Certifiés", desc: "Une équipe bilingue et certifiée." },
                   { icon: <Globe />, text: "Rayonnement Global", desc: "Standard de qualité international." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex flex-col gap-4 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] hover:bg-white/10 transition-all">
                     <div className="text-brand-orange">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}</div>
                     <div>
                       <h4 className="font-black text-sm uppercase tracking-widest">{item.text}</h4>
                       <p className="text-[10px] text-slate-400 mt-1">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative rounded-[70px] shadow-2xl overflow-hidden aspect-video border-[12px] border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-125" 
                alt="Infrastructure sécurisée" 
              />
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply group-hover:bg-brand-orange/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 animate-pulse">
                    <Shield size={40} />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
