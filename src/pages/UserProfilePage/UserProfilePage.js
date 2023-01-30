import React, { useEffect } from "react";
import Mails from "../../components/Mails/Mails";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { getMails, getUsers } from "../../store/thunks";
import { curUserDataSelector, mailsSelector } from "../../store/selectors";
import { DELAY } from "../../services/constants";
import UserData from "../../components/UserData/UserData";

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(curUserDataSelector);
  let timerId;
  const mails = useAppSelector(mailsSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMails(id));
  }, [id]);

  useEffect(() => {
    timerId = setTimeout(() => {
      dispatch(getMails(id));
    }, DELAY);

    return () => {
      clearTimeout(timerId);
    };
  }, [mails.length]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        maxWidth: "80wv",
      }}
    >
      <UserData />
      <Mails />
    </Box>
  );
};

export default UserProfile;
