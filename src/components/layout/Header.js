import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="700" flex={1}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              وبلاگ mfgh.netlify.app
            </Link>
          </Typography>

          <Link to="/" style={{ color: "#fff" }}>
            <BookOutlinedIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
