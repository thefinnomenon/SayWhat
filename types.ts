export type ThemeMode = 'light' | 'dark';

export interface ThemeContext {
  mode: ThemeMode;
  toggle(): void;
}

export interface Theme {
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
      border: string;
      backgroundAlt: string;
      borderAlt: string;
      text: string;
    };
  };
}

export type ScreenProps = {
  t: (str: string) => void;
} & Theme;
