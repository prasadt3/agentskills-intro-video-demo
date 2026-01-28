import { motion } from 'motion/react';

interface Node {
  x: number;
  y: number;
  color: string;
}

interface Connection {
  from: number;
  to: number;
}

export function Frame1() {
  // Generate network nodes
  const nodes: Node[] = [
    { x: 400, y: 250, color: '#FAF9F5' },
    { x: 550, y: 200, color: '#D97757' },
    { x: 700, y: 230, color: '#FAF9F5' },
    { x: 850, y: 260, color: '#D97757' },
    { x: 450, y: 350, color: '#D97757' },
    { x: 600, y: 320, color: '#FAF9F5' },
    { x: 750, y: 340, color: '#D97757' },
    { x: 900, y: 310, color: '#FAF9F5' },
    { x: 500, y: 450, color: '#FAF9F5' },
    { x: 650, y: 420, color: '#D97757' },
    { x: 800, y: 440, color: '#FAF9F5' },
  ];

  // Define connections between nodes
  const connections: Connection[] = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 0, to: 4 },
    { from: 1, to: 5 },
    { from: 2, to: 6 },
    { from: 3, to: 7 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 6, to: 7 },
    { from: 4, to: 8 },
    { from: 5, to: 9 },
    { from: 6, to: 10 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Network visualization */}
      <svg width="1200" height="600" className="mb-12">
        {/* Draw connections */}
        {connections.map((conn, idx) => (
          <motion.line
            key={`line-${idx}`}
            x1={nodes[conn.from].x}
            y1={nodes[conn.from].y}
            x2={nodes[conn.to].x}
            y2={nodes[conn.to].y}
            stroke="#FAF9F5"
            strokeWidth="1"
            strokeOpacity="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.05, ease: 'easeOut' }}
          />
        ))}
        
        {/* Draw nodes */}
        {nodes.map((node, idx) => (
          <motion.circle
            key={`node-${idx}`}
            cx={node.x}
            cy={node.y}
            r="8"
            fill={node.color}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05, ease: 'easeOut' }}
          />
        ))}
      </svg>

      {/* Text */}
      <motion.p
        className="text-[48px] tracking-[-0.02em]"
        style={{ color: '#FAF9F5', fontWeight: 500 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
      >
        Your AI is smart.
      </motion.p>
    </div>
  );
}
