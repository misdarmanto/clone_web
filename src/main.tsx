import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouters from "./routers";
import { AppProvider } from "./context/app.context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <AppRouters />
    </AppProvider>
  </StrictMode>
);
