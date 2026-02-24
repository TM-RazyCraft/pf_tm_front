
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import "@/styles/index.css";

if (location.hostname === "localhost") {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
else {
  const hash = import.meta.env.VITE_HASH;
  const userPassword = prompt("パスワードを入力してください");
  if (userPassword === hash) {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    alert("パスワードが間違っています");
  }
}