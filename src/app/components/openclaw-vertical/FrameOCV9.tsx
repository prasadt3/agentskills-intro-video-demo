import { motion } from 'motion/react';
import { MessageSquare, Zap, Calendar, Mail } from 'lucide-react';

// Frame 9: Beyond messaging - Event-driven agentic actions (vertical)
export function FrameOCV9() {
  const useCases = [
    { icon: MessageSquare, text: 'Multi-channel messaging', delay: 0.3 },
    { icon: Mail, text: 'Media campaigns', delay: 0.5 },
    { icon: Calendar, text: 'Workflow automation', delay: 0.7 },
    { icon: Zap, text: 'Event-driven actions', delay: 0.9 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Title */}
      <motion.p
        className="text-[22px] mb-6 text-center"
        style={{ color: '#FAF9F5', fontWeight: 500 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        But it's not just for messaging.
      </motion.p>

      {/* Use cases */}
      <div className="flex flex-col gap-3 my-6 w-full max-w-xs">
        {useCases.map((item) => (
          <motion.div
            key={item.text}
            className="flex items-center gap-3 px-4 py-3 rounded-lg"
            style={{ backgroundColor: 'rgba(250, 249, 245, 0.08)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: item.delay }}
          >
            <item.icon size={16} style={{ color: '#D97757' }} />
            <span className="text-[14px]" style={{ color: '#FAF9F5', fontWeight: 500 }}>
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Key insight */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <p
          className="text-[20px] tracking-[-0.02em]"
          style={{ fontWeight: 600 }}
        >
          <span style={{ color: '#FAF9F5' }}>Ideal for </span>
          <span style={{ color: '#D97757' }}>event-driven</span>
        </p>
        <p
          className="text-[20px] tracking-[-0.02em]"
          style={{ color: '#D97757', fontWeight: 600 }}
        >
          agentic actions.
        </p>
      </motion.div>

      {/* Subtext */}
      <motion.p
        className="text-[12px] mt-4 text-center max-w-xs"
        style={{ color: '#FAF9F5', opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.3, delay: 1.5 }}
      >
        Trigger AI actions from any channel, any event, any time.
      </motion.p>
    </div>
  );
}
