import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "./store";

const initialState = {
  user: JSON.parse(window?.localStorage.getItem("user")) ?? {}, // Change `user` to a default value like an empty object
  edit: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Fix: `setitem` should be `setItem`
    },
    logout(state) {
      state.user = {};
      localStorage.removeItem("user");
    },
    updateProfile(state, action) {
      state.edit = action.payload;
    },
  },
});

export default userSlice.reducer;

export function UserLogin(user) {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.login(user));
  };
}

export function Logout() {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.logout()); // Fix: Call `logout` instead of using `updateProfile`
  };
}

export function updateProfile(val) {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.updateProfile(val));
  };
}
