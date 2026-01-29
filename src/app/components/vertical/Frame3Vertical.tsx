import { motion } from 'motion/react';

export function Frame3Vertical() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      {/* Text */}
      <motion.div
        className="text-[32px] tracking-[-0.02em] text-center leading-relaxed"
        style={{ fontWeight: 500 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        <span style={{ color: '#FAF9F5' }}>Now you can </span>
        <span style={{ color: '#D97757' }}>teach it.</span>
      </motion.div>
    </div>
  );
}
