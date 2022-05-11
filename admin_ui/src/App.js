import "./App.css";
import Geektrust from "./Geektrust";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
const light = {
  palette: {
    mode: "light",
    primary: {
      main: "#4a4a4a",
    },
    secondary: {
      main: "#545454",
    },
  },
};
const dark = {
  palette: {
    mode: "dark",
    primary: {
      main: "#a3a3a3",
    },
    secondary: {
      main: "#d6d6d6",
    },
  },
};

function App() {
  const [DarkTheme, setDarkTheme] = useState(false);
  const changeTheme = () => {
    setDarkTheme(!DarkTheme);
  };
  const theme = DarkTheme ? createTheme(dark) : createTheme(light);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Geektrust DarkTheme={DarkTheme} changeTheme={changeTheme}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
