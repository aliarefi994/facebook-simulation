import Youtub1 from "./component/Youtub1";
import {AppBar, Toolbar} from '@mui/material'
import {Box, Stack} from '@mui/material';
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Rightbar from "./component/Rightbar";
import Feed from "./component/Feed";
import Add from "./component/Add";
import {createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;