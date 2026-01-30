import { motion } from 'motion/react';

export function Frame9Vertical() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Tagline */}
      <div className="flex flex-col items-center">
        <motion.div
          className="text-[42px] tracking-[-0.02em] text-center"
          style={{ fontWeight: 700 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <span style={{ color: '#FAF9F5' }}>Manage once.</span>
        </motion.div>
        <motion.div
          className="text-[42px] tracking-[-0.02em] text-center"
          style={{ fontWeight: 700, color: '#D97757' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
        >
          Use everywhere.
        </motion.div>

        {/* Accent line */}
        <motion.div
          className="w-[80px] h-[2px] mt-6"
          style={{ backgroundColor: '#D97757', opacity: 0.6 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
