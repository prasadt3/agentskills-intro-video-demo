import { motion } from 'motion/react';

export function Frame2Vertical() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      {/* Text */}
      <motion.div
        className="text-[36px] tracking-[-0.02em] text-center"
        style={{ fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        <span style={{ color: '#FAF9F5' }}>It just doesn't know </span>
        <span style={{ color: '#D97757' }}>your business.</span>
      </motion.div>
    </div>
  );
}
