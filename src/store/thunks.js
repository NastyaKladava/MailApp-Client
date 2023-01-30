import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../services/services";
import { convertDate } from "../services/utils";

export const registerUser = createAsyncThunk(
  "/register",
  async ({ username }) => {
    try {
      const res = await Service.registerUser({
        username: username,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getUsers = createAsyncThunk("/profile", async () => {
  try {
    const res = await Service.getUsers();
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const getMails = createAsyncThunk("/mails/:id", async (id) => {
  try {
    const res = await Service.getMails(id);
    await convertDate(res);
    return await res.data;
  } catch (err) {
    console.log(err);
  }
});
