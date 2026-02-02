import { motion } from 'motion/react';

interface FlowArrowProps {
  delay?: number;
  direction?: 'down' | 'up' | 'right' | 'left';
  color?: string;
}

export function FlowArrow({
  delay = 0,
  direction = 'down',
  color = '#4A9EFF'
}: FlowArrowProps) {
  const rotation = {
    down: 0,
    up: 180,
    right: -90,
    left: 90
  };

  return (
    <motion.div
      className="flex justify-center py-1"
      style={{ transform: `rotate(${rotation[direction]}deg)` }}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 4V16M10 16L6 12M10 16L14 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
