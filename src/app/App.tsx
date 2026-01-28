import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Frame1 } from "@/app/components/Frame1";
import { Frame2 } from "@/app/components/Frame2";
import { Frame3 } from "@/app/components/Frame3";
import { Frame4 } from "@/app/components/Frame4";
import { Frame5 } from "@/app/components/Frame5";
import { Frame6 } from "@/app/components/Frame6";
import { Frame7 } from "@/app/components/Frame7";
import { Frame8 } from "@/app/components/Frame8";
import { Frame9 } from "@/app/components/Frame9";
import { Frame10 } from "@/app/components/Frame10";
import { Frame11 } from "@/app/components/Frame11";
import { Frame12 } from "@/app/components/Frame12";
import { Frame13 } from "@/app/components/Frame13";
import { Frame14 } from "@/app/components/Frame14";
import { Frame15 } from "@/app/components/Frame15";

const frames = [
  { component: Frame1, duration: 2000 }, // 0:00-0:02
  { component: Frame2, duration: 3000 }, // 0:02-0:05
  { component: Frame3, duration: 3000 }, // 0:05-0:08
  { component: Frame4, duration: 6000 }, // 0:08-0:14 (6 second pause)
  { component: Frame11, duration: 4000 }, // 0:14-0:18 (Works everywhere - 4 second pause)
  { component: Frame12, duration: 10000 }, // Using Skills in Claude.ai - 10 seconds
  { component: Frame13, duration: 10000 }, // Using Skills in ChatGPT - 10 seconds
  { component: Frame14, duration: 10000 }, // Using Skills in Agents made with Agentman - 10 seconds
  { component: Frame5, duration: 3000 }, // Write your expertise once
  { component: Frame6, duration: 2000 }, // 0:48-0:50
  { component: Frame7, duration: 2000 }, // 0:50-0:52
  { component: Frame8, duration: 3000 }, // 0:52-0:55
  { component: Frame9, duration: 6000 }, // 0:55-0:58
  { component: Frame10, duration: 15000 }, // 0:58-1:04 (6 second pause before loop)
  { component: Frame15, duration: 10000 }, // Video cover - 10 seconds
];

export default function App() {
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
