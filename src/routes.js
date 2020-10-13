import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';
import Scan from './pages/Dashboard/Scan';

import Profile from './pages/Profile';

Icon.loadFont();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function DashboardStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        headerLeftContainerStyle: {},
      }}
    />
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: '#333',
        inactiveBackgroundColor: '#111',
        activeBackgroundColor: '#222',
        showLabel: false,
        // animationEnabled: true,

        labelStyle: {
          fontSize: 14,
          // paddingBottom: 5,
        },
        style: {
          height: 38,
          backgroundColor: '#111',
          paddingTop: 2,
          borderTopWidth: 0,
        },
      }}
    />
  );
}
