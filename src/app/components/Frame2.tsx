import { motion } from 'motion/react';

interface Node {
  x: number;
  y: number;
  color: string;
}

interface Connection {
  from: number;
  to: number;
  broken?: boolean;
}

export function Frame2() {
  // Fragmented network - split into separate clusters
  const cluster1: Node[] = [
    { x: 300, y: 200, color: '#FAF9F5' },
    { x: 420, y: 180, color: '#D97757' },
    { x: 350, y: 290, color: '#D97757' },
  ];

  const cluster2: Node[] = [
    { x: 650, y: 150, color: '#FAF9F5' },
    { x: 760, y: 170, color: '#D97757' },
  ];

  const cluster3: Node[] = [
    { x: 600, y: 380, color: '#D97757' },
    { x: 710, y: 360, color: '#FAF9F5' },
    { x: 650, y: 470, color: '#FAF9F5' },
  ];

  const cluster4: Node[] = [
    { x: 950, y: 260, color: '#D97757' },
    { x: 1050, y: 280, color: '#FAF9F5' },
  ];

  const allNodes = [...cluster1, ...cluster2, ...cluster3, ...cluster4];

  // Connections within clusters
  const connections: Connection[] = [
    // Cluster 1
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 2 },
    // Cluster 2
    { from: 3, to: 4 },
    // Cluster 3
    { from: 5, to: 6 },
    { from: 6, to: 7 },
    // Cluster 4
    { from: 8, to: 9 },
    // Broken connections (dashed/faded)
    { from: 2, to: 5, broken: true },
    { from: 4, to: 8, broken: true },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Fragmented network visualization */}
      <svg width="1200" height="600" className="mb-12">
        {/* Draw connections */}
        {connections.map((conn, idx) => (
          <motion.line
            key={`line-${idx}`}
            x1={allNodes[conn.from].x}
            y1={allNodes[conn.from].y}
            x2={allNodes[conn.to].x}
            y2={allNodes[conn.to].y}
            stroke="#FAF9F5"
            strokeWidth="1"
            strokeOpacity={conn.broken ? '0.05' : '0.2'}
            strokeDasharray={conn.broken ? '5,5' : '0'}
            initial={{ opacity: 1 }}
            animate={{ opacity: conn.broken ? 0.3 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
        
        {/* Draw nodes */}
        {allNodes.map((node, idx) => (
          <motion.circle
            key={`node-${idx}`}
            cx={node.x}
            cy={node.y}
            r="8"
            fill={node.color}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        ))}
      </svg>

      {/* Text */}
      <motion.p
        className="text-[48px] tracking-[-0.02em] text-center max-w-4xl"
        style={{ color: '#FAF9F5', fontWeight: 500 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
      >
        It just doesn't know your business.
      </motion.p>
    </div>
  );
}
