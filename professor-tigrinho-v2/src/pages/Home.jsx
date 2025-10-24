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
  
  // Sistema de "Tempo de Vida Capturado" - Popup a cada 5 minutos
  useEffect(() => {
    const startTime = Date.now();
    let intervaloAtual = 1; // Começa no primeiro intervalo (5 min)
    
    // Para teste rápido em dev, mude para true
    const MODO_TESTE = false;
    const INTERVALO_BASE = MODO_TESTE ? 30000 : 5 * 60 * 1000; // 30s em teste, 5min em prod
    
    const checkTempoGasto = () => {
      const tempoDecorrido = Date.now() - startTime;
      const proximoMilestone = intervaloAtual * INTERVALO_BASE;
      
      if (tempoDecorrido >= proximoMilestone) {
        const minutosReais = intervaloAtual * (MODO_TESTE ? 0.5 : 5);
        const { showReward } = useGameState.getState();
        
        showReward(
          `⏰ Já ganhamos ${MODO_TESTE ? Math.round(minutosReais) : minutosReais} minutos da sua vida! Continue aqui com a gente, conhecendo nosso projeto, você ainda vai se surpreender 💜`
        );
        
        console.log(`🕐 Popup de tempo mostrado: ${minutosReais} minutos`);
        intervaloAtual++; // Próximo milestone (10, 15, 20...)
      }
    };
    
    // Checar a cada 30 segundos
    const interval = setInterval(checkTempoGasto, 30000);
    
    // Mensagem inicial no console
    console.log('⏱️ Sistema de tracking de tempo iniciado. Popup aparecerá aos 5, 10, 15... minutos');
    
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
        {/* Banner Educativo */}
        <FadeIn>
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 rounded-2xl p-6 mb-8 backdrop-blur-sm">
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
        </FadeIn>
        
        {/* Game Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Slot Machine */}
          <div className="lg:col-span-2 space-y-6">
            <SlideUp delay={0.1}>
              <BalanceDisplay saldo={saldo} saldoInicial={saldoInicial} />
            </SlideUp>
            
            <SlideUp delay={0.2}>
              <SlotMachine
                resultado={ultimoResultado?.animais}
                isSpinning={isSpinning}
                isWin={ultimoResultado?.isVitoria}
                isNearMiss={ultimoResultado?.isNearMiss}
              />
            </SlideUp>
            
            <SlideUp delay={0.3}>
              <ResultDisplay resultado={ultimoResultado} show={showResult} />
            </SlideUp>
            
            {/* Controles de Aposta */}
            <SlideUp delay={0.4}>
              <BetControls
                saldo={saldo}
                isSpinning={isSpinning}
                onSpin={handleApostar}
              />
            </SlideUp>
            
            {/* Education Center (mobile) */}
            <div className="lg:hidden">
              <SlideUp delay={0.5}>
                <EducationCenter />
              </SlideUp>
            </div>
          </div>
          
          {/* Right Column - Stats & Education */}
          <div className="space-y-6">
            <SlideUp delay={0.3}>
              <PhaseIndicator />
            </SlideUp>
            
            <SlideUp delay={0.4}>
              <Stats />
            </SlideUp>
            
            <div className="hidden lg:block">
              <SlideUp delay={0.5}>
                <EducationCenter />
              </SlideUp>
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

