import { motion } from "motion/react";

// Frame 1: Hook - Scattered reality (vertical)
export function FrameOCV1() {
  const apps = [
    { name: "WhatsApp", x: 10, y: 15, delay: 0 },
    { name: "Telegram", x: 70, y: 12, delay: 0.1 },
    { name: "Slack", x: 15, y: 35, delay: 0.2 },
    { name: "Discord", x: 65, y: 32, delay: 0.3 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Scattered app icons */}
      {apps.map((app) => (
        <motion.div
          key={app.name}
          className="absolute w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: "rgba(250, 249, 245, 0.1)",
            left: `${app.x}%`,
            top: `${app.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.05, 1], opacity: 0.5 }}
          transition={{
            duration: 0.4,
            delay: app.delay,
            scale: { repeat: Infinity, duration: 2, delay: app.delay + 0.5 },
          }}
        >
          <span className="text-[10px]" style={{ color: "#FAF9F5" }}>
            {app.name}
          </span>
        </motion.div>
      ))}

      {/* Main text */}
      <div className="z-10 text-center mt-[30%]">
        <motion.div
          className="text-[28px] leading-tight tracking-[-0.02em]"
          style={{ fontWeight: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span style={{ color: "#FAF9F5" }}>Every day you check </span>
          <span style={{ color: "#D97757" }}>WhatsApp.</span>
        </motion.div>

        <motion.div
          className="text-[24px] leading-tight tracking-[-0.02em] mt-2"
          style={{ fontWeight: 500 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <span style={{ color: "#FAF9F5" }}>Then </span>
          <span style={{ color: "#D97757" }}>Gmail. Slack.</span>
        </motion.div>

        <motion.div
          className="text-[22px] leading-tight tracking-[-0.02em] mt-8"
          style={{ fontWeight: 400, color: "#FAF9F5", opacity: 0.7 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        >
          Your AI? Stuck in a browser tab you forget to open.
        </motion.div>
      </div>
    </div>
  );
}
