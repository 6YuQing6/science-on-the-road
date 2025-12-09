import "./App.css";
// import ResponsiveAppBar from "./components/AppBar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/theme";
import { Outlet } from "react-router";
import ResponsiveAppBar from "./components/AppBar";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
