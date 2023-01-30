import React from "react";
import { Box, Grid } from "@mui/material";
import UserInfo from "../UserInfo/UserInfo";
import MailForm from "../MailForm/MailForm";

const UserData = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <Grid container spacing={5}>
        <UserInfo />
        <MailForm />
      </Grid>
    </Box>
  );
};

export default UserData;
