import { motion } from 'motion/react';

export function Frame4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Central logo/icon */}
      <svg width="1200" height="600" className="mb-16">
        {/* Decorative accent shapes (left) */}
        <motion.rect
          x="350"
          y="280"
          width="60"
          height="60"
          rx="12"
          fill="#E3DACC"
          fillOpacity="0.3"
          initial={{ scale: 0, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 0.3, rotate: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        />

        {/* Central hexagon logo */}
        <motion.rect
          x="500"
          y="200"
          width="200"
          height="200"
          rx="24"
          fill="#D97757"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
        />

        {/* Decorative accent shapes (right) */}
        <motion.rect
          x="790"
          y="280"
          width="60"
          height="60"
          rx="12"
          fill="#E3DACC"
          fillOpacity="0.3"
          initial={{ scale: 0, opacity: 0, rotate: 10 }}
          animate={{ scale: 1, opacity: 0.3, rotate: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col items-center gap-1 max-w-4xl">
        <motion.p
          className="text-[32px] text-center"
          style={{ color: '#FAF9F5', fontWeight: 400 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
        >
          The most transformative product
        </motion.p>
        <motion.p
          className="text-[32px] text-center"
          style={{ color: '#FAF9F5', fontWeight: 400 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: 'easeOut' }}
        >
          in Agentman's history.
        </motion.p>
      </div>

      {/* Bottom lockup */}
      <motion.p
        className="text-[16px] mt-16"
        style={{ color: '#FAF9F5', opacity: 0.6, fontWeight: 400 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
      >
        from Agentman
      </motion.p>
    </div>
  );
}
