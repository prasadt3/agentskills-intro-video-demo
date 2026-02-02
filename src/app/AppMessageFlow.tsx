import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Frame1_Hook } from './components/message-flow/Frame1_Hook';
import { Frame2_Setup } from './components/message-flow/Frame2_Setup';
import { Frame3_Steps1to3 } from './components/message-flow/Frame3_Steps1to3';
import { Frame4_Steps4to6 } from './components/message-flow/Frame4_Steps4to6';
import { Frame5_Steps7to9 } from './components/message-flow/Frame5_Steps7to9';
import { Frame6_Insight } from './components/message-flow/Frame6_Insight';
import { Frame7_CTA } from './components/message-flow/Frame7_CTA';

// Episode 2: Message Flow - 9 steps from send to response
export function AppMessageFlow() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [muteAudio, setMuteAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const frames = [
    { component: Frame1_Hook, duration: 5000 },        // 0:00-0:05
    { component: Frame2_Setup, duration: 7000 },       // 0:05-0:12
    { component: Frame3_Steps1to3, duration: 12000 },  // 0:12-0:24
    { component: Frame4_Steps4to6, duration: 14000 },  // 0:24-0:38
    { component: Frame5_Steps7to9, duration: 12000 },  // 0:38-0:50
    { component: Frame6_Insight, duration: 8000 },     // 0:50-0:58
    { component: Frame7_CTA, duration: 7000 },         // 0:58-0:65
  ];

  // Handle mute URL param for recording
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setMuteAudio(params.has('mute'));
    if (audioRef.current && !params.has('mute')) {
      audioRef.current.playbackRate = 1.2;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  // Frame progression
  useEffect(() => {
    if (currentFrame >= frames.length) return;
    const timer = setTimeout(() => {
      setCurrentFrame((prev) => prev + 1);
    }, frames[currentFrame].duration);
    return () => clearTimeout(timer);
  }, [currentFrame, frames]);

  const CurrentFrameComponent = frames[currentFrame]?.component;

  return (
    <div
      className="w-screen h-screen overflow-hidden"
      style={{ backgroundColor: '#1f1f1e' }}
    >
      {!muteAudio && (
        <audio ref={audioRef} src="/message_flow.mp3" />
      )}

      <AnimatePresence mode="wait">
        {CurrentFrameComponent && (
          <motion.div
            key={currentFrame}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <CurrentFrameComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
