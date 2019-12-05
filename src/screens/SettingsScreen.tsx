import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useSelector } from '../redux';
import { setTheme } from '../features/theming/ThemingSlice';
import { setLanguage } from '../features/i18n/i18nSlice';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Row from '../components/Row';
import normalize from '../../responsive';

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
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.theming.currentTheme);
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <Container>
      <ScrollView>
        <Row
          icon={<StyledIcon name="globe-americas" />}
          title={t('Language')}
          onPress={() =>
            navigate('SettingList', {
              title: 'Language',
              options: languages,
              selectedKey: i18n.language,
              onSelect: (language: string) => {
                if (language !== i18n.language) {
                  dispatch(setLanguage(language as LanguageKey));
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
              title: 'Theme',
              options: themes,
              selectedKey: currentTheme,
              onSelect: (thm: string) => {
                dispatch(setTheme(thm as ThemeKey));
              },
            })
          }
          renderAccessory={() => (
            <Value transform="capitalize">{t(currentTheme)}</Value>
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

const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

interface ValueProps {
  transform: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}
const Value = styled.Text<ValueProps>`
  color: ${props => props.theme.colors.textAlt};
  text-transform: ${props => props.transform || 'none'};
  font-size: ${normalize(18)};
`;

const StyledIcon = styled(Icon)`
  font-size: ${normalize(20)};
  margin-right: ${normalize(12)};
  color: ${props => props.theme.colors.text};
`;

export default SettingsScreen;
