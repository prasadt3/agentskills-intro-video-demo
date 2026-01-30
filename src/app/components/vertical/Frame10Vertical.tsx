import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Frame10Vertical() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-12 px-8">
      {/* Logo lockup */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        <p className="text-[36px]" style={{ color: '#D97757', fontWeight: 700 }}>
          myAgentSkills
        </p>
        <p className="text-[14px]" style={{ color: '#FAF9F5', opacity: 0.6, fontWeight: 400 }}>
          from Agentman
        </p>
      </motion.div>

      {/* URL */}
      <motion.p
        className="text-[42px] tracking-[-0.01em]"
        style={{ color: '#FAF9F5', fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
      >
        myagentskills.ai
      </motion.p>

      {/* CTA */}
      <motion.div
        className="flex items-center gap-2 px-5 py-3 rounded-lg border-2"
        style={{ borderColor: '#D97757' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
      >
        <span className="text-[20px]" style={{ color: '#D97757', fontWeight: 500 }}>
          Free to start
        </span>
        <ArrowRight size={20} style={{ color: '#D97757' }} />
      </motion.div>
    </div>
  );
}
