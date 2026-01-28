import { motion } from 'motion/react';

export function Frame14() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Accent dot */}
      <motion.div
        className="w-2 h-2 rounded-full mb-6"
        style={{ backgroundColor: '#D97757' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
      />

      {/* Text */}
      <motion.div
        className="text-[48px] tracking-[-0.02em] text-center px-8"
        style={{ fontWeight: 600, maxWidth: '900px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
      >
        <span style={{ color: '#FAF9F5' }}>Using Skills in </span>
        <span style={{ color: '#D97757' }}>Agentman's Agents</span>
      </motion.div>
    </div>
  );
}
