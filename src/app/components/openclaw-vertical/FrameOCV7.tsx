import { motion } from 'motion/react';

// Frame 7: Implications - Today vs Tomorrow (vertical)
export function FrameOCV7() {
  const today = [
    'AI in browser tabs',
    'Context resets daily',
    'One channel at a time',
  ];

  const tomorrow = [
    'AI in your pocket',
    'Memory persists',
    'All channels unified',
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Comparison boxes - stacked */}
      <div className="flex flex-col gap-4 mb-6 w-full max-w-xs">
        {/* Today */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p
            className="text-[16px] mb-3 text-center"
            style={{ color: '#FAF9F5', fontWeight: 600, opacity: 0.5 }}
          >
            TODAY
          </p>
          <div
            className="px-5 py-4 rounded-xl"
            style={{ backgroundColor: 'rgba(250, 249, 245, 0.05)' }}
          >
            {today.map((item, idx) => (
              <motion.div
                key={item}
                className="flex items-center gap-2 mb-2 last:mb-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 0.2, delay: 0.4 + idx * 0.1 }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: '#FAF9F5', opacity: 0.4 }}
                />
                <span className="text-[13px]" style={{ color: '#FAF9F5' }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 6V26M16 26L8 18M16 26L24 18"
              stroke="#D97757"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Tomorrow */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p
            className="text-[16px] mb-3 text-center"
            style={{ color: '#D97757', fontWeight: 600 }}
          >
            TOMORROW
          </p>
          <div
            className="px-5 py-4 rounded-xl"
            style={{ backgroundColor: 'rgba(217, 119, 87, 0.15)' }}
          >
            {tomorrow.map((item, idx) => (
              <motion.div
                key={item}
                className="flex items-center gap-2 mb-2 last:mb-0"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.6 + idx * 0.1 }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: '#D97757' }}
                />
                <span className="text-[13px]" style={{ color: '#FAF9F5', fontWeight: 500 }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Key insight */}
      <motion.div
        className="text-center max-w-xs px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <p
          className="text-[18px] tracking-[-0.02em] italic"
          style={{ color: '#D97757', fontWeight: 500 }}
        >
          "The product is the assistant, not the gateway."
        </p>
      </motion.div>
    </div>
  );
}
