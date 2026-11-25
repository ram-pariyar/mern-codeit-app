import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authUser",
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    registerUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { loginUser, registerUser, logoutUser, setUser } =
  authSlice.actions;

export default authSlice.reducer;
