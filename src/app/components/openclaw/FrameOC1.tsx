import { motion } from "motion/react";

// Frame 1: Hook - Scattered reality (0:00-0:08)
export function FrameOC1() {
  const apps = [
    { name: "WhatsApp", x: 15, y: 20, delay: 0 },
    { name: "Telegram", x: 75, y: 15, delay: 0.1 },
    { name: "Slack", x: 25, y: 60, delay: 0.2 },
    { name: "Discord", x: 70, y: 55, delay: 0.3 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Scattered app icons */}
      {apps.map((app, idx) => (
        <motion.div
          key={app.name}
          className="absolute w-16 h-16 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: "rgba(250, 249, 245, 0.1)",
            left: `${app.x}%`,
            top: `${app.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: 0.6,
          }}
          transition={{
            duration: 0.5,
            delay: app.delay,
            scale: { repeat: Infinity, duration: 2, delay: app.delay + 0.5 },
          }}
        >
          <span className="text-[12px]" style={{ color: "#FAF9F5" }}>
            {app.name}
          </span>
        </motion.div>
      ))}

      {/* Lonely browser tab with AI */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div
          className="w-24 h-16 rounded-lg flex items-center justify-center"
          style={{
            backgroundColor: "rgba(250, 249, 245, 0.05)",
            border: "1px solid rgba(250, 249, 245, 0.1)",
          }}
        >
          <span
            className="text-[14px]"
            style={{ color: "#FAF9F5", opacity: 0.5 }}
          >
            AI
          </span>
        </div>
        <span
          className="text-[10px] mt-2"
          style={{ color: "#FAF9F5", opacity: 0.3 }}
        >
          browser tab
        </span>
      </motion.div>

      {/* Main text */}
      <div className="z-10 text-center px-8 max-w-4xl">
        <motion.div
          className="text-[42px] leading-tight tracking-[-0.02em]"
          style={{ fontWeight: 500 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span style={{ color: "#FAF9F5" }}>Every day you check </span>
          <motion.span
            style={{ color: "#D97757" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            WhatsApp.
          </motion.span>
        </motion.div>

        <motion.div
          className="text-[42px] leading-tight tracking-[-0.02em] mt-2"
          style={{ fontWeight: 500 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <span style={{ color: "#FAF9F5" }}>Then </span>
          <span style={{ color: "#D97757" }}>Gmail. </span>
          <span style={{ color: "#FAF9F5" }}>Then </span>
          <span style={{ color: "#D97757" }}>Slack.</span>
        </motion.div>

        <motion.div
          className="text-[36px] leading-tight tracking-[-0.02em] mt-8"
          style={{ fontWeight: 400, color: "#FAF9F5", opacity: 0.7 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          Your AI? Stuck in a browser tab you forget to open.
        </motion.div>
      </div>
    </div>
  );
}
