import { motion } from 'motion/react';

export function Frame15() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#141413',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left side - Text content */}
      <div
        style={{
          width: '55%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '80px',
          paddingRight: '40px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <motion.div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#FAF9F5',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            La IA que usas es inteligente.
          </motion.div>
          <motion.div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#D97757',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            Pero no conoce tu negocio.
          </motion.div>
        </div>
      </div>

      {/* Right side - Photo */}
      <motion.div
        style={{
          width: '45%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <img
          src="/src/images/moshe.jpg"
          alt="Portrait"
          style={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '100%',
            width: 'auto',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
      </motion.div>

      {/* Bottom left branding */}
      <motion.div
        style={{
          position: 'absolute',
          left: '48px',
          bottom: '48px',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#D97757',
            marginBottom: '4px',
          }}
        >
          myAgentSkills
        </div>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(250, 249, 245, 0.5)',
          }}
        >
          from Agentman
        </div>
      </motion.div>
    </div>
  );
}
