import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, IconButton, Paper, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { isInputErrorSelector, usernameSelector } from "../../store/selectors";
import { setInputError, setUsername } from "../../store/mainSlice";
import { registerUser } from "../../store/thunks";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isInputError = useAppSelector(isInputErrorSelector);
  const username = useAppSelector(usernameSelector);

  const handleUser = (e) => {
    e.preventDefault();
    if (username === "") {
      dispatch(setInputError(true));
      navigate("/");
    } else {
      dispatch(setInputError(false));
      dispatch(registerUser({ username }));
      navigate("/profile");
    }
  };

  return (
    <Paper square={true} elevation={4}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          minWidth: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#bbdefb",
        }}
        onSubmit={handleUser}
      >
        <TextField
          required
          fullWidth
          name="name"
          type="text"
          id="password"
          label="Required"
          placeholder="John"
          sx={{ width: "100%" }}
          error={isInputError}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />
        <IconButton color="secondary" onClick={handleUser}>
          <ArrowCircleRightRoundedIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
