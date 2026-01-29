import { motion } from 'motion/react';

export function Frame10Vertical() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      {/* Logo */}
      <motion.div
        className="text-[42px] tracking-[-0.02em] mb-6"
        style={{ fontWeight: 700, color: '#D97757' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        myAgentSkills
      </motion.div>

      {/* Tagline */}
      <motion.div
        className="text-[18px] tracking-[-0.01em] text-center"
        style={{ fontWeight: 400, color: 'rgba(250, 249, 245, 0.6)' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
      >
        from Agentman
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-16 px-8 py-4 rounded-full"
        style={{ backgroundColor: '#D97757' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
      >
        <span className="text-[18px]" style={{ color: '#FAF9F5', fontWeight: 600 }}>
          Get Started Free
        </span>
      </motion.div>
    </div>
  );
}
