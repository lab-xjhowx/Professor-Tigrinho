/**
 * 🚀 MAIN ENTRY POINT
 * Ponto de entrada da aplicação
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/globals.css';

// Render da aplicação
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// Console message
console.log('%c🐯 Professor Tigrinho v2.0 carregado com sucesso!', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
console.log('%cProjeto open-source educativo • by Jonathan (@xjhowx)', 'color: #94a3b8; font-size: 12px;');

// Content Protection
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('selectstart', (e) => e.preventDefault());
document.addEventListener('copy', (e) => e.preventDefault());
document.addEventListener('cut', (e) => e.preventDefault());

// Keyboard shortcuts protection
document.addEventListener('keydown', (e) => {
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});

