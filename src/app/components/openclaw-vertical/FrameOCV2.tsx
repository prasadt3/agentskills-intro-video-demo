import { motion } from 'motion/react';

// Frame 2: Problem - The gap (vertical)
export function FrameOCV2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Split comparison - stacked */}
      <div className="flex flex-col items-center gap-4 mb-8">
        {/* You */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div
            className="px-6 py-3 rounded-lg"
            style={{ backgroundColor: 'rgba(250, 249, 245, 0.1)' }}
          >
            <span className="text-[14px]" style={{ color: '#FAF9F5', fontWeight: 500 }}>
              You: Scattered across 10 apps
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-12 h-[2px]"
          style={{ backgroundColor: 'rgba(250, 249, 245, 0.2)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        />

        {/* AI */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div
            className="px-6 py-3 rounded-lg"
            style={{ backgroundColor: 'rgba(217, 119, 87, 0.2)' }}
          >
            <span className="text-[14px]" style={{ color: '#D97757', fontWeight: 500 }}>
              AI: Stuck in a browser tab
            </span>
          </div>
        </motion.div>
      </div>

      {/* Main message */}
      <motion.div
        className="text-center max-w-xs px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <p
          className="text-[24px] tracking-[-0.02em] leading-tight"
          style={{ color: '#FAF9F5', fontWeight: 400 }}
        >
          Your conversations are scattered.
        </p>
        <p
          className="text-[20px] tracking-[-0.02em] leading-tight mt-2"
          style={{ color: '#FAF9F5', fontWeight: 400 }}
        >
          Your context is fragmented.
        </p>
      </motion.div>

      {/* Punch line */}
      <motion.p
        className="text-[20px] tracking-[-0.02em] mt-8 text-center px-4"
        style={{ color: '#D97757', fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        The best AI in the world is useless... if you never use it.
      </motion.p>
    </div>
  );
}
