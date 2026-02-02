import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FlowBoxProps {
  title: string;
  icon?: ReactNode;
  subtitle?: string;
  delay?: number;
  isHighlighted?: boolean;
  isAI?: boolean;
  glowDelay?: number;
  dimmed?: boolean;
}

export function FlowBox({
  title,
  icon,
  subtitle,
  delay = 0,
  isHighlighted = false,
  isAI = false,
  glowDelay,
  dimmed = false,
}: FlowBoxProps) {
  return (
    <motion.div
      className="relative px-4 py-3 rounded-xl flex items-center gap-3"
      style={{
        backgroundColor: isAI
          ? 'rgba(217, 119, 87, 0.2)'
          : 'rgba(250, 249, 245, 0.08)',
        border: isAI ? '2px solid #D97757' : '1px solid rgba(250, 249, 245, 0.1)',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: dimmed ? 0.2 : 1,
        scale: isAI ? 1.05 : 1,
        boxShadow: isHighlighted
          ? ['0 0 0 rgba(74,158,255,0)', '0 0 20px rgba(74,158,255,0.5)', '0 0 0 rgba(74,158,255,0)']
          : isAI
          ? ['0 0 0 rgba(217,119,87,0)', '0 0 40px rgba(217,119,87,0.6)', '0 0 20px rgba(217,119,87,0.3)']
          : 'none'
      }}
      transition={{
        duration: 0.3,
        delay,
        boxShadow: isHighlighted || isAI ? { duration: 1.5, delay: glowDelay || delay + 0.2 } : undefined
      }}
    >
      {icon && (
        <span className="text-[16px]">{icon}</span>
      )}
      <div className="flex flex-col">
        <span
          className="text-[14px] tracking-wide"
          style={{
            color: isAI ? '#D97757' : '#FAF9F5',
            fontWeight: 600
          }}
        >
          {title}
        </span>
        {subtitle && (
          <span
            className="text-[10px]"
            style={{ color: '#FAF9F5', opacity: 0.5 }}
          >
            {subtitle}
          </span>
        )}
      </div>
    </motion.div>
  );
}
