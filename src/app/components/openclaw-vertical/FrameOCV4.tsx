import { motion } from 'motion/react';

// Frame 4: Architecture diagram (vertical)
export function FrameOCV4() {
  const channels = [
    { name: 'WhatsApp', delay: 0.2 },
    { name: 'Telegram', delay: 0.25 },
    { name: 'Slack', delay: 0.3 },
    { name: 'Discord', delay: 0.35 },
    { name: 'Gmail', delay: 0.4 },
    { name: 'iMessage', delay: 0.45 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      {/* Title */}
      <motion.p
        className="text-[18px] mb-6"
        style={{ color: '#FAF9F5', fontWeight: 400, opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Your messaging world, unified
      </motion.p>

      {/* Channel boxes - 2 columns */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {channels.map((channel) => (
          <motion.div
            key={channel.name}
            className="px-3 py-2 rounded-lg text-center"
            style={{ backgroundColor: 'rgba(250, 249, 245, 0.1)' }}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: channel.delay }}
          >
            <span className="text-[11px]" style={{ color: '#FAF9F5', fontWeight: 500 }}>
              {channel.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Lines flowing down */}
      <motion.div
        className="w-[2px] h-8"
        style={{ backgroundColor: '#D97757' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />

      {/* Gateway box */}
      <motion.div
        className="px-8 py-4 rounded-xl my-3"
        style={{ backgroundColor: '#D97757' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <p className="text-[16px] text-center" style={{ color: '#FAF9F5', fontWeight: 600 }}>
          OPENCLAW GATEWAY
        </p>
        <p className="text-[11px] text-center mt-1" style={{ color: '#FAF9F5', opacity: 0.8 }}>
          (runs on YOUR machine)
        </p>
      </motion.div>

      {/* Line to AI */}
      <motion.div
        className="w-[2px] h-8"
        style={{ backgroundColor: '#D97757' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      />

      {/* AI Agent box */}
      <motion.div
        className="px-6 py-3 rounded-xl"
        style={{ backgroundColor: '#1f1f1e', border: '2px solid rgba(250, 249, 245, 0.2)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        <p className="text-[14px] text-center" style={{ color: '#FAF9F5', fontWeight: 500 }}>
          AI AGENT
        </p>
        <p className="text-[10px] text-center mt-1" style={{ color: '#FAF9F5', opacity: 0.5 }}>
          Claude / GPT
        </p>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-[18px] mt-8 tracking-[-0.01em] text-center px-4"
        style={{ color: '#D97757', fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.8 }}
      >
        Same assistant. Same memory. Different front doors.
      </motion.p>
    </div>
  );
}
