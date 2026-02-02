import { motion } from 'motion/react';
import { Home, Globe, Shield } from 'lucide-react';

// Frame 6: Key Benefits - 3 pillars (0:55-0:72)
export function FrameOC6() {
  const benefits = [
    {
      icon: Home,
      title: 'LOCAL-FIRST',
      desc: 'Your data stays on your device.',
      sub: 'No cloud middleman required.',
      delay: 0.3,
    },
    {
      icon: Globe,
      title: 'MULTI-CHANNEL',
      desc: 'One assistant across ALL your apps.',
      sub: 'Same memory everywhere.',
      delay: 0.8,
    },
    {
      icon: Shield,
      title: 'SECURE BY DEFAULT',
      desc: 'Strangers get a pairing code, not a response.',
      sub: 'You control who talks to your AI.',
      delay: 1.3,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Title */}
      <motion.p
        className="text-[32px] mb-12"
        style={{ color: '#FAF9F5', fontWeight: 600 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Three things that matter
      </motion.p>

      {/* Benefits row */}
      <div className="flex gap-12">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.title}
            className="flex flex-col items-center w-[280px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: benefit.delay }}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: 'rgba(217, 119, 87, 0.2)' }}
            >
              <benefit.icon size={28} style={{ color: '#D97757' }} />
            </div>

            {/* Title */}
            <p
              className="text-[18px] mb-4 tracking-wide"
              style={{ color: '#D97757', fontWeight: 700 }}
            >
              {benefit.title}
            </p>

            {/* Description */}
            <p
              className="text-[16px] text-center"
              style={{ color: '#FAF9F5', fontWeight: 500 }}
            >
              {benefit.desc}
            </p>

            {/* Sub description */}
            <p
              className="text-[14px] text-center mt-2"
              style={{ color: '#FAF9F5', opacity: 0.6 }}
            >
              {benefit.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
