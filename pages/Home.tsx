
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Laptop, BrainCircuit, LineChart, Users, 
  BookOpen, MessageSquare, Shield, Globe, Award, 
  GraduationCap, ChevronRight, Zap, Target, HeartHandshake, Lightbulb,
  ChevronLeft, Quote, Star, Languages
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';
import AnimatedCounter from '../components/AnimatedCounter';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Jean-Marc Kouadio",
      role: "CEO de Kouadio Logistique",
      quote: "L'expertise de Soro David en IA a transformé notre gestion de flotte. FETEGUIO nous a permis d'économiser 15% sur nos coûts opérationnels en 3 mois.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      name: "Awa Traoré",
      role: "Responsable Marketing, Fashion Boutique",
      quote: "Leur approche du Community Management est native et percutante. Notre engagement sur Instagram a explosé grâce à leur créativité bilingue.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      name: "Dr. Bakayoko",
      role: "Directeur Clinique Médicale",
      quote: "Une agence sérieuse et réactive. Le site web réalisé est rapide, sécurisé et parfaitement adapté aux besoins de nos patients à Bouaké.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      rating: 5
    }
  ];

  const features = [
    {
      title: "Solutions IA",
      desc: "Automatisez vos tâches complexes grâce à l'IA générative et prédictive.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
      icon: <BrainCircuit className="text-white" size={32} />,
      link: "/services"
    },
    {
      title: "Dév. Web & Mobile",
      desc: "Architectures robustes et interfaces modernes pour une expérience utilisateur premium.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      icon: <Laptop className="text-white" size={32} />,
      link: "/services"
    },
    {
      title: "Formation IT",
      desc: "Cursus intensifs en codage, design et outils digitaux de dernière génération.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      icon: <BookOpen className="text-white" size={32} />,
      link: "/training"
    },
    {
      title: "Anglais Business",
      desc: "Maîtrisez l'anglais américain natif pour vos négociations et présentations internationales.",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=600",
      icon: <Languages className="text-white" size={32} />,
      link: "/training"
    },
    {
      title: "Marketing Digital",
      desc: "Stratégies de croissance basées sur les données pour dominer votre marché.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      icon: <LineChart className="text-white" size={32} />,
      link: "/services"
    }
  ];

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="flex flex-col overflow-hidden">
      <SEO 
        title="Accueil" 
        description="FETEGUIO DIGIT-CENTER - Leader de la transformation numérique à Bouaké. Expertise en IA, Marketing et Développement." 
      />
      
      <HeroSlider />

      {/* Intro Stats Section */}
      <section className="relative z-20 -mt-20 px-4 reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-10 rounded-[40px] shadow-2xl border-t-4 border-brand-blue flex items-center gap-6 group hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
              <Users size={32} />
            </div>
            <div>
              <AnimatedCounter target={500} suffix="+" className="text-3xl font-black text-slate-900" />
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Clients satisfaits</p>
            </div>
          </div>
          <div className="glass-card p-10 rounded-[40px] shadow-2xl border-t-4 border-brand-orange flex items-center gap-6 group hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
              <GraduationCap size={32} />
            </div>
            <div>
              <AnimatedCounter target={1200} suffix="+" className="text-3xl font-black text-slate-900" />
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Étudiants formés</p>
            </div>
          </div>
          <div className="glass-card p-10 rounded-[40px] shadow-2xl border-t-4 border-brand-blue flex items-center gap-6 group hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
              <Award size={32} />
            </div>
            <div>
              <AnimatedCounter target={10} suffix="+" className="text-3xl font-black text-slate-900" />
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Années d'expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Circular Founder Spotlight */}
      <section className="py-24 bg-white reveal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="relative mb-12">
            <div className="absolute -inset-8 bg-brand-blue/10 rounded-full blur-3xl opacity-40"></div>
            <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full border-[10px] border-slate-50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden ring-4 ring-brand-blue/10 group">
              <img 
                src="founder.jpeg" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                alt="SORO FETEGUE DAVID" 
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-2xl whitespace-nowrap border-4 border-white">
              Founder & CEO
            </div>
          </div>

          <div className="text-center space-y-8 max-w-4xl">
            <div className="space-y-4">
              <span className="text-brand-orange font-black uppercase tracking-[0.5em] text-[10px]">L'Âme de l'Agence</span>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                SORO <span className="text-brand-blue">FETEGUE</span> DAVID
              </h2>
              <div className="w-24 h-2 bg-brand-orange mx-auto rounded-full shadow-[0_0_20px_#FF6600]"></div>
            </div>

            <p className="text-slate-600 text-lg md:text-2xl leading-relaxed font-medium">
              "Notre ambition : ancrer Bouaké sur la carte technologique mondiale. Chaque projet est une opportunité de prouver que l'excellence ivoirienne n'a pas de limites."
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/about" className="px-12 py-5 bg-brand-blue text-white font-black rounded-2xl hover:bg-brand-orange transition-all shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                Découvrir mon histoire <ArrowRight size={20} />
              </Link>
              <div className="flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-blue shadow-sm">
                    <Award size={24} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Expert Consultant Bilingue</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Visual Slider with Background Animation */}
      <section className="py-32 bg-slate-50 relative reveal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-xs">Innovation Digitale</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase">Expertises <span className="text-brand-blue">Premium</span></h2>
              <p className="text-slate-500 text-lg font-medium">Des solutions technologiques de pointe illustrées par l'excellence.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={scrollLeft} className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <button onClick={scrollRight} className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex gap-10 overflow-x-auto pb-16 scrollbar-hide snap-x">
            {features.map((f, idx) => (
              <div key={idx} className="min-w-[350px] md:min-w-[450px] relative h-[550px] rounded-[60px] overflow-hidden group snap-center shadow-2xl">
                <img src={f.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2" alt={f.title} />
                {/* Optimized Overlay for Background Visibility and Text Contrast */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4 translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                  <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h4 className="text-3xl font-black text-white uppercase tracking-tight drop-shadow-lg">{f.title}</h4>
                  <p className="text-slate-100 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 font-bold drop-shadow-md">{f.desc}</p>
                  <Link to={f.link} className="w-full py-5 bg-brand-orange text-white rounded-2xl font-black text-center flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 hover:brightness-110 shadow-xl border border-white/20 uppercase tracking-widest text-[10px]">
                    En savoir plus <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with High Contrast Background Image */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden reveal">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover opacity-30" alt="Team Work" />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 space-y-4">
             <span className="text-brand-orange font-black uppercase tracking-[0.5em] text-[10px]">Satisfaction</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase drop-shadow-2xl">Ils nous font <span className="text-brand-blue">Confiance</span></h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative p-12 md:p-20 rounded-[60px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <Quote className="absolute top-10 left-10 text-brand-orange/20" size={100} />
              
              <div className="relative z-10 space-y-10 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FF6600" className="text-brand-orange" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-4xl font-black leading-relaxed italic text-slate-100 drop-shadow-md">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-brand-blue to-brand-orange rounded-full blur-md"></div>
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-slate-900 shadow-2xl" 
                      alt={testimonials[activeTestimonial].name} 
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-2xl font-black text-white uppercase tracking-tight">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-brand-orange font-black uppercase tracking-[0.3em] text-[10px] mt-1">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 right-12 flex gap-4">
                {testimonials.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2.5 transition-all duration-500 rounded-full ${i === activeTestimonial ? 'bg-brand-orange w-16 shadow-[0_0_20px_#FF6600]' : 'bg-white/20 w-4 hover:bg-white/40'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Full Background Visibility */}
      <section className="py-32 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[70px] bg-slate-950 p-16 md:p-32 overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 opacity-50">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Contact" />
            </div>
            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-12">
              <h2 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase drop-shadow-2xl tracking-tighter">
                Prêt pour votre <br/><span className="text-brand-orange">Décollage ?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 w-full justify-center items-center">
                <a 
                  href="https://wa.me/2250585339243?text=Bonjour David, je souhaite discuter d'un projet digital ou d'une formation avec FETEGUIO DIGIT-CENTER."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-14 py-7 bg-brand-blue text-white font-black rounded-[30px] text-lg hover:scale-105 transition-all shadow-2xl glow-blue uppercase tracking-widest text-sm border-2 border-white/20"
                >
                  WhatsApp David
                </a>
                <Link to="/contact" className="px-14 py-7 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 font-black rounded-[30px] text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                  Obtenir un Devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
