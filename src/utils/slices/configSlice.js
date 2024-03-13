import {createSlice} from '@reduxjs/toolkit';
import {LANG} from '../languages';

const configSlice = createSlice({
  name: "config",
  initialState: {
    preferredLang: LANG.en.identifier
  },
  reducers: {
    SELECT_LANGUAGE(state, action) {
      state.preferredLang = action.payload;
    }
  }
});

// export actions

export const {SELECT_LANGUAGE} = configSlice.actions;
export default configSlice.reducer;