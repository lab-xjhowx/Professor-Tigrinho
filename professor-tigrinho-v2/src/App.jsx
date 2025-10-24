/**
 * 🎮 MAIN APP COMPONENT
 * Componente principal com roteamento
 */

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contribute from './pages/Contribute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contribute" element={<Contribute />} />
    </Routes>
  );
}

export default App;
