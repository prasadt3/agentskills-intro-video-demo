import { motion } from 'motion/react';
import { BookOpen, Wrench, Users } from 'lucide-react';

export function Frame8() {
  const features = [
    { icon: BookOpen, text: '60+ production-ready skills' },
    { icon: Wrench, text: 'Clone and customize' },
    { icon: Users, text: 'Maintainable by your frontline team' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + idx * 0.15, ease: 'easeOut' }}
          >
            <feature.icon
              size={24}
              strokeWidth={2}
              style={{ color: '#D97757' }}
            />
            <span
              className="text-[32px]"
              style={{ color: '#FAF9F5', fontWeight: 500 }}
            >
              {feature.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}