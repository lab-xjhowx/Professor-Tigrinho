/**
 * 🤝 PÁGINA DE CONTRIBUIÇÃO
 * Convite para apoiar o projeto
 */

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Github, Coffee, Zap, Code, BookOpen, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@components/ui/Navbar';
import Footer from '@components/ui/Footer';
import Particles from '@components/effects/Particles';

export const Contribute = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-slate-950">
      <Particles count={20} />
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
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

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-7xl mb-4"
            >
              🐯
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-display font-black mb-6 bg-gradient-to-r from-primary-400 via-neon-pink to-gold-400 bg-clip-text text-transparent">
            Apoie o Projeto
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            O <span className="font-bold text-primary-400">Professor Tigrinho</span> é um projeto 
            <span className="font-bold text-gold-400"> 100% gratuito e open-source</span>, criado para 
            <span className="font-bold text-neon-pink"> educar e conscientizar</span> sobre as táticas 
            psicológicas em jogos de azar.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Users />, value: "100%", label: "Gratuito" },
            { icon: <Code />, value: "Open", label: "Source" },
            { icon: <BookOpen />, value: "Educativo", label: "& Transparente" },
            { icon: <TrendingUp />, value: "Em", label: "Evolução" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-full mb-3 text-primary-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-slate-700 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-gold-400" />
              Por que este projeto existe?
            </h2>
            
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                Este simulador nasceu da vontade de <strong className="text-primary-400">expor as mecânicas ocultas</strong> 
                que fazem milhões de pessoas perderem dinheiro todos os dias em jogos de azar online.
              </p>
              
              <p>
                Através de <strong className="text-gold-400">código aberto e transparente</strong>, você pode ver 
                exatamente como funcionam as táticas de <strong className="text-neon-pink">manipulação psicológica</strong>:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎣</span>
                  <div>
                    <strong className="text-green-400">Hook Phase</strong> - Vitórias fáceis iniciais para te viciar
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <strong className="text-yellow-400">Near Miss</strong> - "Quase ganhei!" para te fazer jogar mais
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📉</span>
                  <div>
                    <strong className="text-red-400">Loss Phase</strong> - A casa sempre ganha no final
                  </div>
                </li>
              </ul>
              
              <p className="pt-4 border-t border-slate-700">
                Cada linha de código foi escrita com <strong className="text-neon-pink">dedicação</strong> e 
                <strong className="text-primary-400"> propósito educativo</strong>. 
                É um projeto <strong className="text-gold-400">independente</strong>, desenvolvido nas horas vagas, 
                sem patrocínio ou apoio institucional.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contribution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Como Você Pode Ajudar
            </h2>
            <p className="text-lg text-slate-400">
              Sua contribuição mantém este projeto vivo, em evolução e acessível para todos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub */}
            <motion.a
              href="https://github.com/lab-xjhowx"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-primary-500 rounded-2xl p-8 transition-all select-none"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-slate-950 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <Github className="w-7 h-7 text-slate-400 group-hover:text-primary-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    GitHub Sponsors
                  </h3>
                  <p className="text-sm text-slate-500">Apoio recorrente</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Torne-se um sponsor no GitHub e ajude no desenvolvimento contínuo de projetos open-source.
              </p>
              
              {/* GitHub Sponsors Image */}
              <div className="relative inline-block">
                <img 
                  src="/GitHub-Sponsors.png" 
                  alt="GitHub Sponsors" 
                  className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.8)] transition-all duration-300"
                  draggable="false"
                />
              </div>
              <p className="text-xs text-primary-400/70 mt-2">
                Apoio mensal via GitHub
              </p>
            </motion.a>

            {/* PIX */}
            <motion.a
              href="https://nubank.com.br/cobrar/ukbg2/68fac8e8-d309-45f5-88ba-4ea0c5a4f970"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-2 border-teal-500/30 hover:border-teal-400 rounded-2xl p-8 transition-all relative overflow-hidden select-none"
            >
              {/* Bandeira Brasil Sutil */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-1/3 bg-green-500"></div>
                <div className="w-full h-1/3 bg-yellow-500"></div>
                <div className="w-full h-1/3 bg-blue-500"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                    <Coffee className="w-7 h-7 text-teal-400 group-hover:text-teal-300 transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                        PIX
                      </h3>
                      <span className="text-2xl">🇧🇷</span>
                    </div>
                    <p className="text-sm text-teal-500/70">Contribuição única</p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Um cafézinho para ajudar nas longas noites de código e estudo. Qualquer valor é bem-vindo!
                </p>
                
                {/* QR Code */}
                <div className="relative inline-block bg-white rounded-xl p-2">
                  <img 
                    src="/doe-pix.png" 
                    alt="QR Code PIX" 
                    className="w-32 h-32 object-contain"
                    draggable="false"
                  />
                </div>
                <p className="text-xs text-teal-400/70 mt-2">
                  Escaneie o QR Code ou clique para abrir
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* What Your Support Enables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-primary-500/10 to-neon-pink/10 border-2 border-primary-500/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <Heart className="w-7 h-7 text-neon-pink" />
              O que seu apoio possibilita
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              {[
                "⏰ Mais tempo para desenvolver novos recursos",
                "📚 Investimento em estudo e aprendizado contínuo",
                "🛠️ Manutenção e melhorias constantes",
                "🎨 Design e experiência do usuário aprimorados",
                "📖 Documentação mais completa e clara",
                "🌍 Alcançar e educar mais pessoas",
                "🔬 Pesquisa sobre novas táticas psicológicas",
                "💪 Motivação para continuar o trabalho"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4"
                >
                  <span className="text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              <strong className="text-primary-400">Não há pressão</strong> - este projeto continuará gratuito e 
              acessível sempre. Mas se você acredita no valor da <strong className="text-gold-400">educação 
              financeira</strong> e quer ajudar a manter essa missão viva, qualquer apoio é 
              <strong className="text-neon-pink"> genuinamente apreciado</strong>. 💜
            </p>
            
            <p className="text-sm text-slate-500">
              Cada contribuição, independente do valor, é um voto de confiança neste trabalho.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Contribute;

