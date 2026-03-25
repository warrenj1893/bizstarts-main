import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("No root element found");
} else {
  console.log("Found root element, attempting to render");
  try {
    createRoot(rootEl).render(<App />);
    console.log("Render called successfully");
  } catch (err) {
    console.error("Error during render:", err);
    rootEl.innerHTML = `<div style="color:red; padding:20px;"><h1>Render Error</h1><pre>${err}</pre></div>`;
  }
}
