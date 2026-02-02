import { motion } from 'motion/react';

// Frame 7: Implications - Today vs Tomorrow (0:72-0:85)
export function FrameOC7() {
  const today = [
    'AI in browser tabs',
    'Context resets daily',
    'One channel at a time',
    'Manual tool access',
  ];

  const tomorrow = [
    'AI in your pocket',
    'Memory persists',
    'All channels unified',
    'Ambient automation',
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Comparison boxes */}
      <div className="flex gap-16 mb-12">
        {/* Today */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="text-[24px] mb-6 text-center"
            style={{ color: '#FAF9F5', fontWeight: 600, opacity: 0.5 }}
          >
            TODAY
          </p>
          <div
            className="px-8 py-6 rounded-xl"
            style={{ backgroundColor: 'rgba(250, 249, 245, 0.05)' }}
          >
            {today.map((item, idx) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 mb-3 last:mb-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.15 }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#FAF9F5', opacity: 0.4 }}
                />
                <span className="text-[16px]" style={{ color: '#FAF9F5' }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M10 24H38M38 24L28 14M38 24L28 34"
              stroke="#D97757"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Tomorrow */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p
            className="text-[24px] mb-6 text-center"
            style={{ color: '#D97757', fontWeight: 600 }}
          >
            TOMORROW
          </p>
          <div
            className="px-8 py-6 rounded-xl"
            style={{ backgroundColor: 'rgba(217, 119, 87, 0.15)' }}
          >
            {tomorrow.map((item, idx) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 mb-3 last:mb-0"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + idx * 0.15 }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#D97757' }}
                />
                <span className="text-[16px]" style={{ color: '#FAF9F5', fontWeight: 500 }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Key insight */}
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <p
          className="text-[28px] tracking-[-0.02em] italic"
          style={{ color: '#D97757', fontWeight: 500 }}
        >
          "The product is the assistant, not the gateway."
        </p>
      </motion.div>

      {/* Vision statement */}
      <motion.p
        className="text-[20px] mt-8 text-center max-w-2xl"
        style={{ color: '#FAF9F5', fontWeight: 400, opacity: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 2.4 }}
      >
        We're building infrastructure so you can have a personal AI that actually feels... personal.
      </motion.p>
    </div>
  );
}
