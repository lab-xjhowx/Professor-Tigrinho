/**
 * 🦶 FOOTER COMPONENT
 * Rodapé com informações e links
 */

import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Mail, AlertTriangle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
              🐯 Professor Tigrinho
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Simulador educativo que demonstra táticas psicológicas em jogos de azar.
              100% open-source e transparente.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>por Jonathan</span>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Links Úteis
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/privacy" className="hover:text-primary-400 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="https://github.com/jonathan/professor-tigrinho-v2" className="hover:text-primary-400 transition-colors">
                  Código Fonte (GitHub)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Como Contribuir
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <SocialLink href="https://github.com/jonathan" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="https://twitter.com/xjhowx" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="mailto:contato@jonathan.dev" icon={<Mail className="w-5 h-5" />} />
            </div>
            <p className="text-xs text-slate-500">
              @xjhowx
            </p>
          </div>
        </div>
        
        {/* Warning */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-slate-300">
              <p className="font-semibold text-yellow-400 mb-1">Aviso Importante</p>
              <p>
                Este é um simulador educativo. Jogos de azar com dinheiro real podem causar:
                perdas financeiras, dependência psicológica e problemas familiares.
                <span className="block mt-2 font-semibold">
                  🆘 Precisa de ajuda? CVV: 188 • Jogadores Anônimos: jogadoresanonimos.com.br
                </span>
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-xs text-slate-600">
            <p>© 2025 Professor Tigrinho by Jonathan. Licença MIT.</p>
            <p className="mt-1">
              Este projeto é open-source e educativo. Não incentiva jogos de azar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-all"
    >
      {icon}
    </motion.a>
  );
};

export default Footer;

