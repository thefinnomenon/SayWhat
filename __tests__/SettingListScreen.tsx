import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ThemeManager from '../contexts/ManageThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18 from '../i18n';

import SettingListScreen from '../src/screens/SettingListScreen';

jest.mock('react-navigation-hooks', () => {
  return {
    useNavigationParam: jest.fn().mockImplementation(param => {
      switch (param) {
        case 'options':
          return [
            { key: '1', value: 'One' },
            { key: '2', value: 'Two' },
            { key: '3', value: 'Three' },
          ];
        case 'selectedKey':
          return '2';
        case 'onSelect':
          return jest.fn().mockImplementation(key => {
            console.log(key);
          });
      }
    }),
  };
});

const renderComponent = () =>
  renderer.create(
    <ThemeManager>
      <I18nextProvider i18n={i18}>
        <SettingListScreen />
      </I18nextProvider>
    </ThemeManager>,
  );

it('renders correctly', () => {
  renderComponent();
});
