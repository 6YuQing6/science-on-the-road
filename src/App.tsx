import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/theme";
import { Outlet } from "react-router";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        {/* <Button variant="text" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button> */}
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
