import React from "react";
import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box component="header" sx={{ pb: 3 }}>
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        align="center"
        noWrap
        sx={{ pt: 2 }}
      >
        Email
      </Typography>
    </Box>
  );
};

export default Header;
