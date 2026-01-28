import { motion } from 'motion/react';

export function Frame6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* AI tool icons */}
      <div className="flex gap-4 mb-8">
        {[0, 1, 2, 3].map((idx) => (
          <motion.div
            key={idx}
            className="w-8 h-8 rounded-lg"
            style={{ backgroundColor: '#FAF9F5', opacity: 0.4 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 0.3, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* Text */}
      <motion.div
        className="text-[56px] tracking-[-0.02em] text-center max-w-5xl"
        style={{ fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
      >
        <span style={{ color: '#FAF9F5' }}>Use it across </span>
        <span style={{ color: '#D97757' }}>every AI surface.</span>
      </motion.div>
    </div>
  );
}
