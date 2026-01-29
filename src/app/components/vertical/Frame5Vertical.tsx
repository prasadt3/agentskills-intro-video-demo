import { motion } from 'motion/react';

export function Frame5Vertical() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      {/* Accent line */}
      <motion.div
        className="w-10 h-[3px] mb-6"
        style={{ backgroundColor: '#D97757' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
      />

      {/* Text */}
      <motion.div
        className="text-[36px] tracking-[-0.02em] text-center"
        style={{ fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
      >
        <span style={{ color: '#FAF9F5' }}>Write your expertise </span>
        <span style={{ color: '#D97757' }}>once.</span>
      </motion.div>
    </div>
  );
}
