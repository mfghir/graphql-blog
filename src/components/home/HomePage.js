import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography>نویسنده ها</Typography>
        </Grid>
        <Grid item>
          <Typography>مقالات</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
