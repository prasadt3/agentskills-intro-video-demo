import { motion } from 'motion/react';

export function Frame11Vertical() {
  const tools = ['Claude', 'ChatGPT', 'Cursor', 'Agentman'];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#141413',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      {/* Headline */}
      <motion.div
        style={{
          fontSize: '36px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          marginBottom: '48px',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span style={{ color: '#FAF9F5' }}>Works </span>
        <span style={{ color: '#D97757' }}>everywhere.</span>
      </motion.div>

      {/* Top row - Procedures & Decision Logic */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <motion.div
          style={{
            width: '140px',
            height: '55px',
            borderRadius: '10px',
            border: '1px solid rgba(250, 249, 245, 0.4)',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
        >
          <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '14px' }}>
            Procedures
          </span>
        </motion.div>

        <motion.div
          style={{
            width: '140px',
            height: '55px',
            borderRadius: '10px',
            border: '1px solid rgba(250, 249, 245, 0.4)',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
        >
          <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '14px' }}>
            Decision Logic
          </span>
        </motion.div>
      </div>

      {/* Arrow lines going down */}
      <svg width="300" height="40" style={{ marginBottom: '-8px' }}>
        <defs>
          <marker
            id="arrow-down"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 8 3, 0 6"
              fill="rgba(250, 249, 245, 0.35)"
            />
          </marker>
        </defs>
        <motion.path
          d="M 75 0 L 75 35"
          fill="none"
          stroke="rgba(250, 249, 245, 0.35)"
          strokeWidth="2"
          strokeDasharray="5 4"
          markerEnd="url(#arrow-down)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
        />
        <motion.path
          d="M 225 0 L 225 35"
          fill="none"
          stroke="rgba(250, 249, 245, 0.35)"
          strokeWidth="2"
          strokeDasharray="5 4"
          markerEnd="url(#arrow-down)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
        />
      </svg>

      {/* CENTER BOX - Your AI Tools */}
      <motion.div
        style={{
          width: '300px',
          height: '140px',
          borderRadius: '12px',
          border: '2px solid rgba(250, 249, 245, 0.4)',
          backgroundColor: '#1a1a19',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          zIndex: 10,
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
      >
        {/* Header bar */}
        <div
          style={{
            backgroundColor: '#D97757',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#FAF9F5', fontWeight: 600, fontSize: '16px' }}>
            Your AI Tools
          </span>
        </div>

        {/* Four tool boxes - 2x2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', flex: 1 }}>
          {tools.map((tool, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#1a1a19',
                border: '1px solid rgba(250, 249, 245, 0.25)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '12px' }}>
                {tool}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Arrow lines going down from center */}
      <svg width="300" height="40" style={{ marginTop: '-8px' }}>
        <motion.path
          d="M 75 5 L 75 40"
          fill="none"
          stroke="rgba(250, 249, 245, 0.35)"
          strokeWidth="2"
          strokeDasharray="5 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7, ease: 'easeOut' }}
        />
        <motion.path
          d="M 225 5 L 225 40"
          fill="none"
          stroke="rgba(250, 249, 245, 0.35)"
          strokeWidth="2"
          strokeDasharray="5 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7, ease: 'easeOut' }}
        />
      </svg>

      {/* Bottom row - Business Rules & Templates */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
        <motion.div
          style={{
            width: '140px',
            height: '55px',
            borderRadius: '10px',
            border: '1px solid rgba(250, 249, 245, 0.4)',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8, ease: 'easeOut' }}
        >
          <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '14px' }}>
            Business Rules
          </span>
        </motion.div>

        <motion.div
          style={{
            width: '140px',
            height: '55px',
            borderRadius: '10px',
            border: '1px solid rgba(250, 249, 245, 0.4)',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9, ease: 'easeOut' }}
        >
          <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '14px' }}>
            Templates
          </span>
        </motion.div>
      </div>
    </div>
  );
}
