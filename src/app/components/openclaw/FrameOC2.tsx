import { motion } from 'motion/react';

// Frame 2: Problem - The gap (0:08-0:15)
export function FrameOC2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Split comparison */}
      <div className="flex items-center gap-8 mb-12">
        {/* You */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="px-8 py-4 rounded-lg"
            style={{ backgroundColor: 'rgba(250, 249, 245, 0.1)' }}
          >
            <span className="text-[18px]" style={{ color: '#FAF9F5', fontWeight: 500 }}>
              You: Scattered across 10 apps
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-[2px] h-16"
          style={{ backgroundColor: 'rgba(250, 249, 245, 0.2)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />

        {/* AI */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className="px-8 py-4 rounded-lg"
            style={{ backgroundColor: 'rgba(217, 119, 87, 0.2)' }}
          >
            <span className="text-[18px]" style={{ color: '#D97757', fontWeight: 500 }}>
              AI: Stuck in a browser tab
            </span>
          </div>
        </motion.div>
      </div>

      {/* Main message */}
      <motion.div
        className="text-center max-w-3xl px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p
          className="text-[32px] tracking-[-0.02em] leading-relaxed"
          style={{ color: '#FAF9F5', fontWeight: 400 }}
        >
          Your conversations are scattered.
        </p>
        <p
          className="text-[32px] tracking-[-0.02em] leading-relaxed mt-2"
          style={{ color: '#FAF9F5', fontWeight: 400 }}
        >
          Your context is fragmented.
        </p>
      </motion.div>

      {/* Punch line */}
      <motion.p
        className="text-[28px] tracking-[-0.02em] mt-8 text-center"
        style={{ color: '#D97757', fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        The best AI in the world is useless... if you never use it.
      </motion.p>
    </div>
  );
}
