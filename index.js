import React from 'react';
import { AppRegistry } from 'react-native';
import codePush from 'react-native-code-push';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux';
import App from './App';
import { name as appName } from './app.json';

const WrappedApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

let Application = WrappedApp;

// If release
if (!__DEV__) {
  Application = codePush()(WrappedApp);
}

AppRegistry.registerComponent(appName, () => Application);
