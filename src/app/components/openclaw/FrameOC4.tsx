import { motion } from 'motion/react';

// Frame 4: Architecture diagram (0:22-0:40)
export function FrameOC4() {
  const channels = [
    { name: 'WhatsApp', delay: 0.2 },
    { name: 'Telegram', delay: 0.25 },
    { name: 'Slack', delay: 0.3 },
    { name: 'Discord', delay: 0.35 },
    { name: 'Gmail', delay: 0.4 },
    { name: 'iMessage', delay: 0.45 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Title */}
      <motion.p
        className="text-[24px] mb-8"
        style={{ color: '#FAF9F5', fontWeight: 400, opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Your messaging world, unified
      </motion.p>

      {/* Channel boxes row */}
      <div className="flex gap-4 mb-8">
        {channels.map((channel) => (
          <motion.div
            key={channel.name}
            className="px-4 py-3 rounded-lg"
            style={{ backgroundColor: 'rgba(250, 249, 245, 0.1)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: channel.delay }}
          >
            <span className="text-[14px]" style={{ color: '#FAF9F5', fontWeight: 500 }}>
              {channel.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Lines flowing down */}
      <motion.div
        className="w-[2px] h-12"
        style={{ backgroundColor: '#D97757' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />

      {/* Gateway box */}
      <motion.div
        className="px-12 py-6 rounded-xl my-4"
        style={{ backgroundColor: '#D97757' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <p className="text-[20px] text-center" style={{ color: '#FAF9F5', fontWeight: 600 }}>
          OPENCLAW GATEWAY
        </p>
        <p className="text-[14px] text-center mt-1" style={{ color: '#FAF9F5', opacity: 0.8 }}>
          (runs on YOUR machine)
        </p>
      </motion.div>

      {/* Line to AI */}
      <motion.div
        className="w-[2px] h-12"
        style={{ backgroundColor: '#D97757' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      />

      {/* AI Agent box */}
      <motion.div
        className="px-10 py-5 rounded-xl"
        style={{ backgroundColor: '#1f1f1e', border: '2px solid rgba(250, 249, 245, 0.2)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
      >
        <p className="text-[18px] text-center" style={{ color: '#FAF9F5', fontWeight: 500 }}>
          AI AGENT
        </p>
        <p className="text-[12px] text-center mt-1" style={{ color: '#FAF9F5', opacity: 0.5 }}>
          Claude / GPT
        </p>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-[24px] mt-12 tracking-[-0.01em]"
        style={{ color: '#D97757', fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.8 }}
      >
        Same assistant. Same memory. Different front doors.
      </motion.p>
    </div>
  );
}
