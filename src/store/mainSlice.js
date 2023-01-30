import { createSlice } from "@reduxjs/toolkit";
import { getMails, getUsers, registerUser } from "./thunks";

const initialState = {
  curentUserData: "",
  users: [],
  isRegistered: false,
  usernameInput: "",
  isInputError: false,
  isShowMailBody: false,
  isHasNewMail: false,
  isMailSended: false,
  notificationState: {
    open: false,
    vertical: "top",
    horizontal: "center",
  },
  curMailData: { UserId: "", sender: "", subj: "", mailBody: "" },
  curMailUserId: "",
  curMailRecipient: "",
  curMailSender: "",
  curMailSubj: "",
  curMailBody: "",
  mails: [],
};

const mainSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
    setCurUserData: (state, action) => {
      state.curentUserData = action.payload;
    },
    setUsername: (state, action) => {
      state.usernameInput = action.payload;
    },
    setInputError: (state, action) => {
      state.isInputError = action.payload;
    },
    setisShowMailBody: (state, action) => {
      state.isShowMailBody = action.payload;
    },
    setisHasNewMail: (state, action) => {
      state.isHasNewMail = action.payload;
    },
    setNoMails: (state, action) => {
      state.mails = [];
    },

    setNotificationState: (state, action) => {
      state.notificationState = action.payload;
    },

    setCurMailUserId: (state, action) => {
      state.curMailUserId = action.payload;
    },
    setCurMailRecipient: (state, action) => {
      state.curMailRecipient = action.payload;
    },
    setCurMailSender: (state, action) => {
      state.curMailSender = action.payload;
    },
    setCurMailSubj: (state, action) => {
      state.curMailSubj = action.payload;
    },
    setCurMailBody: (state, action) => {
      state.curMailBody = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.curentUserData = action.payload;
        // state.users.push(action.payload);
      })
      .addCase(getMails.fulfilled, (state, action) => {
        state.mails = action.payload;
      });
  },
});

export default mainSlice.reducer;

export const {
  setCurUserData,
  setInputError,
  setUsername,

  setCurMailUserId,
  setCurMailRecipient,
  setCurMailSender,
  setCurMailSubj,
  setCurMailBody,
  setNoMails,
  setisShowMailBody,
  setisHasNewMail,

  setNotificationState,
} = mainSlice.actions;
