import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Gender from "../BMI/Gender";

export default function BMI() {
  return (
    <section>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Height" variant="outlined" />
        <TextField id="outlined-basic" label="Weight" variant="outlined" />
        <Gender />
<div>
        <Button variant="contained">Calculate</Button></div>
      </Box>
    </section>
  );
}
