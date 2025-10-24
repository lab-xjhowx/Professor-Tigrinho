/**
 * 🔒 PÁGINA DE POLÍTICA DE PRIVACIDADE
 */

import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Cookie, Database, Lock, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@components/ui/Navbar';
import Footer from '@components/ui/Footer';

export const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao simulador
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-4 bg-primary-500/20 rounded-2xl mb-6">
            <Shield className="w-12 h-12 text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-slate-400">
            Última atualização: Janeiro de 2025
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 space-y-8"
        >
          {/* Intro */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Introdução</h2>
                <p className="text-slate-300 leading-relaxed">
                  O <strong className="text-primary-400">Professor Tigrinho</strong> é um projeto educativo 
                  que respeita profundamente sua privacidade. Este documento explica de forma clara e transparente 
                  como tratamos (ou melhor, como <strong>não</strong> tratamos) seus dados.
                </p>
              </div>
            </div>
          </section>

          {/* Dados Coletados */}
          <section className="border-t border-slate-800 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <Database className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Dados que NÃO Coletamos</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Este simulador funciona <strong className="text-green-400">100% no seu navegador</strong>. 
                  Não coletamos, armazenamos ou compartilhamos nenhum dado pessoal:
                </p>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Não pedimos nome, email ou qualquer informação pessoal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Não rastreamos seu comportamento entre sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Não enviamos seus dados para servidores externos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Não vendemos ou compartilhamos informações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Não utilizamos cookies de rastreamento</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dados Locais */}
          <section className="border-t border-slate-800 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Armazenamento Local</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  O simulador utiliza o <code className="px-2 py-1 bg-slate-800 rounded text-primary-400">localStorage</code> do 
                  seu navegador apenas para:
                </p>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Salvar suas estatísticas de jogo (vitórias, derrotas, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Lembrar suas preferências (som ligado/desligado)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Manter seu progresso nas missões educativas</span>
                  </li>
                </ul>
                <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-sm text-yellow-200">
                    <strong>Importante:</strong> Esses dados ficam <strong>apenas no seu dispositivo</strong> e 
                    podem ser apagados a qualquer momento limpando os dados do navegador.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="border-t border-slate-800 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Cookies</h2>
                <p className="text-slate-300 leading-relaxed">
                  Não utilizamos cookies de rastreamento ou publicidade. O site pode usar cookies técnicos 
                  essenciais apenas para o funcionamento básico da aplicação.
                </p>
              </div>
            </div>
          </section>

          {/* Serviços Terceiros */}
          <section className="border-t border-slate-800 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Serviços de Terceiros</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Este site pode ser hospedado em plataformas como Vercel, que podem coletar dados anônimos 
                  de acesso (como análise de tráfego). Para mais informações:
                </p>
                <a 
                  href="https://vercel.com/legal/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 underline"
                >
                  Política de Privacidade da Vercel
                </a>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section className="border-t border-slate-800 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Código Aberto & Transparência</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Este projeto é <strong className="text-green-400">100% open-source</strong>. Você pode 
                  verificar o código-fonte completo no GitHub e confirmar que não há coleta de dados oculta.
                </p>
                <a 
                  href="https://github.com/lab-xjhowx/Professor-Tigrinho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 underline"
                >
                  Ver código no GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Alterações */}
          <section className="border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-3">Alterações nesta Política</h2>
            <p className="text-slate-300 leading-relaxed">
              Podemos atualizar esta política ocasionalmente. Recomendamos revisar esta página periodicamente. 
              Alterações significativas serão notificadas no próprio simulador.
            </p>
          </section>

          {/* Contato */}
          <section className="border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-3">Contato</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Se tiver dúvidas sobre esta política de privacidade, entre em contato:
            </p>
            <div className="flex flex-col gap-2">
              <a 
                href="https://github.com/lab-xjhowx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300"
              >
                GitHub: @lab-xjhowx
              </a>
              <a 
                href="https://instagram.com/xjhowx.lab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300"
              >
                Instagram: @xjhowx.lab
              </a>
            </div>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;

