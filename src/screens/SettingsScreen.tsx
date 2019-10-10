import React from 'react';
import { ScrollView } from 'react-native';
import { Theme, ScreenProps } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ManageThemeContext';
import i18n from 'i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';
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

  return (
    <Container>
      <ScrollView>
        <Row
          icon={<StyledIcon name="globe-americas" />}
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
          renderAccessory={() => (
            <Value transform="uppercase">{i18n.language}</Value>
          )}
          showChevron
        />
        <Row
          icon={<StyledIcon name="eye" />}
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
          renderAccessory={() => (
            <Value transform="capitalize">{t(theme.mode)}</Value>
          )}
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
  background: ${props => props.theme.colors.background};
`;

type ValueProps = {
  transform: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
} & Theme;
const Value = styled.Text<ValueProps>`
  color: ${props => props.theme.colors.textAlt};
  text-transform: ${props => props.transform || 'none'};
  font-size: 18;
`;

const StyledIcon = styled(Icon)<Theme>`
  font-size: 20;
  margin-right: 12px;
  color: ${props => props.theme.colors.text};
`;

export default SettingsScreen;
