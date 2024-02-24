import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser(state, action) {
      return action.payload;
    },
    logoutUser(state, action) {
      return null;
    }
  }
});

// export actions
export const {addUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;