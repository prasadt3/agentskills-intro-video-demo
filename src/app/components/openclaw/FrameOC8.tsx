import { motion } from 'motion/react';

// Frame 8: CTA + Branding (0:85-0:90)
export function FrameOC8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Logo */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* OpenClaw wordmark */}
        <p
          className="text-[72px] tracking-[-0.03em]"
          style={{ color: '#D97757', fontWeight: 700 }}
        >
          OpenClaw
        </p>

        {/* Tagline */}
        <motion.p
          className="text-[28px] mt-4 tracking-[-0.01em]"
          style={{ color: '#FAF9F5', fontWeight: 500 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Your AI, everywhere you chat.
        </motion.p>
      </motion.div>

      {/* Open source badge */}
      <motion.div
        className="mt-6 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <span className="text-[14px]" style={{ color: '#FAF9F5', opacity: 0.6 }}>
          Open Source
        </span>
        <span className="text-[14px]" style={{ color: '#D97757' }}>•</span>
        <span className="text-[14px]" style={{ color: '#FAF9F5', opacity: 0.6 }}>
          MIT License
        </span>
        <span className="text-[14px]" style={{ color: '#D97757' }}>•</span>
        <span className="text-[14px]" style={{ color: '#FAF9F5', opacity: 0.6 }}>
          117k+ ⭐ on GitHub
        </span>
      </motion.div>

      {/* URL / CTA */}
      <motion.div
        className="mt-10 flex items-center gap-3 px-8 py-4 rounded-xl"
        style={{ border: '2px solid #D97757' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <span
          className="text-[20px]"
          style={{ color: '#D97757', fontWeight: 600 }}
        >
          github.com/openclaw
        </span>
      </motion.div>

      {/* Lobster tagline */}
      <motion.p
        className="text-[14px] mt-10 italic"
        style={{ color: '#FAF9F5', fontWeight: 400, opacity: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        "The lobster way." 🦞
      </motion.p>
    </div>
  );
}
