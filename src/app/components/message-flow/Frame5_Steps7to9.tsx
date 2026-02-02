import { motion } from 'motion/react';
import { FlowArrow } from './shared/FlowArrow';
import { FileText, Image, Volume2, Check } from 'lucide-react';

// Frame 5: Steps 7-9 - Reply, Dispatcher, Delivery (12s)
export function Frame5_Steps7to9() {
  const steps = [
    {
      number: 7,
      title: 'REPLY',
      subtitle: 'Agent builds response',
      icon: '💬',
      delay: 0.3,
    },
    {
      number: 8,
      title: 'DISPATCHER',
      subtitle: 'Formats for platform',
      icon: '📤',
      delay: 3.5,
      showFormats: true,
    },
    {
      number: 9,
      title: 'DELIVERY',
      subtitle: 'Back through Baileys',
      icon: '📱',
      delay: 8.0,
      isDelivery: true,
    },
  ];

  const formatIcons = [
    { Icon: FileText, delay: 4.0 },
    { Icon: Image, delay: 4.2 },
    { Icon: Volume2, delay: 4.4 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Previous steps indicator */}
      <motion.div
        className="flex items-center gap-1 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.3 }}
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="w-4 h-4 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: num === 6
                ? 'rgba(217, 119, 87, 0.5)'
                : 'rgba(74, 158, 255, 0.3)',
            }}
          >
            <span className="text-[8px]" style={{ color: '#FAF9F5' }}>{num}</span>
          </div>
        ))}
        <span className="text-[10px] ml-2" style={{ color: '#FAF9F5', opacity: 0.5 }}>
          ✓
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
                backgroundColor: step.isDelivery
                  ? 'rgba(37, 211, 102, 0.15)'
                  : 'rgba(250, 249, 245, 0.08)',
                border: step.isDelivery
                  ? '1px solid rgba(37, 211, 102, 0.5)'
                  : '1px solid rgba(250, 249, 245, 0.1)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: step.delay }}
            >
              {/* Step number badge */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: step.isDelivery ? '#25D366' : '#4A9EFF',
                }}
              >
                <span className="text-[14px]" style={{ color: '#FAF9F5', fontWeight: 600 }}>
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <span className="text-[20px]">{step.icon}</span>

              {/* Content */}
              <div className="flex flex-col flex-1">
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

                {/* Typing animation for Reply */}
                {step.number === 7 && (
                  <motion.div
                    className="mt-2 h-[2px] rounded"
                    style={{ backgroundColor: '#4A9EFF' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                )}

                {/* Format icons for Dispatcher */}
                {step.showFormats && (
                  <div className="flex gap-2 mt-2">
                    {formatIcons.map(({ Icon, delay }, i) => (
                      <motion.div
                        key={i}
                        className="w-6 h-6 rounded flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(74, 158, 255, 0.2)' }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay }}
                      >
                        <Icon size={12} style={{ color: '#4A9EFF' }} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Checkmark for delivery */}
              {step.isDelivery && (
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#25D366' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 10.0, ease: 'backOut' }}
                >
                  <Check size={16} style={{ color: '#FAF9F5' }} />
                </motion.div>
              )}
            </motion.div>

            {/* Arrow to next step */}
            {idx < steps.length - 1 && (
              <FlowArrow delay={step.delay + 1.5} />
            )}
          </div>
        ))}
      </div>

      {/* Delivery confirmation */}
      <motion.p
        className="text-[14px] mt-6 text-center"
        style={{ color: '#25D366', fontWeight: 500 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 10.5 }}
      >
        Message delivered ✓
      </motion.p>
    </div>
  );
}
