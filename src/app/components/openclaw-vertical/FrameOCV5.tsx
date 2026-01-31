import { motion } from 'motion/react';

// Frame 5: How it works - 4 step flow (vertical)
export function FrameOCV5() {
  const steps = [
    {
      number: '1',
      title: 'Message Arrives',
      desc: '"Are you free for drinks tomorrow evening?"',
      label: 'WhatsApp',
      delay: 0.2,
    },
    {
      number: '2',
      title: 'Gateway Routes It',
      desc: 'Session management & routing',
      label: 'GATEWAY',
      isGateway: true,
      delay: 0.5,
    },
    {
      number: '3',
      title: 'AI Processes It',
      desc: 'Checks calendar, drafts response',
      label: 'AI AGENT',
      isAI: true,
      delay: 0.8,
    },
    {
      number: '4',
      title: 'Response Delivered',
      desc: '"Yes! I\'m free after 6pm tomorrow."',
      label: 'WhatsApp',
      delay: 1.1,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Title */}
      <motion.p
        className="text-[24px] mb-8"
        style={{ color: '#FAF9F5', fontWeight: 600 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Here's how it works
      </motion.p>

      {/* Steps column */}
      <div className="flex flex-col items-center gap-3">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex flex-col items-center">
            <motion.div
              className="flex items-center gap-3 w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: step.delay }}
            >
              {/* Step number */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#D97757' }}
              >
                <span className="text-[14px]" style={{ color: '#FAF9F5', fontWeight: 600 }}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p
                  className="text-[14px]"
                  style={{ color: '#FAF9F5', fontWeight: 600 }}
                >
                  {step.title}
                </p>
                <p
                  className="text-[11px]"
                  style={{ color: '#FAF9F5', opacity: 0.6 }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Label box */}
              <div
                className="px-3 py-1 rounded-lg flex-shrink-0"
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
                  className="text-[10px]"
                  style={{ color: '#FAF9F5', fontWeight: 500 }}
                >
                  {step.label}
                </span>
              </div>
            </motion.div>

            {/* Arrow down */}
            {idx < steps.length - 1 && (
              <motion.div
                className="my-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.2, delay: step.delay + 0.2 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 3V13M8 13L4 9M8 13L12 9"
                    stroke="#FAF9F5"
                    strokeWidth="1.5"
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
        className="text-[18px] mt-8 text-center"
        style={{ color: '#D97757', fontWeight: 500 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.6 }}
      >
        You never left your favorite app.
      </motion.p>
    </div>
  );
}
