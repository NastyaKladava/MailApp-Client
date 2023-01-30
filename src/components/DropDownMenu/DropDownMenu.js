import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { curMailRecipSelector } from "../../store/selectors";
import { setCurMailRecipient } from "../../store/mainSlice";

const DropMenu = ({ users }) => {
  const dispatch = useAppDispatch();
  const curMailRecipient = useAppSelector(curMailRecipSelector);

  const setRecipient = (e, newInputValue) => {
    dispatch(setCurMailRecipient(newInputValue));
  };

  return (
    <Autocomplete
      id="recipient"
      label="Recipient"
      type="text"
      name="recipient"
      users={users}
      margin="normal"
      fullWidth
      autoFocus
      freeSolo
      value={curMailRecipient}
      options={users.map((user) => user.username)}
      renderInput={(params) => <TextField {...params} label="Recipient" />}
      onInputChange={setRecipient}
      onChange={setRecipient}
    />
  );
};

export default DropMenu;
