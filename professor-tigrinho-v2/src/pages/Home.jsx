/**
 * 🏠 HOME PAGE
 * Página principal do simulador
 */

import { useState, useEffect } from 'react';
import { useGameState } from '@hooks/useGameState';
import { useAudio } from '@hooks/useAudio';

// Layout Components
import Navbar from '@components/ui/Navbar';
import Footer from '@components/ui/Footer';
import Particles from '@components/effects/Particles';
import { SimpleConfetti } from '@components/effects/Confetti';

// Game Components
import SlotMachine from '@components/game/SlotMachine';
import BetControls from '@components/game/BetControls';
import { BalanceDisplay, ResultDisplay } from '@components/game/ResultDisplay';

// Dashboard Components
import Stats from '@components/dashboard/Stats';
import PhaseIndicator from '@components/dashboard/PhaseIndicator';

// Education Components
import EducationCenter from '@components/education/EducationCenter';
import TipsModal from '@components/education/TipsModal';

// VIP & UI Components
import VipModal from '@components/vip/VipMode';
import RewardPopup from '@components/ui/RewardPopup';

// Animations
import { FadeIn, SlideUp } from '@components/effects/Animations';
import { motion } from 'framer-motion';

// Dev Messages
import devMessages from '@utils/devMessages';

export const Home = () => {
  const [ultimoResultado, setUltimoResultado] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(false);
  
  const { 
    saldo, 
    saldoInicial, 
    isSpinning, 
    apostar, 
    totalJogadas,
    effectsEnabled 
  } = useGameState();
  
  const { 
    playSpin, 
    playWin, 
    playLose, 
    playNearMiss,
    startAmbient 
  } = useAudio();
  
  // Inicializar dev messages
  useEffect(() => {
    devMessages.initDevMessages();
    devMessages.protecaoSuave();
    devMessages.addWatermark();
    devMessages.monitorDevTools();
    
    // Música ambiente (opcional - pode ser removida se incomodar)
    // startAmbient();
  }, []);
  
  // Sistema de "Tempo de Vida Capturado" - Popup de 10 em 10 minutos
  useEffect(() => {
    const startTime = Date.now();
    let intervaloAtual = 1; // Começa no primeiro intervalo (5 min)

    // Para teste rápido em dev, mude para true
    const MODO_TESTE = false;
    const PRIMEIRO_POPUP = MODO_TESTE ? 30000 : 5 * 60 * 1000; // 5 min primeiro popup
    const INTERVALO_ENTRE_POPUPS = MODO_TESTE ? 60000 : 10 * 60 * 1000; // 10 min entre popups

    const checkTempoGasto = () => {
      const tempoDecorrido = Date.now() - startTime;

      // Lógica: Primeiro popup aos 5 min, depois de 10 em 10 min
      let proximoMilestone;
      if (intervaloAtual === 1) {
        proximoMilestone = PRIMEIRO_POPUP; // 5 minutos
      } else {
        // Depois do primeiro: 5 min + 10 min * (intervalos - 1)
        proximoMilestone = PRIMEIRO_POPUP + ((intervaloAtual - 1) * INTERVALO_ENTRE_POPUPS);
      }

      if (tempoDecorrido >= proximoMilestone) {
        const minutosReais = intervaloAtual === 1 ? 5 : 5 + ((intervaloAtual - 1) * 10);
        const { showReward } = useGameState.getState();

        showReward(
          `💜 Uau, meus parabéns!\nPerdemos juntos ${minutosReais} minutos da sua vida 💀\n\n⏰ Seu tempo vale dinheiro — só não pra você! 💸\n\nAqui, pelo menos, você descobre como esse truque funciona 😉`
        );

        console.log(`🕐 Popup de tempo mostrado: ${minutosReais} minutos`);
        intervaloAtual++; // Próximo milestone (15, 25, 35...)
      }
    };

    // Checar a cada 30 segundos
    const interval = setInterval(checkTempoGasto, 30000);

    // Mensagem inicial no console
    console.log('⏱️ Sistema de tracking de tempo iniciado. Popup aparecerá aos 5, 15, 25... minutos');

    return () => clearInterval(interval);
  }, []);
  
  // Handler de aposta
  const handleApostar = async (valor) => {
    if (isSpinning || saldo < valor) return;
    
    // Som de spin
    playSpin();
    
    // Esconder resultado anterior
    setShowResult(false);
    
    // Processar aposta
    const resultado = await apostar(valor);
    
    if (resultado.sucesso) {
      // Aguardar animação dos slots
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Mostrar resultado
      setUltimoResultado(resultado.resultado);
      setShowResult(true);
      
      // Sons e efeitos
      if (resultado.resultado.isVitoria) {
        playWin();
        if (effectsEnabled) {
          setConfettiTrigger(prev => !prev);
        }
      } else if (resultado.resultado.isNearMiss) {
        playNearMiss();
      } else {
        playLose();
      }
    }
  };
  
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Effects */}
      <Particles count={30} />
      
      {/* Confetti */}
      <SimpleConfetti active={confettiTrigger} />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Mobile: Flex container com ordem customizada | Desktop: Layout original em grid */}
        <div className="flex flex-col md:block">
          
          {/* 1️⃣ Banner Educativo - Mobile: order-1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="order-1 mb-4 md:mb-8"
          >
            <div className="relative bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">⚠️</span>
                <h2 className="text-2xl font-display font-bold text-yellow-300">
                  Projeto Educativo
                </h2>
              </div>
              <p className="text-slate-200">
                Este simulador demonstra as <span className="font-semibold text-yellow-300">táticas psicológicas</span> usadas
                por jogos de azar para manipular jogadores. Não utiliza dinheiro real.
                <span className="block mt-2 text-sm text-slate-400">
                  🎓 Aprenda sobre Hook Phase, Near-Miss, Loss Aversion e muito mais!
                </span>
              </p>
            </div>
          </motion.div>
          
          {/* Game Layout Container - Desktop: Grid 3 colunas | Mobile: Continua ordem flexbox */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

            {/* Left Column - Desktop: Slot Machine & Controls | Mobile: Ordem flexbox */}
            <div className="md:col-span-2 flex flex-col space-y-4 md:space-y-6">
              
              {/* Saldo Atual - Desktop: normal | Mobile: order-3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="order-3 md:order-none"
              >
                <BalanceDisplay saldo={saldo} saldoInicial={saldoInicial} />
              </motion.div>
              
              {/* Slot Machine - Desktop: normal | Mobile: order-4 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="order-4 md:order-none"
              >
                <SlotMachine
                  resultado={ultimoResultado?.animais}
                  isSpinning={isSpinning}
                  isWin={ultimoResultado?.isVitoria}
                  isNearMiss={ultimoResultado?.isNearMiss}
                />
              </motion.div>
              
              {/* Resultado da Jogada - Desktop: normal | Mobile: order-6 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="order-6 md:order-none"
              >
                <ResultDisplay resultado={ultimoResultado} show={showResult} />
              </motion.div>
              
              {/* Controles de Aposta - Desktop: normal | Mobile: order-5 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="order-5 md:order-none"
              >
                <BetControls
                  saldo={saldo}
                  isSpinning={isSpinning}
                  onSpin={handleApostar}
                />
              </motion.div>
            </div>
            
            {/* Right Column - Desktop: Stats & Phase | Mobile: Ordem flexbox */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              
              {/* Stats - Desktop: normal | Mobile: order-2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="order-2 md:order-none"
              >
                <Stats />
              </motion.div>
              
              {/* Estado Psicológico - Desktop: normal | Mobile: order-7 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="order-7 md:order-none"
              >
                <PhaseIndicator />
              </motion.div>

              {/* EducationCenter - Desktop: normal | Mobile: order-8 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="order-8 md:order-none"
              >
                <EducationCenter />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <TipsModal />
      <VipModal />
      <RewardPopup />
    </div>
  );
};

export default Home;

