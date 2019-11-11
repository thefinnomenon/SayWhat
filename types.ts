export type ThemeMode = 'light' | 'dark';

export interface ThemeContext {
  mode: ThemeMode;
  setMode(mode: string): void;
}

export type Theme = {
  theme: {
    nav: {
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
      primary: string;
      secondary: string;
      border: string;
      backgroundAlt: string;
      borderAlt: string;
      text: string;
      textAlt: string;
    };
  };
  testID?: string;
};

export type ScreenProps = {
  t: (str: string) => void;
} & Theme;
