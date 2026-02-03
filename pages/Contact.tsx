
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Développement Web',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci ! Votre demande a été envoyée avec succès à SORO FETEGUE DAVID. Nous vous contacterons sous 24h.');
    setFormData({ name: '', email: '', service: 'Développement Web', message: '' });
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact & Devis" 
        description="Contactez FETEGUIO DIGIT-CENTER à Bouaké. Demandez votre devis pour vos projets de développement web, marketing ou IA."
      />
      
      {/* Hero with Enhanced Background Contrast */}
      <section className="relative py-32 md:py-48 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516387084227-51bd3a051935?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover" 
            alt="Contact Background" 
          />
          {/* Solid deep overlay for high legibility */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-orange text-white text-xs font-black uppercase tracking-widest shadow-xl">
             Prêt à Démarrer ?
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-2xl">
            Donnez Vie à vos <span className="text-brand-blue">Idées</span>
          </h1>
          <p className="text-slate-100 text-lg md:text-xl max-w-2xl mx-auto font-bold drop-shadow-lg">
            Que vous soyez à Bouaké ou à l'autre bout du monde, FETEGUIO DIGIT-CENTER est votre partenaire de confiance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            <div className="space-y-12 animate-in slide-in-from-left duration-700">
              <div className="space-y-4">
                <h2 className="text-5xl font-black text-slate-900 leading-tight">Parlons de votre <span className="text-brand-blue">Projet</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  L'expertise de SORO FETEGUE DAVID est à votre portée. Remplissez le formulaire pour une étude personnalisée de vos besoins.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start bg-slate-50 p-6 rounded-3xl border-l-8 border-brand-blue shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900">Siège Social</h4>
                    <p className="text-slate-500 font-bold">Bouaké, Quartier Commerce, Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start bg-slate-50 p-6 rounded-3xl border-l-8 border-brand-orange shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900">Téléphone Direct</h4>
                    <p className="text-slate-500 font-bold">+225 05 85 33 92 43</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[40px] bg-[#25D366]/10 border-2 border-[#25D366]/20 flex items-center justify-between group shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <MessageCircle size={32} className="text-[#25D366]" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900">WhatsApp</h4>
                    <p className="text-sm text-slate-600 font-bold">Réponse rapide garantie</p>
                  </div>
                </div>
                <a href="https://wa.me/2250585339243" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#25D366] text-white rounded-full font-black hover:scale-105 transition-all shadow-lg shadow-green-500/20">Discuter</a>
              </div>
            </div>

            <div className="p-10 rounded-[40px] bg-white border-4 border-slate-50 shadow-2xl animate-in slide-in-from-right duration-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full pointer-events-none"></div>
              <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-900 uppercase">Demander un Devis</h2>
                <div className="w-24 h-2 bg-brand-orange mt-2 rounded-full shadow-sm"></div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Nom ou Entreprise</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Votre identité" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Email</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="email@exemple.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Service souhaité</label>
                    <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all font-black text-slate-700">
                      <option>Développement Web</option>
                      <option>Marketing Digital</option>
                      <option>Formation IA / IT</option>
                      <option>Design & Branding</option>
                      <option>Anglais Professionnel</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Votre Message</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Décrivez votre besoin..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all resize-none font-bold"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-brand-blue text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 hover:bg-brand-orange hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-3 group">
                  Envoyer ma demande <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
