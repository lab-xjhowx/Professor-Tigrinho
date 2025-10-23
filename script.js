/**
 * ============================================
 * SlotMind - Psychology of Gambling Simulator
 * Desenvolvido por Jonathan
 * ============================================
 * 
 * Este simulador demonstra táticas psicológicas
 * usadas por jogos de azar para manipular jogadores.
 * Projeto educativo - Não utiliza dinheiro real.
 */

// =====================================
// CONSTANTS & CONFIGURATION
// =====================================

const ANIMALS = [
    { id: 'rat', icon: '🐀', name: 'Rato', chance: 50, multiplier: 1.2 },
    { id: 'ox', icon: '🐂', name: 'Touro', chance: 10, multiplier: 1.5 },
    { id: 'medal', icon: '🥇', name: 'Medalha', chance: 6, multiplier: 3.0 },
    { id: 'rabbit', icon: '🐰', name: 'Coelho', chance: 4, multiplier: 5.0 },
    { id: 'tiger', icon: '🐯', name: 'Tigre', chance: 2, multiplier: 9.0 }
];

const PSYCHOLOGICAL_PHASES = {
    HOOK: { name: 'Hook Phase', color: 'success', progress: 100 },
    NORMAL: { name: 'Normal Phase', color: 'warning', progress: 50 },
    LOSS: { name: 'Loss Phase', color: 'danger', progress: 10 }
};

// =====================================
// STATE MANAGEMENT
// =====================================

const BET_VALUES = [5, 10, 20, 50, 100];
let currentBetIndex = 1; // Starts at R$ 10

class GameState {
    constructor() {
        this.balance = 100;
        this.isSpinning = false;
        this.statistics = {
        totalPlays: 0,
        totalWins: 0,
        playerProfit: 0,
        houseProfit: 0
        };
        this.psychological = {
        easyWinsRemaining: 5,
            phase: 'HOOK',
        initialDeposit: 100
        };
    }

    updateBalance(amount) {
        this.balance += amount;
    }

    addPlay(isWin, betAmount, winAmount = 0) {
        this.statistics.totalPlays++;
        if (isWin) {
            this.statistics.totalWins++;
            const profit = winAmount - betAmount;
            this.statistics.playerProfit += profit;
            this.statistics.houseProfit -= winAmount;
        } else {
            this.statistics.playerProfit -= betAmount;
        }
        this.statistics.houseProfit += betAmount;
    }

    updatePsychologicalPhase() {
        if (this.psychological.easyWinsRemaining > 0) {
            this.psychological.easyWinsRemaining--;
            if (this.psychological.easyWinsRemaining === 0) {
                this.psychological.phase = 'LOSS';
            }
        }
    }

    checkDeposit() {
        if (this.balance > this.psychological.initialDeposit) {
            this.psychological.initialDeposit = this.balance;
            this.psychological.easyWinsRemaining = Math.floor(gameSettings.psychTricks.easyWinsCount / 2);
            this.psychological.phase = 'HOOK';
            return true;
        }
        return false;
    }

    reset() {
        this.balance = 100;
        this.isSpinning = false;
        this.statistics = {
            totalPlays: 0,
            totalWins: 0,
            playerProfit: 0,
            houseProfit: 0
        };
        this.psychological = {
            easyWinsRemaining: gameSettings.psychTricks.easyWinsCount,
            phase: 'HOOK',
            initialDeposit: 100
        };
    }
}

class GameSettings {
    constructor() {
        this.animals = JSON.parse(JSON.stringify(ANIMALS));
        this.psychTricks = {
        enabled: true,
        easyWinsCount: 5,
        easyWinsBonus: 30,
            lossReduction: 15,
        enableNearMiss: true,
            enableSounds: true
        };
        this.house = {
            guaranteeProfit: false,
            targetEdge: 0
        };
    }

    updateFromUI() {
        this.animals[0].chance = parseFloat(document.getElementById('ratChance').value) || 50;
        this.animals[0].multiplier = parseFloat(document.getElementById('ratMultiplier').value) || 1.2;
        
        this.animals[1].chance = parseFloat(document.getElementById('oxChance').value) || 10;
        this.animals[1].multiplier = parseFloat(document.getElementById('oxMultiplier').value) || 1.5;
        
        this.animals[2].chance = parseFloat(document.getElementById('medalChance').value) || 6;
        this.animals[2].multiplier = parseFloat(document.getElementById('medalMultiplier').value) || 3.0;
        
        this.animals[3].chance = parseFloat(document.getElementById('rabbitChance').value) || 4;
        this.animals[3].multiplier = parseFloat(document.getElementById('rabbitMultiplier').value) || 5.0;
        
        this.animals[4].chance = parseFloat(document.getElementById('tigerChance').value) || 2;
        this.animals[4].multiplier = parseFloat(document.getElementById('tigerMultiplier').value) || 9.0;
        
        this.psychTricks.enabled = document.getElementById('enablePsychTricks').checked;
        this.psychTricks.easyWinsCount = parseInt(document.getElementById('easyWinsCount').value) || 5;
        this.psychTricks.easyWinsBonus = parseInt(document.getElementById('easyWinsBonus').value) || 30;
        this.psychTricks.lossReduction = parseInt(document.getElementById('lossReduction').value) || 15;
        this.psychTricks.enableNearMiss = document.getElementById('enableNearMiss').checked;
        this.psychTricks.enableSounds = document.getElementById('enableSounds').checked;
        
        this.house.guaranteeProfit = document.getElementById('guaranteeProfit').checked;
        this.house.targetEdge = parseFloat(document.getElementById('houseEdge').value) || 0;
    }

    loadToUI() {
        document.getElementById('ratChance').value = this.animals[0].chance;
        document.getElementById('ratMultiplier').value = this.animals[0].multiplier;
        document.getElementById('oxChance').value = this.animals[1].chance;
        document.getElementById('oxMultiplier').value = this.animals[1].multiplier;
        document.getElementById('medalChance').value = this.animals[2].chance;
        document.getElementById('medalMultiplier').value = this.animals[2].multiplier;
        document.getElementById('rabbitChance').value = this.animals[3].chance;
        document.getElementById('rabbitMultiplier').value = this.animals[3].multiplier;
        document.getElementById('tigerChance').value = this.animals[4].chance;
        document.getElementById('tigerMultiplier').value = this.animals[4].multiplier;
        
        document.getElementById('enablePsychTricks').checked = this.psychTricks.enabled;
        document.getElementById('easyWinsCount').value = this.psychTricks.easyWinsCount;
        document.getElementById('easyWinsBonus').value = this.psychTricks.easyWinsBonus;
        document.getElementById('lossReduction').value = this.psychTricks.lossReduction;
        document.getElementById('enableNearMiss').checked = this.psychTricks.enableNearMiss;
        document.getElementById('enableSounds').checked = this.psychTricks.enableSounds;
        
        document.getElementById('guaranteeProfit').checked = this.house.guaranteeProfit;
        document.getElementById('houseEdge').value = this.house.targetEdge;
    }
}

// Global instances
const gameState = new GameState();
const gameSettings = new GameSettings();

// =====================================
// VISUAL EFFECTS
// =====================================

class ParticlesEffect {
    constructor() {
        this.particles = [];
        this.init();
    }

    init() {
        const container = document.getElementById('particles-background');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 3 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = `rgba(${Math.random() > 0.5 ? '99, 102, 241' : '236, 72, 153'}, ${Math.random() * 0.5})`;
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(particle);
            this.particles.push(particle);
        }
    }
}

class ConfettiEffect {
    constructor() {
        this.canvas = document.getElementById('confettiCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.confetti = [];
        this.colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createConfetti(count = 100) {
        for (let i = 0; i < count; i++) {
            this.confetti.push({
                x: Math.random() * this.canvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 3 + 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                size: Math.random() * 8 + 4,
                color: this.colors[Math.floor(Math.random() * this.colors.length)]
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.confetti = this.confetti.filter(c => c.y < this.canvas.height);
        
        this.confetti.forEach(c => {
            c.x += c.vx;
            c.y += c.vy;
            c.rotation += c.rotationSpeed;
            c.vy += 0.1; // gravity
            
            this.ctx.save();
            this.ctx.translate(c.x, c.y);
            this.ctx.rotate(c.rotation * Math.PI / 180);
            this.ctx.fillStyle = c.color;
            this.ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
            this.ctx.restore();
        });
        
        if (this.confetti.length > 0) {
            requestAnimationFrame(() => this.animate());
        }
    }

    launch() {
        this.createConfetti();
        this.animate();
    }
}

// =====================================
// GAME LOGIC
// =====================================

class SlotMachine {
    constructor() {
        this.slots = [
            document.getElementById('slot1'),
            document.getElementById('slot2'),
            document.getElementById('slot3')
        ];
    }

    async spin(results) {
        // Add spinning animation
        this.slots.forEach(slot => slot.classList.add('spinning'));
        
        // Random animation
        const duration = 2000;
        const interval = 100;
        const iterations = duration / interval;
        
        for (let i = 0; i < iterations; i++) {
            await this.delay(interval);
            this.slots.forEach(slot => {
                const randomAnimal = gameSettings.animals[Math.floor(Math.random() * gameSettings.animals.length)];
                slot.querySelector('.animal-icon').textContent = randomAnimal.icon;
            });
        }
        
        // Show final results with stagger
        for (let i = 0; i < 3; i++) {
            await this.delay(300);
            this.slots[i].classList.remove('spinning');
            this.slots[i].querySelector('.animal-icon').textContent = results[i].icon;
        }
        
        await this.delay(300);
    }

    async showWin() {
        this.slots.forEach(slot => slot.classList.add('win-glow'));
        await this.delay(2000);
        this.slots.forEach(slot => slot.classList.remove('win-glow'));
    }

    async showNearMiss() {
        this.slots.forEach(slot => slot.classList.add('near-miss'));
        await this.delay(500);
        this.slots.forEach(slot => slot.classList.remove('near-miss'));
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

class GameEngine {
    constructor() {
        this.slotMachine = new SlotMachine();
        this.confetti = new ConfettiEffect();
    }

    getRandomAnimal() {
        const animals = [...gameSettings.animals];
        
        // Apply psychological adjustments
        if (gameSettings.psychTricks.enabled) {
            if (gameState.psychological.phase === 'HOOK' && gameState.psychological.easyWinsRemaining > 0) {
                // Boost high-value animals during hook phase
                animals.forEach(animal => {
                    if (animal.multiplier > 1.5) {
                        animal.chance += gameSettings.psychTricks.easyWinsBonus;
                    }
                });
            } else if (gameState.psychological.phase === 'LOSS') {
                // Reduce high-value animals during loss phase
                animals.forEach(animal => {
                    if (animal.multiplier > 1.5) {
                        animal.chance = Math.max(1, animal.chance - gameSettings.psychTricks.lossReduction);
                    }
                });
            }
        }
        
        // Weighted random selection
        const totalWeight = animals.reduce((sum, animal) => sum + animal.chance, 0);
        let random = Math.random() * totalWeight;
        
        for (const animal of animals) {
            random -= animal.chance;
            if (random <= 0) {
                return gameSettings.animals.find(a => a.id === animal.id);
            }
        }
        
        return gameSettings.animals[0];
    }

    generateResults() {
        let results = [
            this.getRandomAnimal(),
            this.getRandomAnimal(),
            this.getRandomAnimal()
        ];
        
        // Check for near-miss manipulation
        if (gameSettings.psychTricks.enabled && gameSettings.psychTricks.enableNearMiss) {
            const allDifferent = results[0].id !== results[1].id && 
                                results[1].id !== results[2].id && 
                                results[0].id !== results[2].id;
            
            if (allDifferent && Math.random() < 0.4) {
                // Create near-miss (2 matching)
                const matchIndex = Math.floor(Math.random() * 3);
                if (matchIndex === 0) {
                    results[2] = results[0];
                } else if (matchIndex === 1) {
                    results[2] = results[1];
                } else {
                    results[1] = results[0];
                }
            }
        }
        
        return results;
    }

    checkWin(results) {
        return results[0].id === results[1].id && results[1].id === results[2].id;
    }

    checkNearMiss(results) {
        return (results[0].id === results[1].id && results[1].id !== results[2].id) ||
               (results[1].id === results[2].id && results[0].id !== results[1].id) ||
               (results[0].id === results[2].id && results[0].id !== results[1].id);
    }

    async play(betAmount) {
        if (gameState.isSpinning || gameState.balance < betAmount) {
            return;
        }
        
        gameState.isSpinning = true;
        gameState.updateBalance(-betAmount);
        UI.updateAll();
        
        // Play spin sound
        if (gameSettings.psychTricks.enableSounds) {
            AudioManager.play('spin');
        }
        
        // Generate results
        const results = this.generateResults();
        
        // Spin animation
        await this.slotMachine.spin(results);
        
        // Check results
        const isWin = this.checkWin(results);
        const isNearMiss = this.checkNearMiss(results);
        
        if (isWin) {
            await this.handleWin(results[0], betAmount);
        } else {
            await this.handleLoss(betAmount, isNearMiss);
        }
        
        // Update psychological state
        gameState.updatePsychologicalPhase();
        gameState.checkDeposit();
        
        gameState.isSpinning = false;
        UI.updateAll();
    }

    async handleWin(animal, betAmount) {
        const winAmount = betAmount * animal.multiplier;
        
        gameState.updateBalance(winAmount);
        gameState.addPlay(true, betAmount, winAmount);
        
        // Visual effects
        await this.slotMachine.showWin();
        this.confetti.launch();
        
        // Play win sound
        if (gameSettings.psychTricks.enableSounds) {
            AudioManager.play('win');
        }
        
        // Show win modal
        UI.showWinModal(animal, winAmount);
        
        // Add to history
        HistoryManager.add('win', `Vitória! ${animal.icon} ${animal.name} - Ganhou R$ ${winAmount.toFixed(2)}`);
    }

    async handleLoss(betAmount, isNearMiss) {
        gameState.addPlay(false, betAmount);
        
        if (isNearMiss && gameSettings.psychTricks.enableNearMiss) {
            await this.slotMachine.showNearMiss();
            HistoryManager.add('info', `Quase! Você quase ganhou - Perdeu R$ ${betAmount.toFixed(2)}`);
        } else {
            HistoryManager.add('loss', `Perdeu R$ ${betAmount.toFixed(2)}`);
        }
    }
}

// =====================================
// UI MANAGEMENT
// =====================================

class UIManager {
    updateBalance() {
        document.getElementById('balance').textContent = gameState.balance.toFixed(2).replace('.', ',');
    }

    updateStatistics() {
        document.getElementById('totalPlays').textContent = gameState.statistics.totalPlays;
        document.getElementById('totalWins').textContent = gameState.statistics.totalWins;
        document.getElementById('playerProfit').textContent = 
            'R$ ' + gameState.statistics.playerProfit.toFixed(2).replace('.', ',');
        document.getElementById('houseProfit').textContent = 
            'R$ ' + gameState.statistics.houseProfit.toFixed(2).replace('.', ',');
    }

    updatePhaseIndicator() {
        const phase = PSYCHOLOGICAL_PHASES[gameState.psychological.phase];
        const phaseText = document.getElementById('phaseText');
        const phaseFill = document.getElementById('phaseFill');
        
        if (gameState.psychological.phase === 'HOOK') {
            const percentage = (gameState.psychological.easyWinsRemaining / gameSettings.psychTricks.easyWinsCount) * 100;
            phaseText.textContent = `Fase Inicial - ${gameState.psychological.easyWinsRemaining} jogadas fáceis restantes`;
            phaseFill.style.width = percentage + '%';
        } else if (gameState.psychological.phase === 'LOSS') {
            phaseText.textContent = 'Fase de Perda Progressiva - Chances Reduzidas';
            phaseFill.style.width = '10%';
        } else {
            phaseText.textContent = 'Fase Normal';
            phaseFill.style.width = '50%';
        }
    }

    updateAll() {
        this.updateBalance();
        this.updateStatistics();
        this.updatePhaseIndicator();
        this.updateButtons();
    }

    updateButtons() {
        const spinBtn = document.getElementById('spinBtn');
        const decreaseBtn = document.getElementById('decreaseBet');
        const increaseBtn = document.getElementById('increaseBet');
        const currentBet = BET_VALUES[currentBetIndex];
        
        // Update spin button
        spinBtn.disabled = gameState.isSpinning || gameState.balance < currentBet;
        
        if (gameState.isSpinning) {
            spinBtn.classList.add('spinning');
        } else {
            spinBtn.classList.remove('spinning');
        }
        
        // Update bet controls
        decreaseBtn.disabled = currentBetIndex === 0 || gameState.isSpinning;
        increaseBtn.disabled = currentBetIndex === BET_VALUES.length - 1 || gameState.isSpinning;
        
        // Update bet display
        document.getElementById('currentBet').textContent = currentBet;
    }

    showWinModal(animal, amount) {
        document.getElementById('winIcon').textContent = animal.icon;
        document.getElementById('winAmount').textContent = 'R$ ' + amount.toFixed(2).replace('.', ',');
        ModalManager.open('winModal');
    }
}

class ModalManager {
    static open(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
    }

    static close(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('active');
    }

    static init() {
        // Close buttons
        document.querySelectorAll('[data-close]').forEach(element => {
            element.addEventListener('click', (e) => {
                const modalId = e.target.getAttribute('data-close') || 
                               e.target.closest('[data-close]').getAttribute('data-close');
                this.close(modalId);
            });
        });

        // Continue button in win modal
        document.getElementById('continueBtn').addEventListener('click', () => {
            this.close('winModal');
        });
    }
}

class HistoryManager {
    static add(type, message) {
        const log = document.getElementById('historyLog');
        
        // Remove empty message
        const empty = log.querySelector('.history-empty');
        if (empty) empty.remove();
        
        const item = document.createElement('div');
        item.className = `history-item ${type}`;
        item.innerHTML = `
            <span class="history-time">${new Date().toLocaleTimeString('pt-BR')}</span>
            <span class="history-message">${message}</span>
        `;
        
        log.insertBefore(item, log.firstChild);
        
        // Keep only last 20 entries
        while (log.children.length > 20) {
            log.removeChild(log.lastChild);
        }
    }

    static clear() {
        const log = document.getElementById('historyLog');
        log.innerHTML = '<div class="history-empty">Nenhuma jogada ainda. Comece apostando!</div>';
    }
}

class AudioManager {
    static sounds = {
        win: document.getElementById('winSound'),
        spin: document.getElementById('spinSound')
    };

    static play(soundName) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log('Audio playback failed:', e));
        }
    }
}

// =====================================
// INITIALIZATION
// =====================================

const gameEngine = new GameEngine();
const UI = new UIManager();

function initializeGame() {
    // Initialize visual effects
    new ParticlesEffect();
    
    // Initialize modals
    ModalManager.init();
    
    // Load settings to UI
    gameSettings.loadToUI();
    
    // Update UI
    UI.updateAll();
    
    // Add initial history message
    HistoryManager.add('info', 'Bem-vindo ao Professor Tigrinho! Fase inicial ativada - Aproveite!');
    
    // Event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Bet controls
    document.getElementById('decreaseBet').addEventListener('click', () => {
        if (currentBetIndex > 0 && !gameState.isSpinning) {
            currentBetIndex--;
            UI.updateButtons();
        }
    });
    
    document.getElementById('increaseBet').addEventListener('click', () => {
        if (currentBetIndex < BET_VALUES.length - 1 && !gameState.isSpinning) {
            currentBetIndex++;
            UI.updateButtons();
        }
    });
    
    // Spin button
    document.getElementById('spinBtn').addEventListener('click', () => {
        const currentBet = BET_VALUES[currentBetIndex];
        gameEngine.play(currentBet);
    });
    
    // Action buttons
    document.getElementById('configBtn').addEventListener('click', () => {
        ModalManager.open('configModal');
    });
    
    document.getElementById('infoBtn').addEventListener('click', () => {
        ModalManager.open('infoModal');
    });
    
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('Tem certeza que deseja reiniciar o jogo? Todas as estatísticas serão perdidas.')) {
            gameState.reset();
            UI.updateAll();
            HistoryManager.clear();
            HistoryManager.add('info', 'Jogo reiniciado! Fase inicial ativada - Aproveite!');
        }
    });
    
    // Config save button
    document.getElementById('saveConfig').addEventListener('click', () => {
        gameSettings.updateFromUI();
        gameState.psychological.easyWinsRemaining = gameSettings.psychTricks.easyWinsCount;
        gameState.psychological.phase = 'HOOK';
        UI.updateAll();
        ModalManager.close('configModal');
        HistoryManager.add('info', 'Configurações atualizadas! Fase inicial reiniciada.');
    });
    
    // Clear history button
    document.getElementById('clearHistory').addEventListener('click', () => {
        HistoryManager.clear();
    });
    
    // Toggle psych settings visibility
    document.getElementById('enablePsychTricks').addEventListener('change', (e) => {
        const settings = document.getElementById('psychSettings');
        settings.style.display = e.target.checked ? 'block' : 'none';
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeGame);

// =====================================
// DEVELOPER CONSOLE INFO
// =====================================

console.log('%c🐯 Professor Tigrinho - Simulador Educativo', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cDesenvolvido por Jonathan', 'font-size: 14px; color: #ec4899;');
console.log('%cProjeto Educativo - Demonstra táticas psicológicas de jogos de azar', 'font-size: 12px; color: #94a3b8;');
console.log('\n💡 Dica: Abra as Configurações para ajustar as táticas psicológicas!\n');
