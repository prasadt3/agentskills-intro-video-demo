import { motion } from 'motion/react';

export function Frame8Vertical() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      {/* Text lines stacked */}
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="text-[32px] tracking-[-0.02em] text-center"
          style={{ fontWeight: 500, color: '#FAF9F5' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          Introducing
        </motion.div>

        <motion.div
          className="text-[48px] tracking-[-0.02em] text-center"
          style={{ fontWeight: 700, color: '#D97757' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
        >
          myAgentSkills
        </motion.div>
      </div>
    </div>
  );
}
