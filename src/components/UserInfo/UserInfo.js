import { Avatar, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  setCurUserData,
  setNoMails,
  setNotificationState,
  setUsername,
} from "../../store/mainSlice";
import { curUserDataSelector } from "../../store/selectors";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { username } = useAppSelector(curUserDataSelector);
  const curUser = useAppSelector(curUserDataSelector);
  console.log(curUser);
  const logOut = () => {
    navigate("/");
    dispatch(setCurUserData(""));
    dispatch(setUsername(""));
    dispatch(setNoMails());
    dispatch(
      setNotificationState({
        open: false,
        vertical: "top",
        horizontal: "center",
      })
    );
  };

  return (
    <Grid
      item
      xs="auto"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
        alt="user image"
      >
        <PermIdentityIcon />
      </Avatar>
      <Typography mb={3}>{username}</Typography>
      <Button variant="outlined" size="small" onClick={logOut}>
        Log out
      </Button>
    </Grid>
  );
};

export default UserInfo;
