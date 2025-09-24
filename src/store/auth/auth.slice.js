import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  user: null,
  isAuthenticated: false,
};

export const signup = createAsyncThunk("/auth/signup", async (formData) => {
  const res = await axios.post(
    "https://furnisort-backend.onrender.com/api/v1/auth/signup",
    formData,
    { withCredentials: true }
  );

  return res?.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        (state.isLoading = true),
          (state.user = null),
          (state.isAuthenticated = false);
      })
      .addCase(signup.fulfilled, (state) => {
        (state.isAuthenticated = false),
          (state.user = null),
          (state.isLoading = false);
      })
      .addCase(signup.rejected, (state) => {
        (state.isLoading = true),
          (state.user = null),
          (state.isAuthenticated = false);
      });
  },
});

export default authSlice.reducer;
