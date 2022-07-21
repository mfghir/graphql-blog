import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="700" flex={1}>
            وبلاگ mfgh.ir
          </Typography>

          <BookOutlinedIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
