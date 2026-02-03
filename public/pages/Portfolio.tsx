
import React, { useState } from 'react';
import { Award, CheckCircle, X, Info, Code, Lightbulb, Link as LinkIcon, Plus, MessageCircle, Users, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedCounter from '../components/AnimatedCounter';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const categories = ['Tous', 'Web', 'Design', 'IA', 'Marketing', 'ANGLAIS', 'Community Management'];

  const projects = [
    { 
      id: 1, 
      title: "Plateforme E-commerce CI", 
      category: "Web", 
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600",
      description: "Conception complète d'un site de vente en ligne sécurisé pour le marché ivoirien, intégrant les paiements Mobile Money (Orange, MTN, Moov).",
      stack: ["React", "Firebase", "API Mobile Money", "Tailwind CSS"],
      impact: "Augmentation de 40% des ventes digitales en 6 mois."
    },
    { 
      id: 2, 
      title: "Identité Visuelle Bouaké", 
      category: "Design", 
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
      description: "Création d'un branding complet pour une institution locale incluant logo, charte graphique et supports de communication imprimés.",
      stack: ["Adobe Illustrator", "Photoshop", "InDesign"],
      impact: "Modernisation de l'image perçue par 80% des usagers sondés."
    },
    { 
      id: 3, 
      title: "Assistant IA Clientèle", 
      category: "IA", 
      img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=600",
      description: "Implémentation d'un chatbot intelligent basé sur GPT-4 pour automatiser le support client 24/7.",
      stack: ["OpenAI API", "Node.js", "WhatsApp API"],
      impact: "Réduction du temps de réponse de 12h à 2 secondes."
    }
  ];

  const filteredProjects = filter === 'Tous' ? projects : projects.filter(p => p.category.toUpperCase() === filter.toUpperCase());

  return (
    <div className="pt-20">
      <SEO title="Portfolio" description="Réalisations expertes de David Soro. Découvrez nos projets en Web, IA, Design et Marketing." />
      
      {/* Hero with Background Image */}
      <section className="relative py-32 md:py-48 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover" 
            alt="Portfolio Background" 
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#0084FF] text-white text-xs font-black uppercase tracking-widest shadow-xl">
             Notre Galerie de Succès
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-2xl">
            Des Projets qui <span className="text-[#FF6600]">Transforment</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-lg">
            Découvrez nos réalisations concrètes pour les entreprises ambitieuses de Côte d'Ivoire.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
             <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
                <AnimatedCounter target={150} suffix="+" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Projets Web</p>
             </div>
             <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
                <AnimatedCounter target={50} suffix="+" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Marques Créées</p>
             </div>
             <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
                <AnimatedCounter target={10} suffix="+" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Solutions IA</p>
             </div>
             <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
                <AnimatedCounter target={5000} suffix="+" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Heures de Code</p>
             </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-8 py-3 rounded-2xl font-black transition-all text-xs uppercase tracking-widest border-2 ${filter === c ? 'bg-[#FF6600] text-white border-[#FF6600] shadow-xl scale-105' : 'bg-white text-slate-600 border-slate-100 hover:border-[#0084FF] shadow-sm'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredProjects.map(p => (
              <div 
                key={p.id} 
                onClick={() => setSelectedProject(p)}
                className="group relative overflow-hidden rounded-[40px] bg-slate-900 aspect-[4/3] shadow-2xl cursor-pointer"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[#FF6600] text-xs font-black uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100">{p.category}</span>
                  <h3 className="text-white text-3xl font-black mb-6 opacity-0 group-hover:opacity-100">{p.title}</h3>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100">
                     <div className="w-14 h-14 rounded-2xl bg-[#0084FF] text-white flex items-center justify-center hover:bg-[#FF6600] transition-colors shadow-lg"><Info size={24} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal is already implemented in previous files, kept for consistency */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white rounded-[50px] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-300 shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-[#FF6600] hover:text-white transition-all z-10 shadow-lg"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-[300px] md:h-auto">
                <img src={selectedProject.img} className="w-full h-full object-cover" alt={selectedProject.title} />
              </div>
              <div className="w-full md:w-1/2 p-10 md:p-16 space-y-10">
                <div className="space-y-4">
                  <span className="px-4 py-1.5 rounded-full bg-[#0084FF]/10 text-[#0084FF] text-xs font-black uppercase tracking-widest">{selectedProject.category}</span>
                  <h2 className="text-4xl font-black text-slate-900">{selectedProject.title}</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF6600] shrink-0"><Lightbulb size={20} /></div>
                    <div>
                      <h4 className="font-black text-slate-900">Le Projet</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{selectedProject.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0084FF] shrink-0"><Code size={20} /></div>
                    <div>
                      <h4 className="font-black text-slate-900">Expertises Utilisées</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProject.stack.map((s, i) => (
                          <span key={i} className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-lg text-slate-600">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/2250585339243?text=${encodeURIComponent(`Bonjour David, je souhaiterais discuter du projet : ${selectedProject.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-[#25D366] text-white rounded-2xl font-black hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} /> Discuter du Projet
                  </a>
                  <button onClick={() => setSelectedProject(null)} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black hover:bg-slate-200 transition-all uppercase text-xs tracking-widest">
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
