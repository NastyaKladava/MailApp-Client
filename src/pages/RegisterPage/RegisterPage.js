import React from "react";
import { Box, Typography } from "@mui/material";
import RegisterForm from "../../components/RegisterForm/RegisterForm.js";

const Register = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="inherit"
        align="center"
        mb={5}
      >
        Please, to start enter your name!
      </Typography>
      <RegisterForm />
    </Box>
  );
};

export default Register;
