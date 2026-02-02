import { motion } from 'motion/react';
import { MessageCircle, Bot } from 'lucide-react';

// Frame 2: Setup - OpenClaw gateway intro (7s)
export function Frame2_Setup() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* OpenClaw wordmark */}
      <motion.p
        className="text-[40px] tracking-[-0.02em] mb-8"
        style={{ color: '#D97757', fontWeight: 700 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        OpenClaw
      </motion.p>

      {/* Tagline */}
      <motion.p
        className="text-[16px] mb-10 text-center"
        style={{ color: '#FAF9F5', opacity: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        A local gateway that routes your messages to AI
      </motion.p>

      {/* Gateway diagram */}
      <motion.div
        className="flex items-center justify-center gap-4 w-full max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {/* WhatsApp icon */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(37, 211, 102, 0.2)' }}
          >
            <MessageCircle size={24} style={{ color: '#25D366' }} />
          </div>
          <span className="text-[10px]" style={{ color: '#FAF9F5', opacity: 0.6 }}>
            WhatsApp
          </span>
        </motion.div>

        {/* Connecting dotted line */}
        <motion.div
          className="flex-1 h-[2px] relative overflow-hidden"
          style={{ backgroundColor: 'rgba(74, 158, 255, 0.3)' }}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {/* Animated dot traveling */}
          <motion.div
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: '#4A9EFF', top: '-3px' }}
            initial={{ left: '0%' }}
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>

        {/* Gateway box in middle */}
        <motion.div
          className="px-4 py-3 rounded-xl"
          style={{ backgroundColor: '#D97757' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <span className="text-[12px]" style={{ color: '#FAF9F5', fontWeight: 600 }}>
            GATEWAY
          </span>
        </motion.div>

        {/* Another connecting line */}
        <motion.div
          className="flex-1 h-[2px] relative overflow-hidden"
          style={{ backgroundColor: 'rgba(74, 158, 255, 0.3)' }}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <motion.div
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: '#4A9EFF', top: '-3px' }}
            initial={{ left: '0%' }}
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 1, delay: 3.0, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>

        {/* AI icon */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(217, 119, 87, 0.2)' }}
          >
            <Bot size={24} style={{ color: '#D97757' }} />
          </div>
          <span className="text-[10px]" style={{ color: '#FAF9F5', opacity: 0.6 }}>
            AI Agent
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom text */}
      <motion.p
        className="text-[14px] mt-10 text-center"
        style={{ color: '#FAF9F5', fontWeight: 500 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 3.5 }}
      >
        One WhatsApp message, start to finish.
      </motion.p>
    </div>
  );
}
