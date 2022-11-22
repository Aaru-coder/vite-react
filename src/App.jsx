import Bmi from "./Component/BMI/Bmi";
import * as React from "react";

import { CssBaseline } from "@mui/material";
import Navbar from "./Component/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Bmi />
    </div>
  );
}

export default App;
