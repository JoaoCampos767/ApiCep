import React from "react";
import "./textfield.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Text() {
  return (
    <>
      <Grid
        container
        className="MuiGrid-root-container"
        justifyContent="center"
      >
        <Grid xs={6} display="flex" justifyContent="space-between">
          <Grid item xs={4}>
            <TextField id="cep-text" label="Cep" variant="outlined" />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="logradouro-text"
              label="Logradouro"
              variant="outlined"
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              id="complemento-text"
              label="Complemento"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className="MuiGrid-root-container-second"
        justifyContent="center"
      >
        <Grid xs={6} display="flex" justifyContent="space-between">
          <Grid item xs={4}>
            <TextField id="bairro-text" label="Bairro" variant="outlined" />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="localidade-text"
              label="Localidade"
              variant="outlined"
            />
          </Grid>
          <Grid xs={4}>
            <TextField id="uf-text" label="UF" variant="outlined" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className="MuiGrid-root-container-third"
        justifyContent="center"
      >
        <Grid xs={6} display="flex" justifyContent="space-between">
          <Grid item xs={4}>
            <TextField id="ibge-text" label="Ibge" variant="outlined" />
          </Grid>

          <Grid item xs={4}>
            <TextField id="gia-text" label="Gia" variant="outlined" />
          </Grid>
          <Grid xs={4}>
            <TextField id="ddd-text" label="DDD" variant="outlined" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className="MuiGrid-root-container-fourth"
        justifyContent="center"
      >
        <Grid xs={6} display="flex" justifyContent="center">
          <Grid item xs={4}>
            <TextField id="siafi-text" label="Siafi" variant="outlined" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className="MuiGrid-root-container-fifth"
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
