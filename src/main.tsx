import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AppVertical from "./app/AppVertical.tsx";
import AppOpenClaw from "./app/AppOpenClaw.tsx";
import AppOpenClawVertical from "./app/AppOpenClawVertical.tsx";
import { AppMessageFlow } from "./app/AppMessageFlow.tsx";
import "./styles/index.css";

// Check URL for different modes
const isVertical = window.location.search.includes('vertical') ||
                   window.location.pathname.includes('vertical');
const isOpenClaw = window.location.search.includes('openclaw') ||
                   window.location.pathname.includes('openclaw');
const isOpenClawVertical = window.location.search.includes('openclaw-vertical') ||
                           window.location.pathname.includes('openclaw-vertical');
const isMessageFlow = window.location.search.includes('message-flow') ||
                      window.location.pathname.includes('message-flow');

// Determine which app to render
const getApp = () => {
  if (isMessageFlow) return <AppMessageFlow />;
  if (isOpenClawVertical) return <AppOpenClawVertical />;
  if (isOpenClaw) return <AppOpenClaw />;
  if (isVertical) return <AppVertical />;
  return <App />;
};

createRoot(document.getElementById("root")!).render(getApp());
