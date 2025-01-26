/*
 * Node Modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
 * CSS Links
 */
import "./index.css";
import "lenis/dist/lenis.css";

/*
 * Components
 */
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
