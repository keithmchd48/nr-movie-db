import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

type SliceState = TUser | null;

const userSlice = createSlice({
  name: "user",
  initialState: null as SliceState,
  reducers: {
    ADD_USER(_, action: PayloadAction<TUser>) {
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
