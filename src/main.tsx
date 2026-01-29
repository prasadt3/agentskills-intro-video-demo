import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AppVertical from "./app/AppVertical.tsx";
import "./styles/index.css";

// Check URL for vertical mode
const isVertical = window.location.search.includes('vertical') ||
                   window.location.pathname.includes('vertical');

createRoot(document.getElementById("root")!).render(
  isVertical ? <AppVertical /> : <App />
);
