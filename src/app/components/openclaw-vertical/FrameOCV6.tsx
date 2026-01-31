import { motion } from 'motion/react';
import { Home, Globe, Shield } from 'lucide-react';

// Frame 6: Key Benefits - 3 pillars (vertical)
export function FrameOCV6() {
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
      delay: 0.7,
    },
    {
      icon: Shield,
      title: 'SECURE BY DEFAULT',
      desc: 'Strangers get a pairing code.',
      sub: 'You control who talks to your AI.',
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
        Three things that matter
      </motion.p>

      {/* Benefits column */}
      <div className="flex flex-col gap-6">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.title}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: benefit.delay }}
          >
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(217, 119, 87, 0.2)' }}
            >
              <benefit.icon size={22} style={{ color: '#D97757' }} />
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Title */}
              <p
                className="text-[14px] mb-1 tracking-wide"
                style={{ color: '#D97757', fontWeight: 700 }}
              >
                {benefit.title}
              </p>

              {/* Description */}
              <p
                className="text-[14px]"
                style={{ color: '#FAF9F5', fontWeight: 500 }}
              >
                {benefit.desc}
              </p>

              {/* Sub description */}
              <p
                className="text-[12px] mt-1"
                style={{ color: '#FAF9F5', opacity: 0.6 }}
              >
                {benefit.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
