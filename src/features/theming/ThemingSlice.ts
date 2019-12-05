import { createSlice } from '@reduxjs/toolkit';
// @ts-ignore
import { Appearance } from 'react-native-appearance';
import light from './themes/light';
import dark from './themes/dark';

// Get system theme ['light' | 'dark' | 'no-preference']
const SystemTheme = Appearance.getColorScheme();
// If 'no-preference', default to light
const system =
  SystemTheme === 'no-preference' || SystemTheme === 'light' ? light : dark;

const themes: { [key in ThemeKey]: Theme } = { system, light, dark };

const { actions, reducer } = createSlice({
  name: 'theming',
  initialState: { theme: themes.system, currentTheme: 'system' },
  reducers: {
    setTheme(state, action) {
      const themeKey = action.payload;
      if (themeKey in themes) {
        state.theme = themes[themeKey as ThemeKey];
        state.currentTheme = themeKey;
      }
    },
  },
});

export const { setTheme } = actions;
export default reducer;
