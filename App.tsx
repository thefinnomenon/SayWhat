import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import ThemeManager from './contexts/ManageThemeContext';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18 from './i18n';
import { useScreens } from 'react-native-screens';
import { createAppContainer } from 'react-navigation';
import MainStackNavigator from './src/navigators/MainStackNavigator';

const AppContainer = createAppContainer(MainStackNavigator);

const Wrapper = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  return <AppContainer screenProps={{ theme: themeContext, t }} />;
};

const App = () => {
  useScreens();

  return (
    <ThemeManager>
      <I18nextProvider i18n={i18}>
        <Wrapper />
      </I18nextProvider>
    </ThemeManager>
  );
};

export default App;
