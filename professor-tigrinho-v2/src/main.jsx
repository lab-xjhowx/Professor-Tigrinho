/**
 * 🚀 MAIN ENTRY POINT
 * Ponto de entrada da aplicação
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.css';

// Render da aplicação
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Console message
console.log('%c🐯 Professor Tigrinho v2.0 carregado com sucesso!', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
console.log('%cProjeto open-source educativo • by Jonathan (@xjhowx)', 'color: #94a3b8; font-size: 12px;');

