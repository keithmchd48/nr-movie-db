import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LANG } from "utils/translations/languages";

const configSlice = createSlice({
  name: "config",
  initialState: {
    preferredLang: LANG.en.identifier,
    hamburgerMenuOpen: false,
  },
  reducers: {
    SELECT_LANGUAGE(state: {preferredLang: string}, action: PayloadAction<string>) {
      state.preferredLang = action.payload;
    },
    TOGGLE_HAMBURGER_MENU(state: {hamburgerMenuOpen: boolean}, action: PayloadAction<boolean>) {
      state.hamburgerMenuOpen = action.payload;
    },
  },
});

// export actions

export const { SELECT_LANGUAGE, TOGGLE_HAMBURGER_MENU } = configSlice.actions;
export default configSlice.reducer;
