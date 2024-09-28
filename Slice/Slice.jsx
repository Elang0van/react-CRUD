// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Will hold the logged-in user's data
  isAuthenticated: false,
  errorMessage: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginedUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.errorMessage = null;
    },
    LogOutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    loginFailed: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { loginedUser, LogOutUser, loginFailed } = userReducer.actions;
export default userReducer.reducer;
