import { motion } from 'motion/react';

export function Frame11() {
  const tools = ['Claude', 'ChatGPT', 'Cursor', 'Agentman'];

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#141413',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Headline - top center */}
      <motion.div
        style={{
          position: 'absolute',
          top: '80px',
          width: '100%',
          textAlign: 'center',
          fontSize: '56px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span style={{ color: '#FAF9F5' }}>Works </span>
        <span style={{ color: '#D97757' }}>everywhere.</span>
      </motion.div>

      {/* Main content wrapper - centered with flexbox */}
      <div
        style={{
          position: 'relative',
          width: '1200px',
          height: '500px',
          marginTop: '60px',
        }}
      >
        {/* CENTER BOX - Your AI Tools */}
        <motion.div
          style={{
            position: 'absolute',
            width: '560px',
            height: '150px',
            left: '50%',
            top: '50%',
            marginLeft: '-280px', /* half of width */
            marginTop: '-75px', /* half of height */
            borderRadius: '12px',
            border: '2px solid rgba(250, 249, 245, 0.4)',
            backgroundColor: '#1a1a19',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            zIndex: 10,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Header bar */}
          <div
            style={{
              backgroundColor: '#D97757',
              height: '48px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#FAF9F5', fontWeight: 600, fontSize: '20px' }}>
              Your AI Tools
            </span>
          </div>

          {/* Four tool boxes */}
          <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
            {tools.map((tool, idx) => (
              <div
                key={idx}
                style={{
                  flex: 1,
                  backgroundColor: '#1a1a19',
                  border: '1px solid rgba(250, 249, 245, 0.25)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '15px' }}>
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PROCEDURES - Top Left */}
        <motion.div
          style={{
            position: 'absolute',
            width: '160px',
            height: '70px',
            left: '60px',
            top: '40px',
            borderRadius: '10px',
            border: '1px solid rgba(250, 249, 245, 0.4)',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5, ease: 'easeOut' }}
        >
          <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '17px' }}>
            Procedures
          </span>
        </motion.div>

        {/* DECISION LOGIC - Top Right */}
        <motion.div
          style={{
            position: 'absolute',
            width: '160px',
            height: '70px',
            right: '60px',
            top: '40px',
            borderRadius: '10px',
            border: '1px solid rgba(250, 249, 245, 0.4)',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6, ease: 'easeOut' }}
        >
          <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '17px' }}>
            Decision Logic
          </span>
        </motion.div>

        {/* BUSINESS RULES - Bottom Left */}
        <motion.div
          style={{
            position: 'absolute',
            width: '160px',
            height: '70px',
            left: '60px',
            bottom: '40px',
            borderRadius: '10px',
            border: '1px solid rgba(250, 249, 245, 0.4)',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7, ease: 'easeOut' }}
        >
          <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '17px' }}>
            Business Rules
          </span>
        </motion.div>

        {/* TEMPLATES - Bottom Right */}
        <motion.div
          style={{
            position: 'absolute',
            width: '160px',
            height: '70px',
            right: '60px',
            bottom: '40px',
            borderRadius: '10px',
            border: '1px solid rgba(250, 249, 245, 0.4)',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8, ease: 'easeOut' }}
        >
          <span style={{ color: '#FAF9F5', fontWeight: 500, fontSize: '17px' }}>
            Templates
          </span>
        </motion.div>

        {/* SVG Connection Lines - using pixel coordinates */}
        <svg
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 5,
          }}
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="rgba(250, 249, 245, 0.35)"
              />
            </marker>
          </defs>

          {/* Line from Procedures (top-left) to center box - arrow points to center */}
          <motion.path
            d="M 220 110 L 380 175"
            fill="none"
            stroke="rgba(250, 249, 245, 0.35)"
            strokeWidth="2"
            strokeDasharray="5 4"
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          />

          {/* Line from Decision Logic (top-right) to center box - arrow points to center */}
          <motion.path
            d="M 980 110 L 820 175"
            fill="none"
            stroke="rgba(250, 249, 245, 0.35)"
            strokeWidth="2"
            strokeDasharray="5 4"
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          />

          {/* Line from Business Rules (bottom-left) to center box - arrow points to center */}
          <motion.path
            d="M 220 390 L 380 325"
            fill="none"
            stroke="rgba(250, 249, 245, 0.35)"
            strokeWidth="2"
            strokeDasharray="5 4"
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          />

          {/* Line from Templates (bottom-right) to center box - arrow points to center */}
          <motion.path
            d="M 980 390 L 820 325"
            fill="none"
            stroke="rgba(250, 249, 245, 0.35)"
            strokeWidth="2"
            strokeDasharray="5 4"
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          />
        </svg>
      </div>
    </div>
  );
}
