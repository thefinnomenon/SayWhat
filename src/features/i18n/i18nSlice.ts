import { createSlice } from '@reduxjs/toolkit';
import { defaultLanguage } from './i18n';

const { actions, reducer } = createSlice({
  name: 'i18n',
  initialState: { currentLanguage: defaultLanguage.languageTag },
  reducers: {
    setLanguage(state, action) {
      state.currentLanguage = action.payload;
    },
    // REHYDRATE(state, action) {
    //   // i18n Set language
    // },
  },
});

export const { setLanguage } = actions;
export default reducer;
