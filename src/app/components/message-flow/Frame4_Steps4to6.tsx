import { motion } from 'motion/react';
import { FlowArrow } from './shared/FlowArrow';

// Frame 4: Steps 4-6 - Gate, Session, AI Agent (14s)
export function Frame4_Steps4to6() {
  const steps = [
    {
      number: 4,
      title: 'GATE',
      subtitle: 'Allowlist check',
      icon: '🔒',
      delay: 0.3,
      glowDelay: 0.5,
      shake: true,
    },
    {
      number: 5,
      title: 'SESSION',
      subtitle: 'Conversation history',
      icon: '📜',
      delay: 5.0,
      glowDelay: 5.2,
      pulse: true,
    },
    {
      number: 6,
      title: 'AI AGENT',
      subtitle: 'Claude / GPT',
      icon: '✨',
      delay: 9.0,
      glowDelay: 9.5,
      isAI: true,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Previous steps indicator */}
      <motion.div
        className="flex items-center gap-2 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(74, 158, 255, 0.3)' }}
        >
          <span className="text-[10px]" style={{ color: '#FAF9F5' }}>1</span>
        </div>
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(74, 158, 255, 0.3)' }}
        >
          <span className="text-[10px]" style={{ color: '#FAF9F5' }}>2</span>
        </div>
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(74, 158, 255, 0.3)' }}
        >
          <span className="text-[10px]" style={{ color: '#FAF9F5' }}>3</span>
        </div>
        <span className="text-[10px] ml-2" style={{ color: '#FAF9F5', opacity: 0.5 }}>
          ✓ Complete
        </span>
      </motion.div>

      {/* Steps flow */}
      <div className="flex flex-col items-center gap-2 w-full max-w-xs">
        {steps.map((step, idx) => (
          <div key={step.number} className="w-full flex flex-col items-center">
            {/* Step box */}
            <motion.div
              className="w-full px-4 py-4 rounded-xl flex items-center gap-4 relative"
              style={{
                backgroundColor: step.isAI
                  ? 'rgba(217, 119, 87, 0.2)'
                  : 'rgba(250, 249, 245, 0.08)',
                border: step.isAI
                  ? '2px solid #D97757'
                  : '1px solid rgba(250, 249, 245, 0.1)',
              }}
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{
                opacity: 1,
                scale: step.isAI ? 1.05 : 1,
                x: 0,
                boxShadow: step.isAI
                  ? [
                      '0 0 0 rgba(217,119,87,0)',
                      '0 0 40px rgba(217,119,87,0.6)',
                      '0 0 20px rgba(217,119,87,0.3)',
                    ]
                  : [
                      '0 0 0 rgba(74,158,255,0)',
                      '0 0 20px rgba(74,158,255,0.5)',
                      '0 0 0 rgba(74,158,255,0)',
                    ],
              }}
              transition={{
                duration: step.isAI ? 0.5 : 0.3,
                delay: step.delay,
                ease: step.isAI ? 'easeOut' : 'easeInOut',
                boxShadow: { duration: step.isAI ? 2 : 1.5, delay: step.glowDelay },
              }}
            >
              {/* Step number badge */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: step.isAI ? '#D97757' : '#4A9EFF' }}
              >
                <span className="text-[14px]" style={{ color: '#FAF9F5', fontWeight: 600 }}>
                  {step.number}
                </span>
              </div>

              {/* Icon with animations */}
              <motion.span
                className="text-[20px]"
                animate={
                  step.shake
                    ? { rotate: [0, -5, 5, -5, 0] }
                    : step.pulse
                    ? { scale: [1, 1.1, 1] }
                    : {}
                }
                transition={{
                  duration: step.shake ? 0.4 : 0.6,
                  delay: step.shake ? 1.5 : step.pulse ? 5.5 : 0,
                }}
              >
                {step.icon}
              </motion.span>

              {/* Content */}
              <div className="flex flex-col">
                <span
                  className="text-[14px] tracking-wide"
                  style={{
                    color: step.isAI ? '#D97757' : '#FAF9F5',
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </span>
                <span
                  className="text-[11px]"
                  style={{ color: '#FAF9F5', opacity: 0.5 }}
                >
                  {step.subtitle}
                </span>
              </div>

              {/* Sparkle particles for AI */}
              {step.isAI && (
                <>
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: '#D97757',
                        top: '50%',
                        left: '50%',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, (i % 2 === 0 ? 1 : -1) * 30 * (i + 1) * 0.5],
                        y: [0, (i < 2 ? -1 : 1) * 20 * (i + 1) * 0.3],
                      }}
                      transition={{
                        duration: 1,
                        delay: step.glowDelay + 0.5 + i * 0.1,
                        repeat: 2,
                        repeatDelay: 0.5,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>

            {/* Arrow to next step */}
            {idx < steps.length - 1 && (
              <FlowArrow delay={step.delay + 2.0} />
            )}
          </div>
        ))}
      </div>

      {/* Emphasis text for AI step */}
      <motion.p
        className="text-[16px] mt-6 text-center"
        style={{ color: '#D97757', fontWeight: 600 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 11.0 }}
      >
        Now the AI sees your message.
      </motion.p>
    </div>
  );
}
