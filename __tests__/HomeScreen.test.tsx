import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ThemeManager from '../contexts/ManageThemeContext';
import HomeScreen from '../src/screens/HomeScreen';

const renderComponent = () =>
  renderer.create(
    <ThemeManager>
      <HomeScreen />
    </ThemeManager>,
  );

it('renders correctly', () => {
  renderComponent();
});
