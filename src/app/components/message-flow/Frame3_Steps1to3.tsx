import { motion } from 'motion/react';
import { FlowArrow } from './shared/FlowArrow';

// Frame 3: Steps 1-3 - Baileys, Monitor, Router (12s)
export function Frame3_Steps1to3() {
  const steps = [
    {
      number: 1,
      title: 'BAILEYS',
      subtitle: 'WhatsApp connection',
      icon: '📱',
      delay: 0.3,
      glowDelay: 0.5,
    },
    {
      number: 2,
      title: 'MONITOR',
      subtitle: 'Normalizes formats',
      icon: '📋',
      delay: 4.0,
      glowDelay: 4.2,
    },
    {
      number: 3,
      title: 'ROUTER',
      subtitle: 'Decides destination',
      icon: '🔀',
      delay: 8.0,
      glowDelay: 8.2,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Title */}
      <motion.p
        className="text-[14px] mb-6"
        style={{ color: '#FAF9F5', opacity: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        Message received...
      </motion.p>

      {/* Steps flow */}
      <div className="flex flex-col items-center gap-2 w-full max-w-xs">
        {steps.map((step, idx) => (
          <div key={step.number} className="w-full flex flex-col items-center">
            {/* Step box */}
            <motion.div
              className="w-full px-4 py-4 rounded-xl flex items-center gap-4 relative"
              style={{
                backgroundColor: 'rgba(250, 249, 245, 0.08)',
                border: '1px solid rgba(250, 249, 245, 0.1)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                boxShadow: [
                  '0 0 0 rgba(74,158,255,0)',
                  '0 0 20px rgba(74,158,255,0.5)',
                  '0 0 0 rgba(74,158,255,0)',
                ],
              }}
              transition={{
                duration: 0.3,
                delay: step.delay,
                boxShadow: { duration: 1.5, delay: step.glowDelay },
              }}
            >
              {/* Step number badge */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#4A9EFF' }}
              >
                <span className="text-[14px]" style={{ color: '#FAF9F5', fontWeight: 600 }}>
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <span className="text-[20px]">{step.icon}</span>

              {/* Content */}
              <div className="flex flex-col">
                <span
                  className="text-[14px] tracking-wide"
                  style={{ color: '#FAF9F5', fontWeight: 600 }}
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
            </motion.div>

            {/* Arrow to next step */}
            {idx < steps.length - 1 && (
              <FlowArrow delay={step.delay + 1.5} />
            )}
          </div>
        ))}
      </div>

      {/* Caption for current step */}
      <motion.p
        className="text-[12px] mt-6 text-center max-w-xs"
        style={{ color: '#FAF9F5', opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.3, delay: 10.0 }}
      >
        Different platforms, same format now.
      </motion.p>
    </div>
  );
}
