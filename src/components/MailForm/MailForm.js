import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import DropMenu from "../DropDownMenu/DropDownMenu";
import {
  setCurMailBody,
  setCurMailRecipient,
  setCurMailSender,
  setCurMailSubj,
  setCurMailUserId,
  setNotificationState,
} from "../../store/mainSlice";
import {
  curMailBodySelector,
  curMailRecipSelector,
  curMailSenderSelector,
  curMailSubjSelector,
  curMailUserIdSelector,
  curUserDataSelector,
  usersSelector,
} from "../../store/selectors";
import { sendMail } from "../../services/requests";
import { useNavigate } from "react-router";

const MailForm = () => {
  const dispatch = useAppDispatch();
  const curUserData = useAppSelector(curUserDataSelector);
  const users = useAppSelector(usersSelector);

  const curMailUserId = useAppSelector(curMailUserIdSelector);
  const curMailRecipient = useAppSelector(curMailRecipSelector);
  const curMailSender = useAppSelector(curMailSenderSelector);
  const curMailSubj = useAppSelector(curMailSubjSelector);
  const curMailBody = useAppSelector(curMailBodySelector);

  function setId() {
    const id = users.find((user) => user.username === curMailRecipient).id;
    dispatch(setCurMailUserId(id));
    dispatch(setCurMailSender(curUserData.username));
  }

  const showPopUp = () => {
    dispatch(
      setNotificationState({
        open: true,
        vertical: "top",
        horizontal: "center",
      })
    );
  };

  return (
    <Grid item xs={5}>
      <Box
        component="form"
        onSubmit={(e) => {
          sendMail(e, curMailSender, curMailSubj, curMailBody, curMailUserId);
          dispatch(setCurMailSender(""));
          dispatch(setCurMailBody(""));
          dispatch(setCurMailSubj(""));
          dispatch(setCurMailUserId(""));
          dispatch(setCurMailRecipient(""));
        }}
        sx={{
          mt: 1,
          marginTop: 8,
          width: "30vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DropMenu users={users} />
        <TextField
          margin="normal"
          fullWidth
          name="subject"
          label="Subject"
          type="text"
          id="subject"
          autoComplete="subject"
          onChange={(e) => {
            setId();
            dispatch(setCurMailSubj(e.target.value));
          }}
        />
        <TextField
          margin="normal"
          id="mailText"
          label="Email"
          fullWidth
          placeholder="Print your mail here..."
          multiline
          sx={{ mb: 3 }}
          onChange={(e) => dispatch(setCurMailBody(e.target.value))}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ width: "50%", justifySelf: "center" }}
          onClick={showPopUp}
        >
          Send message
        </Button>
      </Box>
    </Grid>
  );
};

export default MailForm;
