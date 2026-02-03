
import React, { useState } from 'react';
import { CheckCircle, GraduationCap, Clock, X, MessageCircle, ArrowRight, Star, ShieldCheck, Zap, Award } from 'lucide-react';
import SEO from '../components/SEO';

const Training: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<null | typeof programs[0]>(null);

  const programs = [
    {
      id: "ia",
      title: "Masterclass Intelligence Artificielle",
      duration: "4 semaines",
      price: "100 000 FCFA",
      description: "Apprenez à intégrer l'IA dans vos processus métiers pour automatiser vos tâches et gagner 10h par semaine. Une immersion totale avec Soro David.",
      features: ["Prompt Engineering de haut niveau", "IA pour la productivité Business", "ChatGPT, Claude & Midjourney", "Projet final : Solution IA perso"],
      benefits: ["Support 12 mois inclus", "Accès à la communauté VIP", "Certificat de fin d'étude"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "web",
      title: "Bootcamp Développement Web",
      duration: "12 semaines",
      price: "150 000 FCFA",
      description: "Devenez un développeur Fullstack capable de créer des applications modernes. Aucun prérequis nécessaire, juste votre motivation.",
      features: ["Architecture HTML5 / CSS3 / Tailwind", "JavaScript Moderne & TypeScript", "React.js & State Management", "Node.js, Express & Firebase"],
      benefits: ["Coaching carrière", "Stage garanti en fin de bootcamp", "Portfolio de 3 projets réels"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "english",
      title: "Anglais Tech & Business (US Native Level)",
      duration: "8 semaines",
      price: "80 000 FCFA",
      description: "Plus qu'un cours d'anglais, une transformation bilingue. Nous maîtrisons l'accent américain natif et vous formons aux codes du business international.",
      features: [
        "Prononciation & Accent Américain (Native Speaker Level)", 
        "Presentation Skills : Captiver et convaincre son audience", 
        "Negotiation Tactics : Gagner vos contrats à l'international", 
        "Email Etiquette & Communication Pro (Intercultural skills)",
        "Technical Vocabulary for IT, IA & Marketing"
      ],
      benefits: ["Immersion 100% US Native", "Simulations de réunions & négociations", "Rédaction assistée de CV & Mails pro"],
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "office",
      title: "Informatique & Bureautique Pro",
      duration: "6 semaines",
      price: "85 000 FCFA",
      description: "Maîtrisez Word, Excel, PowerPoint et les outils de collaboration cloud (Google Workspace) pour une efficacité bureautique totale.",
      features: ["Excel Avancé & Tableaux Croisés", "Rédaction de documents structurés", "Présentations percutantes", "Gestion cloud et collaboration"],
      benefits: ["Support de cours inclus", "Attestation de formation", "Accès aux modèles pros"],
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-20">
      <SEO title="Formations" description="Transformez votre carrière à Bouaké avec FETEGUIO DIGIT-CENTER. IA, Web, Anglais Natif et Bureautique." />
      
      {/* Hero with Background Image */}
      <section className="relative py-32 md:py-48 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover" 
            alt="Formation Background" 
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#FF6600] text-white text-xs font-black uppercase tracking-widest shadow-xl">
             Centre de Formation d'Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-2xl">
            Maîtrisez les <span className="text-[#0084FF]">Compétences</span> du Futur
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-lg">
            Apprenez avec SORO FETEGUE DAVID. Nos programmes intensifs sont conçus pour une insertion professionnelle immédiate.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {programs.map((p, i) => (
              <div 
                key={i} 
                className="group p-8 md:p-12 rounded-[50px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0 group-hover:bg-blue-50 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0084FF]">
                      <GraduationCap size={32} />
                    </div>
                    <span className="px-4 py-2 bg-slate-50 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {p.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">{p.title}</h3>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed line-clamp-2">{p.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {p.features.slice(0, 3).map((f, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-slate-50 pt-8">
                  <span className="text-xl font-black text-[#FF6600]">{p.price}</span>
                  <button 
                    onClick={() => setSelectedProgram(p)} 
                    className="flex items-center gap-2 text-[#0084FF] font-black uppercase text-xs tracking-widest hover:gap-4 transition-all"
                  >
                    Détails complets <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white rounded-[50px] max-w-5xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-300 shadow-2xl">
            <button 
              onClick={() => setSelectedProgram(null)} 
              className="absolute top-8 right-8 p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-[#FF6600] hover:text-white transition-all shadow-md z-10"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-[300px] md:h-auto sticky top-0">
                <img src={selectedProgram.image} className="w-full h-full object-cover" alt={selectedProgram.title} />
              </div>
              <div className="w-full md:w-1/2 p-10 md:p-16 space-y-12">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0084FF] text-[10px] font-black uppercase tracking-[0.3em]">Programme 2025</span>
                  <h3 className="text-4xl font-black text-slate-900 leading-tight uppercase">{selectedProgram.title}</h3>
                  <div className="flex gap-4 pt-2">
                    <span className="flex items-center gap-2 text-slate-500 font-bold"><Clock size={18} /> {selectedProgram.duration}</span>
                    <span className="flex items-center gap-2 text-[#FF6600] font-black"><Zap size={18} /> {selectedProgram.price}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-10">
                  <div className="space-y-6">
                    <h4 className="text-xl font-black text-slate-900 flex items-center gap-2 uppercase tracking-wide border-b-4 border-[#0084FF] pb-2 w-fit">
                      Contenu du Bootcamp
                    </h4>
                    <ul className="space-y-4">
                      {selectedProgram.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl text-sm font-bold text-slate-700 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                          <CheckCircle className="text-[#0084FF] shrink-0 mt-0.5" size={20} /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-black text-slate-900 flex items-center gap-2 uppercase tracking-wide border-b-4 border-[#FF6600] pb-2 w-fit">
                      Bénéfices & Garanties
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProgram.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-slate-600 font-bold text-sm bg-orange-50 p-4 rounded-xl">
                          <Award size={20} className="text-[#FF6600] shrink-0" /> {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col gap-6">
                  <a 
                    href={`https://wa.me/2250585339243?text=${encodeURIComponent(`Bonjour David, je souhaite m'inscrire au programme : ${selectedProgram.title}. J'aimerais en savoir plus sur les modalités.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-6 bg-[#25D366] text-white rounded-[28px] font-black text-xl text-center flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-green-500/20 glow-green"
                  >
                    <MessageCircle size={28} /> S'inscrire via WhatsApp
                  </a>
                  <p className="text-center text-xs text-slate-400 font-medium">Réponse rapide garantie par SORO DAVID</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Training;
