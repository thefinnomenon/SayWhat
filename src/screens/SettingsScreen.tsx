import React from 'react';
import { Theme, ScreenProps } from '../../types';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ManageThemeContext';
import i18n from 'i18next';

export const SettingsScreen = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <Button title={t('English')} onPress={() => changeLanguage('en')} />
      <Button title={t('Portuguese')} onPress={() => changeLanguage('pt')} />
      <Button title={t('Toggle Dark Mode')} onPress={() => theme.toggle!()} />
    </Container>
  );
};

SettingsScreen.navigationOptions = ({
  screenProps,
}: {
  screenProps: ScreenProps;
}) => ({
  title: screenProps.t('Settings'),
});

const Container = styled.View<Theme>`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  background: ${(props: Theme) => props.theme.colors.background};
`;

const Button = styled.Button<Theme>`
  color: ${(props: Theme) => props.theme.colors.text};
`;

export default SettingsScreen;
