import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../src/screens/HomeScreen';

function renderWithNavigation() {
  const AppNavigator = createStackNavigator({
    Home: HomeScreen,
  });

  const App = createAppContainer(AppNavigator);

  return <App />;
}
it('renders correctly', () => {
  const Home = renderWithNavigation();
  renderer.create(Home);
});
