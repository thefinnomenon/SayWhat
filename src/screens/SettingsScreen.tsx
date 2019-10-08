import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Theme, ScreenProps } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ManageThemeContext';
import i18n from 'i18next';
import Row from '../components/Row';

const languages = [
  { key: 'en', value: 'English' },
  { key: 'pt', value: 'Portuguese' },
];

const themes = [
  { key: 'system', value: 'System Default' },
  { key: 'light', value: 'Light' },
  { key: 'dark', value: 'Dark' },
];

export const SettingsScreen = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container>
      <ScrollView>
        <Row
          title={t('Language')}
          onPress={() =>
            navigate('SettingList', {
              title: t('Language'),
              options: languages,
              selectedKey: i18n.language,
              onSelect: (language: string) => {
                if (language !== i18n.language) {
                  i18n.changeLanguage(language);
                }
              },
            })
          }
          renderAccessory={() => <Value>{i18n.language.toUpperCase()}</Value>}
          showChevron
        />
        <Row
          title={t('Theme')}
          onPress={() =>
            navigate('SettingList', {
              title: t('Theme'),
              options: themes,
              selectedKey: theme.mode,
              onSelect: (thm: string) => {
                theme.setMode(thm);
              },
            })
          }
          renderAccessory={() => <Value>{t(capitalize(theme.mode))}</Value>}
          showChevron
        />
      </ScrollView>
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
  background: ${(props: Theme) => props.theme.colors.background};
`;

const Value = styled.Text`
  color: ${(props: Theme) => props.theme.colors.textAlt};
  font-size: 18;
`;

export default SettingsScreen;
