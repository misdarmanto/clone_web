import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouters from "./routers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouters />
  </StrictMode>
);
