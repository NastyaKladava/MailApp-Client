import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";
import Notification from "../Notification/Notification";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Box component="main">
        <Container maxWidth="md" sx={{ backgroundColor: "#c2eafc" }}>
          <Outlet />
        </Container>
      </Box>
      <Notification />
    </>
  );
};

export default Layout;
