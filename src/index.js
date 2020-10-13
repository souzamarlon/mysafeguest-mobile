import React from 'react';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import codePush from 'react-native-code-push';

import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './store';

import App from './App';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};
const Index = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default codePush(codePushOptions)(Index);
