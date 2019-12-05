declare module '*.json' {
  const value: any;
  export default value;
}

type ThemeKey = 'light' | 'dark' | 'system';
type LanguageKey = 'en' | 'pt';

interface ThemeContext {
  mode: ThemeKey;
  setMode(mode: ThemeKey): void;
}

interface Theme {
  nav: {
    statusBar: 'light-content' | 'dark-content';
    background: string;
    tintColor: string;
    activeTintColor: string;
    inactiveTintColor: string;
    borderColor: string;
    borderWidth: number;
    titleStyle: {
      fontSize: number;
      fontWeight: string;
    };
  };
  colors: {
    background: string;
    backgroundAlt: string;
    border: string;
    borderAlt: string;
    primary: string;
    secondary: string;
    text: string;
    textAlt: string;
  };
}

interface ScreenProps {
  t: (str: string) => void;
}
