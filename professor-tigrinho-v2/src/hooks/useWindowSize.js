/**
 * 📏 HOOK: useWindowSize
 * Hook personalizado para obter dimensões da janela
 */

import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });

  useEffect(() => {
    // Handler para atualizar o tamanho
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adicionar event listener
    window.addEventListener('resize', handleResize);

    // Chamar handler imediatamente para obter o tamanho inicial
    handleResize();

    // Remover event listener no cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;

