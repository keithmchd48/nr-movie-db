import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumLanguages } from "utils/translations/types";

const configSlice = createSlice({
  name: "config",
  initialState: {
    preferredLang: EnumLanguages.ENGLISH,
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
