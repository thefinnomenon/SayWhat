import React from 'react';
import { useSelector } from './src/redux';
import { ThemeProvider } from 'styled-components/native';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './src/features/i18n/i18n';
import { enableScreens } from 'react-native-screens';
import { createAppContainer } from 'react-navigation';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import { StatusBar } from 'react-native';

enableScreens();

const AppContainer = createAppContainer(MainStackNavigator);

// Can't access t without creating a separate component
const App = () => {
  const theme = useSelector(state => state.theming.theme);
  const { t } = useTranslation();

  return <AppContainer screenProps={{ theme, t }} />;
};

const WrappedApp = () => {
  const theme = useSelector(state => state.theming.theme);
  const currentLanguage = useSelector(state => state.i18n.currentLanguage);
  if (currentLanguage) {
    i18n.changeLanguage(currentLanguage);
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={theme.nav.statusBar} />
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default WrappedApp;
