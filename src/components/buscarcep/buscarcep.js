import React from "react";
import "./buscarcep.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Busca() {
  return (
    <>
      <Grid
        container
        className="MuiGrid-root-container"
        justifyContent="center"
      >
        <Grid className="MuiInputBase-input" display="flex" justifyContent="space-between">
          <Grid item>
            <TextField className="MuiInputBase-input-text" id="buscar-text" label="Buscar Cep" variant="outlined" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className="MuiGrid-root-container-secund"
        justifyContent="center"
      >
        <Grid className="MuiButtonBase-root">
          <Grid item>
            <Button variant="contained">Buscar</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
