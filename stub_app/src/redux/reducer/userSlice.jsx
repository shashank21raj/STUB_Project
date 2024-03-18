import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  reload: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload.user;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      localStorage.setItem("STUB-token-auth-x4", action.payload.token);
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("STUB-token-auth-x4");
    },
    reload: (state) => {
      state.reload = !state.reload;
    },
  },
});

export const { updateUser, loginSuccess, logout, reload } = userSlice.actions;

export default userSlice.reducer;
