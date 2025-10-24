/**
 * 📜 PÁGINA DE TERMOS DE USO
 */

import { motion } from 'framer-motion';
import { ArrowLeft, FileText, AlertTriangle, Scale, BookOpen, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@components/ui/Navbar';
import Footer from '@components/ui/Footer';

export const Terms = () => {
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
          <div className="inline-block p-4 bg-blue-500/20 rounded-2xl mb-6">
            <FileText className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
            Termos de Uso
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
              <BookOpen className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">1. Aceitação dos Termos</h2>
                <p className="text-slate-300 leading-relaxed">
                  Ao acessar e usar o <strong className="text-primary-400">Professor Tigrinho</strong>, você 
                  concorda com estes termos de uso. Se não concordar, por favor, não utilize o simulador.
                </p>
              </div>
            </div>
          </section>

          {/* Natureza do Projeto */}
          <section className="border-t border-slate-800 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">2. Natureza Educativa do Projeto</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    O Professor Tigrinho é um <strong className="text-yellow-400">simulador educativo</strong> criado 
                    exclusivamente para demonstrar táticas psicológicas usadas em jogos de azar.
                  </p>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 space-y-3">
                    <p className="font-semibold text-yellow-400">Este simulador:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400">•</span>
                        <span><strong>NÃO</strong> utiliza dinheiro real</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400">•</span>
                        <span><strong>NÃO</strong> é um jogo de azar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400">•</span>
                        <span><strong>NÃO</strong> oferece prêmios reais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400">•</span>
                        <span><strong>NÃO</strong> incentiva apostas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span><strong>É</strong> uma ferramenta educativa sobre manipulação psicológica</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Objetivo */}
          <section className="border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-3">3. Objetivo do Simulador</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              O objetivo principal é <strong className="text-primary-400">educativo e conscientizador</strong>:
            </p>
            <ul className="space-y-2 text-slate-300 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">→</span>
                <span>Revelar como funcionam as táticas de manipulação em jogos de azar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">→</span>
                <span>Demonstrar o "Hook Phase", "Near Miss" e outras técnicas psicológicas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">→</span>
                <span>Promover consciência sobre os riscos de jogos com dinheiro real</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">→</span>
                <span>Fornecer uma experiência segura de aprendizado</span>
              </li>
            </ul>
          </section>

          {/* Uso Responsável */}
          <section className="border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-3">4. Uso Responsável</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Ao usar este simulador, você concorda em:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Usá-lo apenas para fins educativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Não reproduzir as táticas aprendidas para manipular outras pessoas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Ter pelo menos 18 anos de idade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Entender que este é um projeto educativo, não um jogo</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Open Source */}
          <section className="border-t border-slate-800 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <Code className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">5. Licença e Código Aberto</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Este projeto é <strong className="text-green-400">open-source</strong> sob a 
                  licença <strong>MIT</strong>. Isso significa:
                </p>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Você pode visualizar todo o código-fonte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Pode modificar e criar suas próprias versões</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Deve manter os créditos e a licença original</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>O projeto é fornecido "como está", sem garantias</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Isenção de Responsabilidade */}
          <section className="border-t border-slate-800 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <Scale className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">6. Isenção de Responsabilidade</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    O criador deste simulador <strong className="text-red-400">não se responsabiliza</strong>:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Por uso indevido do conhecimento adquirido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Por perdas financeiras em jogos de azar reais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Por problemas relacionados a vícios em jogos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Por interpretações ou aplicações incorretas das informações</span>
                    </li>
                  </ul>
                  
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-red-400 mb-2">Aviso Importante:</p>
                    <p className="text-sm">
                      Se você tem problemas com jogos de azar, procure ajuda profissional. 
                      CVV: 188 • Jogadores Anônimos: 
                      <a 
                        href="https://www.jogadoresanonimos.com.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-red-300 hover:text-red-200 underline ml-1"
                      >
                        jogadoresanonimos.com.br
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Uso de Dados */}
          <section className="border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-3">7. Dados e Privacidade</h2>
            <p className="text-slate-300 leading-relaxed mb-2">
              Este simulador não coleta dados pessoais. Para mais informações, consulte nossa{' '}
              <Link to="/privacy" className="text-primary-400 hover:text-primary-300 underline">
                Política de Privacidade
              </Link>.
            </p>
          </section>

          {/* Alterações */}
          <section className="border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-3">8. Alterações nos Termos</h2>
            <p className="text-slate-300 leading-relaxed">
              Reservamos o direito de atualizar estes termos a qualquer momento. Alterações significativas 
              serão notificadas no simulador. O uso continuado após as alterações constitui aceitação dos 
              novos termos.
            </p>
          </section>

          {/* Contato */}
          <section className="border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-3">9. Contato</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Dúvidas sobre estes termos? Entre em contato:
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
              <a 
                href="https://www.linkedin.com/in/xjhowx/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300"
              >
                LinkedIn: xjhowx
              </a>
            </div>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;

