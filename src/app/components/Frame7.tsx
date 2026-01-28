import { motion } from 'motion/react';

export function Frame7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Single dot representing "one" */}
      <motion.div
        className="w-4 h-4 rounded-full mb-6"
        style={{ backgroundColor: '#D97757' }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
      />

      {/* Text */}
      <motion.div
        className="text-[56px] tracking-[-0.02em]"
        style={{ fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
      >
        <span style={{ color: '#FAF9F5' }}>Update it in </span>
        <span style={{ color: '#D97757' }}>one place.</span>
      </motion.div>
    </div>
  );
}
