import { motion } from 'motion/react';

// Frame 1: Hook - "9 steps" dramatic reveal (5s)
export function Frame1_Hook() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Large "9" with dramatic entrance */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.p
          className="text-[120px] leading-none"
          style={{ color: '#D97757', fontWeight: 700 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        >
          9
        </motion.p>

        {/* "steps" text fades up after */}
        <motion.p
          className="text-[32px] tracking-wide"
          style={{ color: '#FAF9F5', fontWeight: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          steps
        </motion.p>
      </motion.div>

      {/* Subtext explanation */}
      <motion.p
        className="text-[16px] mt-8 text-center max-w-xs"
        style={{ color: '#FAF9F5' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        between hitting send and getting an AI response
      </motion.p>

      {/* "Let me show you" */}
      <motion.p
        className="text-[14px] mt-6"
        style={{ color: '#D97757', fontWeight: 500 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 2.0 }}
      >
        Let me show you.
      </motion.p>
    </div>
  );
}
