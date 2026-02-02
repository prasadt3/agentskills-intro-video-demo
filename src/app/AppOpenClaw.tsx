import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FrameOC1 } from "@/app/components/openclaw/FrameOC1";
import { FrameOC2 } from "@/app/components/openclaw/FrameOC2";
import { FrameOC3 } from "@/app/components/openclaw/FrameOC3";
import { FrameOC4 } from "@/app/components/openclaw/FrameOC4";
import { FrameOC5 } from "@/app/components/openclaw/FrameOC5";
import { FrameOC6 } from "@/app/components/openclaw/FrameOC6";
import { FrameOC7 } from "@/app/components/openclaw/FrameOC7";
import { FrameOC8 } from "@/app/components/openclaw/FrameOC8";

// OpenClaw Introduction Video - 90 seconds total
// Based on TEACHER archetype with ANALYST implications
const frames = [
  { component: FrameOC1, duration: 8000 },  // 0:00-0:08 Hook - Scattered reality
  { component: FrameOC2, duration: 7000 },  // 0:08-0:15 Problem - The gap
  { component: FrameOC3, duration: 7000 },  // 0:15-0:22 Solution intro
  { component: FrameOC4, duration: 18000 }, // 0:22-0:40 Architecture diagram
  { component: FrameOC5, duration: 15000 }, // 0:40-0:55 How it works
  { component: FrameOC6, duration: 17000 }, // 0:55-0:72 Key benefits
  { component: FrameOC7, duration: 13000 }, // 0:72-0:85 Implications
  { component: FrameOC8, duration: 10000 }, // 0:85-0:95 CTA + Branding (extra 5s for ending)
];

export default function AppOpenClaw() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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
    setCurrentFrame(0);
    setIsPlaying(true);
  };

  const handleFrameSelect = (index: number) => {
    setCurrentFrame(index);
    setIsPlaying(false);
  };

  const CurrentFrameComponent = frames[currentFrame].component;

  return (
    <div
      className="w-screen h-screen overflow-hidden"
      style={{ backgroundColor: "#141413" }}
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
        style={{ backgroundColor: "#1f1f1e" }}
      >
        <motion.div
          className="h-full"
          style={{ backgroundColor: "#D97757" }}
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentFrame + 1) / frames.length) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
