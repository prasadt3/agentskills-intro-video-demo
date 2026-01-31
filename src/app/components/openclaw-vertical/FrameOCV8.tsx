import { motion } from 'motion/react';

// Frame 8: CTA + Branding (vertical)
export function FrameOCV8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* OpenClaw wordmark */}
        <p
          className="text-[52px] tracking-[-0.03em]"
          style={{ color: '#D97757', fontWeight: 700 }}
        >
          OpenClaw
        </p>

        {/* Tagline */}
        <motion.p
          className="text-[20px] mt-3 tracking-[-0.01em] text-center"
          style={{ color: '#FAF9F5', fontWeight: 500 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Your AI, everywhere you chat.
        </motion.p>
      </motion.div>

      {/* Open source badge */}
      <motion.div
        className="mt-5 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[12px]" style={{ color: '#FAF9F5', opacity: 0.6 }}>
            Open Source
          </span>
          <span className="text-[12px]" style={{ color: '#D97757' }}>•</span>
          <span className="text-[12px]" style={{ color: '#FAF9F5', opacity: 0.6 }}>
            MIT License
          </span>
        </div>
        <span className="text-[12px]" style={{ color: '#FAF9F5', opacity: 0.6 }}>
          117k+ stars on GitHub
        </span>
      </motion.div>

      {/* URL / CTA */}
      <motion.div
        className="mt-8 flex items-center gap-3 px-6 py-3 rounded-xl"
        style={{ border: '2px solid #D97757' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <span
          className="text-[16px]"
          style={{ color: '#D97757', fontWeight: 600 }}
        >
          github.com/openclaw
        </span>
      </motion.div>

      {/* Lobster tagline */}
      <motion.p
        className="text-[12px] mt-8 italic"
        style={{ color: '#FAF9F5', fontWeight: 400, opacity: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.4, delay: 1.3 }}
      >
        "The lobster way." 🦞
      </motion.p>
    </div>
  );
}
