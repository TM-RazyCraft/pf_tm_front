
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { StrictMode } from "react";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);