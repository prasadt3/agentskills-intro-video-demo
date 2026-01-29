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

export function Frame1Vertical() {
  // Generate network nodes - adjusted for vertical layout
  const nodes: Node[] = [
    { x: 150, y: 200, color: '#FAF9F5' },
    { x: 270, y: 160, color: '#D97757' },
    { x: 390, y: 190, color: '#FAF9F5' },
    { x: 510, y: 220, color: '#D97757' },
    { x: 180, y: 300, color: '#D97757' },
    { x: 300, y: 270, color: '#FAF9F5' },
    { x: 420, y: 290, color: '#D97757' },
    { x: 540, y: 260, color: '#FAF9F5' },
    { x: 210, y: 400, color: '#FAF9F5' },
    { x: 330, y: 370, color: '#D97757' },
    { x: 450, y: 390, color: '#FAF9F5' },
    { x: 240, y: 500, color: '#D97757' },
    { x: 360, y: 470, color: '#FAF9F5' },
    { x: 480, y: 490, color: '#D97757' },
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
    { from: 8, to: 9 },
    { from: 9, to: 10 },
    { from: 8, to: 11 },
    { from: 9, to: 12 },
    { from: 10, to: 13 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Network visualization */}
      <svg width="700" height="700" className="mb-8">
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
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.03, ease: 'easeOut' }}
          />
        ))}

        {/* Draw nodes */}
        {nodes.map((node, idx) => (
          <motion.circle
            key={`node-${idx}`}
            cx={node.x}
            cy={node.y}
            r="6"
            fill={node.color}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.04, ease: 'easeOut' }}
          />
        ))}
      </svg>

      {/* Text */}
      <motion.p
        className="text-[36px] tracking-[-0.02em] text-center px-8"
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
