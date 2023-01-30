import React, { useEffect } from "react";
import Mail from "../Mail/Mail";
import { Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { curUserDataSelector, mailsSelector } from "../../store/selectors";
import { getMails } from "../../store/thunks";

const Mails = () => {
  const mails = useAppSelector(mailsSelector);

  return (
    <Grid>
      {mails.length <= 1 ? (
        <Typography>There is no messages for this moment.</Typography>
      ) : (
        <Grid
          container
          sx={{ justifyContent: "center", flexWrap: "wrap" }}
          spacing={2}
        >
          {mails.map((mail) => (
            <Mail
              key={mail.id}
              id={mail.id}
              from={mail.sender}
              when={mail.createdAt}
              subject={mail.subj}
              email={mail.mailBody}
            />
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default Mails;
