import React from "react";
import { ButtonBase, Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { isShowMailBodySelector } from "../../store/selectors";
import { setisShowMailBody } from "../../store/mainSlice";

const Mail = ({ id, from, when, subject, email }) => {
  const dispatch = useAppDispatch();
  const isShowMailBody = useAppSelector(isShowMailBodySelector);

  return (
    <Grid item id={id} sx={{ padding: 3, width: "50vw", flexWrap: "wrap" }}>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            From: {from}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            When: {when}
          </Typography>
          <ButtonBase
            onClick={() => {
              dispatch(setisShowMailBody(!isShowMailBody));
            }}
          >
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Subject: {subject}
            </Typography>{" "}
          </ButtonBase>

          {isShowMailBody && (
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Email: {email}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Mail;
