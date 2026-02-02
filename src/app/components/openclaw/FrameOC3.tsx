import { motion } from 'motion/react';

// Frame 3: Solution intro - "What if..." (0:15-0:22)
export function FrameOC3() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Question */}
      <motion.div
        className="text-center max-w-4xl px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p
          className="text-[48px] tracking-[-0.02em] leading-tight"
          style={{ fontWeight: 500 }}
        >
          <span style={{ color: '#FAF9F5' }}>What if your AI assistant just... </span>
          <motion.span
            style={{ color: '#D97757' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            showed up
          </motion.span>
        </p>
        <motion.p
          className="text-[48px] tracking-[-0.02em] leading-tight"
          style={{ color: '#D97757', fontWeight: 500 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          where you already are?
        </motion.p>
      </motion.div>

      {/* Introducing */}
      <motion.div
        className="mt-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.0 }}
      >
        <p
          className="text-[20px] mb-2"
          style={{ color: '#FAF9F5', fontWeight: 400, opacity: 0.7 }}
        >
          Introducing
        </p>
        <p
          className="text-[64px] tracking-[-0.03em]"
          style={{ color: '#D97757', fontWeight: 700 }}
        >
          OpenClaw
        </p>
      </motion.div>
    </div>
  );
}
