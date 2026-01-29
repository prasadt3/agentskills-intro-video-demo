import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Frame1Vertical } from '@/app/components/vertical/Frame1Vertical';
import { Frame2Vertical } from '@/app/components/vertical/Frame2Vertical';
import { Frame3Vertical } from '@/app/components/vertical/Frame3Vertical';
import { Frame4Vertical } from '@/app/components/vertical/Frame4Vertical';
import { Frame5Vertical } from '@/app/components/vertical/Frame5Vertical';
import { Frame6Vertical } from '@/app/components/vertical/Frame6Vertical';
import { Frame7Vertical } from '@/app/components/vertical/Frame7Vertical';
import { Frame8Vertical } from '@/app/components/vertical/Frame8Vertical';
import { Frame9Vertical } from '@/app/components/vertical/Frame9Vertical';
import { Frame10Vertical } from '@/app/components/vertical/Frame10Vertical';
import { Frame11Vertical } from '@/app/components/vertical/Frame11Vertical';
import { Frame12Vertical } from '@/app/components/vertical/Frame12Vertical';
import { Frame13Vertical } from '@/app/components/vertical/Frame13Vertical';
import { Frame14Vertical } from '@/app/components/vertical/Frame14Vertical';
import { Frame15Vertical } from '@/app/components/vertical/Frame15Vertical';

const frames = [
  { component: Frame1Vertical, duration: 2000 },
  { component: Frame2Vertical, duration: 3000 },
  { component: Frame3Vertical, duration: 3000 },
  { component: Frame4Vertical, duration: 6000 },
  { component: Frame11Vertical, duration: 4000 },
  { component: Frame12Vertical, duration: 10000 },
  { component: Frame13Vertical, duration: 10000 },
  { component: Frame14Vertical, duration: 10000 },
  { component: Frame5Vertical, duration: 3000 },
  { component: Frame6Vertical, duration: 2000 },
  { component: Frame7Vertical, duration: 2000 },
  { component: Frame8Vertical, duration: 3000 },
  { component: Frame9Vertical, duration: 6000 },
  { component: Frame10Vertical, duration: 15000 },
  { component: Frame15Vertical, duration: 10000 },
];

export default function AppVertical() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentFrame < frames.length - 1) {
        setCurrentFrame(currentFrame + 1);
      } else {
        setCurrentFrame(0);
      }
    }, frames[currentFrame].duration);

    return () => clearTimeout(timer);
  }, [currentFrame, isPlaying]);

  const CurrentFrameComponent = frames[currentFrame].component;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        maxWidth: '1080px',
        maxHeight: '1920px',
        margin: '0 auto',
        backgroundColor: '#141413',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Main frame display */}
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFrame}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <CurrentFrameComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress indicator */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: '#1f1f1e' }}
      >
        <motion.div
          className="h-full"
          style={{ backgroundColor: '#D97757' }}
          initial={{ width: '0%' }}
          animate={{
            width: `${((currentFrame + 1) / frames.length) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
