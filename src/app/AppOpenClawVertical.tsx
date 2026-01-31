import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FrameOCV1 } from "@/app/components/openclaw-vertical/FrameOCV1";
import { FrameOCV2 } from "@/app/components/openclaw-vertical/FrameOCV2";
import { FrameOCV3 } from "@/app/components/openclaw-vertical/FrameOCV3";
import { FrameOCV4 } from "@/app/components/openclaw-vertical/FrameOCV4";
import { FrameOCV5 } from "@/app/components/openclaw-vertical/FrameOCV5";
import { FrameOCV6 } from "@/app/components/openclaw-vertical/FrameOCV6";
import { FrameOCV7 } from "@/app/components/openclaw-vertical/FrameOCV7";
import { FrameOCV8 } from "@/app/components/openclaw-vertical/FrameOCV8";
import { FrameOCV9 } from "@/app/components/openclaw-vertical/FrameOCV9";

// OpenClaw Introduction Video - VERTICAL (Short-form mobile)
// ~75 seconds synced to voiceover at 1.2x speed
const frames = [
  { component: FrameOCV1, duration: 6000 },  // Hook - Scattered reality (0-5.8s)
  { component: FrameOCV2, duration: 5000 },  // Problem - The gap (6.2-11.3s)
  { component: FrameOCV3, duration: 5000 },  // Solution intro (11.9-16.3s)
  { component: FrameOCV4, duration: 10000 }, // Architecture diagram (16.9-26.3s)
  { component: FrameOCV5, duration: 12000 }, // How it works (26.8-38.4s)
  { component: FrameOCV6, duration: 12000 }, // Key benefits (39.1-51.0s)
  { component: FrameOCV7, duration: 9000 },  // Implications (51.7-60.6s)
  { component: FrameOCV9, duration: 10000 }, // Event-driven use cases (61.1-70.4s)
  { component: FrameOCV8, duration: 6000 },  // CTA + Branding (70.9-75.5s)
];

export default function AppOpenClawVertical() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [muteAudio, setMuteAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Check for ?mute URL param to disable audio for recording
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setMuteAudio(params.has('mute'));

    // Auto-play audio on load if not muted
    if (audioRef.current && !params.has('mute')) {
      audioRef.current.playbackRate = 1.2;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentFrame < frames.length - 1) {
        setCurrentFrame(currentFrame + 1);
      } else {
        setCurrentFrame(0); // Loop back to first frame
      }
    }, frames[currentFrame].duration);

    return () => clearTimeout(timer);
  }, [currentFrame, isPlaying]);

  const handleReplay = () => {
    if (audioRef.current && !muteAudio) {
      audioRef.current.playbackRate = 1.2;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setCurrentFrame(0);
    setIsPlaying(true);
  };

  const handleFrameSelect = (index: number) => {
    setCurrentFrame(index);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const CurrentFrameComponent = frames[currentFrame].component;

  return (
    <div
      className="w-screen h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Full screen container */}
      <div
        className="relative overflow-hidden w-full h-full"
        style={{
          backgroundColor: "#141413",
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
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <CurrentFrameComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Audio element */}
        <audio ref={audioRef} src="/openclaw_natural.mp3" />
      </div>
    </div>
  );
}
