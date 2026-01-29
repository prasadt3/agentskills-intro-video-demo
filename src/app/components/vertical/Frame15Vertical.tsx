import { motion } from 'motion/react';

export function Frame15Vertical() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#141413',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top - Photo */}
      <motion.div
        style={{
          width: '100%',
          height: '45%',
          position: 'relative',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <img
          src="/src/images/moshe.jpg"
          alt="Portrait"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
      </motion.div>

      {/* Bottom - Text content */}
      <div
        style={{
          width: '100%',
          height: '55%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '32px 24px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <motion.div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#FAF9F5',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            La IA que usas es inteligente.
          </motion.div>
          <motion.div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#D97757',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          >
            Pero no conoce tu negocio.
          </motion.div>
        </div>

        {/* Branding */}
        <motion.div
          style={{
            marginTop: '48px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#D97757',
              marginBottom: '4px',
            }}
          >
            myAgentSkills
          </div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgba(250, 249, 245, 0.5)',
            }}
          >
            from Agentman
          </div>
        </motion.div>
      </div>
    </div>
  );
}
