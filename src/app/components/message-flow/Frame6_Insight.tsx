import { motion } from 'motion/react';

// Frame 6: Key Insight - AI only touches step 6 (8s)
export function Frame6_Insight() {
  const allSteps = [
    { number: 1, title: 'BAILEYS' },
    { number: 2, title: 'MONITOR' },
    { number: 3, title: 'ROUTER' },
    { number: 4, title: 'GATE' },
    { number: 5, title: 'SESSION' },
    { number: 6, title: 'AI AGENT', isAI: true },
    { number: 7, title: 'REPLY' },
    { number: 8, title: 'DISPATCHER' },
    { number: 9, title: 'DELIVERY' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Title */}
      <motion.p
        className="text-[18px] mb-6 text-center"
        style={{ color: '#FAF9F5', fontWeight: 500 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        The complete flow
      </motion.p>

      {/* Full 9-step diagram */}
      <motion.div
        className="w-full max-w-xs"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 0.85, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-3 gap-2">
          {allSteps.map((step) => (
            <motion.div
              key={step.number}
              className="px-2 py-3 rounded-lg flex flex-col items-center gap-1"
              style={{
                backgroundColor: step.isAI
                  ? 'rgba(217, 119, 87, 0.3)'
                  : 'rgba(250, 249, 245, 0.05)',
                border: step.isAI
                  ? '2px solid #D97757'
                  : '1px solid rgba(250, 249, 245, 0.1)',
              }}
              animate={{
                opacity: step.isAI ? 1 : 0.2,
                boxShadow: step.isAI
                  ? '0 0 30px rgba(217,119,87,0.8)'
                  : 'none',
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Step number */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: step.isAI ? '#D97757' : 'rgba(74, 158, 255, 0.3)',
                }}
              >
                <span
                  className="text-[10px]"
                  style={{ color: '#FAF9F5', fontWeight: 600 }}
                >
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <span
                className="text-[8px] text-center tracking-wide"
                style={{
                  color: step.isAI ? '#D97757' : '#FAF9F5',
                  fontWeight: step.isAI ? 600 : 400,
                }}
              >
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key insight text */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.0 }}
      >
        <p
          className="text-[24px] tracking-[-0.02em]"
          style={{ fontWeight: 600 }}
        >
          <span style={{ color: '#FAF9F5' }}>AI sees </span>
          <span style={{ color: '#D97757' }}>1</span>
          <span style={{ color: '#FAF9F5' }}> of </span>
          <span style={{ color: '#D97757' }}>9</span>
          <span style={{ color: '#FAF9F5' }}> steps</span>
        </p>
      </motion.div>

      {/* Supporting text */}
      <motion.p
        className="text-[14px] mt-4 text-center max-w-xs"
        style={{ color: '#FAF9F5', opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.3, delay: 3.5 }}
      >
        Everything else? Infrastructure you never think about.
      </motion.p>

      {/* Punch line */}
      <motion.p
        className="text-[16px] mt-4"
        style={{ color: '#D97757', fontWeight: 500 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 5.0 }}
      >
        That's the whole point.
      </motion.p>
    </div>
  );
}
