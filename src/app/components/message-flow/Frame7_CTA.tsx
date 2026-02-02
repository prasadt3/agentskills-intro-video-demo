import { motion } from 'motion/react';

// Frame 7: CTA - Follow for more (7s)
export function Frame7_CTA() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* OpenClaw logo */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="text-[52px] tracking-[-0.03em]"
          style={{ color: '#D97757', fontWeight: 700 }}
        >
          OpenClaw
        </p>

        {/* Tagline */}
        <motion.p
          className="text-[18px] mt-2"
          style={{ color: '#FAF9F5', fontWeight: 500 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Architecture Breakdowns
        </motion.p>
      </motion.div>

      {/* CTA text with pulse */}
      <motion.div
        className="mt-10 px-8 py-4 rounded-xl"
        style={{ border: '2px solid #D97757' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <motion.p
          className="text-[18px]"
          style={{ color: '#D97757', fontWeight: 600 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        >
          Follow for more
        </motion.p>
      </motion.div>

      {/* Target audience */}
      <motion.p
        className="text-[14px] mt-8 text-center max-w-xs"
        style={{ color: '#FAF9F5', opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.3, delay: 1.5 }}
      >
        If you build with AI agents
      </motion.p>

      {/* Open source badge */}
      <motion.div
        className="mt-6 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.3, delay: 2.0 }}
      >
        <span className="text-[12px]" style={{ color: '#FAF9F5' }}>
          Open Source
        </span>
        <span className="text-[12px]" style={{ color: '#D97757' }}>•</span>
        <span className="text-[12px]" style={{ color: '#FAF9F5' }}>
          github.com/openclaw
        </span>
      </motion.div>
    </div>
  );
}
