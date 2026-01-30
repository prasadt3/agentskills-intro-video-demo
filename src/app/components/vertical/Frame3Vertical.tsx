import { motion } from 'motion/react';

export function Frame3Vertical() {
  // Hub and spoke configuration for vertical layout
  const centerX = 150;
  const centerY = 150;
  const radius = 100;
  const numNodes = 6;

  // Calculate outer node positions
  const outerNodes = Array.from({ length: numNodes }, (_, i) => {
    const angle = (i * (360 / numNodes) - 90) * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      {/* Hub and spoke diagram */}
      <svg width="300" height="300" className="mb-8">
        {/* Draw spokes (lines from outer nodes to center) */}
        {outerNodes.map((node, idx) => (
          <motion.line
            key={`spoke-${idx}`}
            x1={node.x}
            y1={node.y}
            x2={centerX}
            y2={centerY}
            stroke="#FAF9F5"
            strokeWidth="2"
            strokeOpacity="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.08, ease: 'easeOut' }}
          />
        ))}

        {/* Draw outer nodes */}
        {outerNodes.map((node, idx) => (
          <motion.circle
            key={`outer-${idx}`}
            cx={node.x}
            cy={node.y}
            r="12"
            fill="#FAF9F5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.08, ease: 'easeOut' }}
          />
        ))}

        {/* Center hub */}
        <motion.rect
          x={centerX - 30}
          y={centerY - 30}
          width="60"
          height="60"
          rx="10"
          fill="#D97757"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8, ease: 'easeOut' }}
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col items-center gap-2">
        <motion.p
          className="text-[20px]"
          style={{ color: '#FAF9F5', fontWeight: 400 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}
        >
          Introducing
        </motion.p>
        <motion.p
          className="text-[42px] tracking-[-0.02em]"
          style={{ color: '#D97757', fontWeight: 700 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
        >
          myAgentSkills
        </motion.p>
      </div>
    </div>
  );
}
