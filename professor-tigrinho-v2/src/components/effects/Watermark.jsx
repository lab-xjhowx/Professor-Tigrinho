/**
 * 💧 WATERMARK COMPONENT
 * Marca d'água digital educativa
 */

import { motion } from 'framer-motion';

export const Watermark = ({ text = "Professor Tigrinho by Jonathan (@xjhowx)" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      className="fixed bottom-4 right-4 pointer-events-none select-none z-50"
    >
      <div className="text-[10px] font-mono text-primary-400/30 tracking-wide">
        {text}
      </div>
    </motion.div>
  );
};

export default Watermark;

