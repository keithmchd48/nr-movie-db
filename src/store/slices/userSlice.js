import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    ADD_USER(state, action) {
      return action.payload;
    },
    LOGOUT_USER(state, action) {
      return null;
    },
  },
});

// export actions
export const { ADD_USER, LOGOUT_USER } = userSlice.actions;

export default userSlice.reducer;
