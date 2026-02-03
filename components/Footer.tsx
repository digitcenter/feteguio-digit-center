
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0084FF] via-[#FF6600] to-[#0084FF]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/">
              <Logo className="h-14" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              FETEGUIO DIGIT-CENTER, dirigé par SORO FETEGUE DAVID. Votre partenaire de confiance pour la transformation numérique et la montée en compétences en Côte d'Ivoire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0084FF] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FF6600] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FF6600] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0084FF] transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 text-[#FF6600] uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-[#0084FF] transition-colors font-semibold">À Propos</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-[#0084FF] transition-colors font-semibold">Nos Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-[#0084FF] transition-colors font-semibold">Réalisations</Link></li>
              <li><Link to="/training" className="text-slate-400 hover:text-[#FF6600] transition-colors font-semibold">Centre de Formation</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-[#FF6600] transition-colors font-semibold">Demander un Devis</Link></li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-lg font-black mb-6 text-[#0084FF] uppercase tracking-widest">Expertises</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">Développement Informatique</li>
              <li className="text-slate-400 text-sm">Marketing & Stratégie</li>
              <li className="text-slate-400 text-sm">Intelligence Artificielle</li>
              <li className="text-slate-400 text-sm">Cybersécurité</li>
              <li className="text-slate-400 text-sm">Community Management</li>
              <li className="text-slate-400 text-sm">Graphic design</li>
              <li className="text-slate-400 text-sm">Anglais professionnel </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-black mb-6 text-[#FF6600] uppercase tracking-widest">Contact Bouaké</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#0084FF] shrink-0" size={20} />
                <span className="text-slate-400 text-sm">Bouaké, Quartier Kennedy, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#0084FF] shrink-0" size={20} />
                <span className="text-slate-400 text-sm">+225 05 85 33 92 43</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-[#25D366] shrink-0" size={20} />
                <span className="text-slate-400 text-sm">WhatsApp Direct Disponible</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#0084FF] shrink-0" size={20} />
                <span className="text-slate-400 text-sm">feteguiodigicenter@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} FETEGUIO DIGIT-CENTER. CEO: SORO FETEGUE DAVID.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
