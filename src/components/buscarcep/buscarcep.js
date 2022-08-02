import React from "react";
import "./textfield.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <>
      <Grid
        container
        className="MuiGrid-root-container"
        justifyContent="center"
      >
        <Grid xs={6} display="flex" justifyContent="center">
          <Grid item xs={4}>
            <TextField id="buscar-text" label="Buscar Cep" variant="outlined" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className="MuiGrid-root-container-secund"
        justifyContent="center"
      >
        <Grid xs={6} display="flex" justifyContent="center">
          <Grid item xs={4}>
            <Button variant="contained">Buscar</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
