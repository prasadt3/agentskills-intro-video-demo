import { motion } from 'motion/react';

export function Frame9Vertical() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Main text */}
      <motion.div
        className="text-[28px] tracking-[-0.02em] text-center leading-relaxed"
        style={{ fontWeight: 500, color: '#FAF9F5' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        Transform your expertise into
      </motion.div>

      <motion.div
        className="text-[28px] tracking-[-0.02em] text-center leading-relaxed mt-2"
        style={{ fontWeight: 600, color: '#D97757' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
      >
        portable AI skills
      </motion.div>

      <motion.div
        className="text-[28px] tracking-[-0.02em] text-center leading-relaxed mt-2"
        style={{ fontWeight: 500, color: '#FAF9F5' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
      >
        that work across all your AI tools.
      </motion.div>
    </div>
  );
}
