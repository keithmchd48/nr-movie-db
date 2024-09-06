import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
};

type SliceState = TUser | null;

const userSlice = createSlice({
  name: "user",
  initialState: null as SliceState,
  reducers: {
    ADD_USER(_, action) {
      return action.payload;
    },
    LOGOUT_USER() {
      return null;
    },
  },
});

// export actions
export const { ADD_USER, LOGOUT_USER } = userSlice.actions;

export default userSlice.reducer;
