import React, { createContext, useState, FC } from 'react';
import { ThemeMode, ThemeContext } from '../types';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

const defaultMode = 'light';

const ManageThemeContext = createContext<ThemeContext>({
  mode: defaultMode,
  setMode: mode => console.log(mode),
});

export const useTheme = () => React.useContext(ManageThemeContext);

const ManageThemeProvider: FC = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: defaultMode,
  });

  const setMode = (mode: ThemeMode) => {
    setThemeState({ mode });
  };

  return (
    <ManageThemeContext.Provider
      value={{ mode: themeState.mode as ThemeMode, setMode }}>
      <ThemeProvider
        theme={themeState.mode === 'dark' ? darkTheme.theme : lightTheme.theme}>
        <>
          <StatusBar
            barStyle={
              themeState.mode === 'dark' ? 'light-content' : 'dark-content'
            }
          />
          {children}
        </>
      </ThemeProvider>
    </ManageThemeContext.Provider>
  );
};

export { ManageThemeContext, ManageThemeProvider };

export default ManageThemeProvider;
