import React from "react";
import { Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { notifStateSelector } from "../../store/selectors";
import { setNotificationState } from "../../store/mainSlice";

const Notification = () => {
  const dispatch = useAppDispatch();
  const notificationState = useAppSelector(notifStateSelector);
  const { vertical, horizontal, open } = notificationState;

  const handleClose = () => {
    dispatch(
      setNotificationState({
        open: false,
        vertical: "top",
        horizontal: "center",
      })
    );
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Your mail was sended!"
        key={vertical + horizontal}
      />
    </div>
  );
};

export default Notification;
