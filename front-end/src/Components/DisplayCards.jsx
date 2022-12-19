import React from "react";
import { Grid } from "@mui/material";
import { CustomCard } from "./CustomCard";

export const DisplayCards = () => {
  return (
    <>
      <Grid container spacing={2} marginTop={'1rem'}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard />
        </Grid>
      </Grid>
    </>
  );
};
