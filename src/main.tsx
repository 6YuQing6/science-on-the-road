import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { theme } from "./components/theme.tsx";
import { ThemeProvider } from "@mui/material";
import { router } from "./routes/Routes.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
