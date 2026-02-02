import { motion } from 'motion/react';

// Frame 5: How it works - 4 step flow (0:40-0:55)
export function FrameOC5() {
  const steps = [
    {
      number: '1',
      title: 'Message Arrives',
      desc: '"Are you free for drinks tomorrow evening?"',
      label: 'WhatsApp',
      delay: 0.3,
    },
    {
      number: '2',
      title: 'Gateway Routes It',
      desc: 'Session management & routing',
      label: 'GATEWAY',
      isGateway: true,
      delay: 0.8,
    },
    {
      number: '3',
      title: 'AI Processes It',
      desc: 'Checks calendar, drafts response',
      label: 'AI AGENT',
      isAI: true,
      delay: 1.3,
    },
    {
      number: '4',
      title: 'Response Delivered',
      desc: '"Yes! I\'m free after 6pm tomorrow."',
      label: 'WhatsApp',
      delay: 1.8,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      {/* Title */}
      <motion.p
        className="text-[32px] mb-12"
        style={{ color: '#FAF9F5', fontWeight: 600 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Here's how it works
      </motion.p>

      {/* Steps row */}
      <div className="flex items-center gap-4">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex items-center">
            <motion.div
              className="flex flex-col items-center w-[200px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              {/* Step number */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#D97757' }}
              >
                <span className="text-[18px]" style={{ color: '#FAF9F5', fontWeight: 600 }}>
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <p
                className="text-[16px] text-center mb-2"
                style={{ color: '#FAF9F5', fontWeight: 600 }}
              >
                {step.title}
              </p>

              {/* Description */}
              <p
                className="text-[13px] text-center mb-4"
                style={{ color: '#FAF9F5', opacity: 0.6 }}
              >
                {step.desc}
              </p>

              {/* Label box */}
              <div
                className="px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: step.isGateway
                    ? '#D97757'
                    : step.isAI
                    ? '#1f1f1e'
                    : 'rgba(250, 249, 245, 0.1)',
                  border: step.isAI ? '1px solid rgba(250, 249, 245, 0.2)' : 'none',
                }}
              >
                <span
                  className="text-[12px]"
                  style={{ color: '#FAF9F5', fontWeight: 500 }}
                >
                  {step.label}
                </span>
              </div>
            </motion.div>

            {/* Arrow */}
            {idx < steps.length - 1 && (
              <motion.div
                className="mx-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.3, delay: step.delay + 0.3 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#FAF9F5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom message */}
      <motion.p
        className="text-[24px] mt-12"
        style={{ color: '#D97757', fontWeight: 500 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        You never left your favorite app.
      </motion.p>
    </div>
  );
}
