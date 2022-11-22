import { Container } from "@mui/system";
import BMI from "../src/Component/BMI/BMI";
import * as React from "react";

import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <AppBar >
          <Toolbar variant="h2">
            <Typography>Navbar</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <BMI />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
