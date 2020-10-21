import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import AddResident from './pages/Dashboard/AddResident';
import EditResident from './pages/Dashboard/EditResident';

Icon.loadFont();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function DashboardStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#555',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        headerLeftContainerStyle: {},
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="AddResident"
        component={AddResident}
        options={{
          title: 'Create Resident credentials',
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginRight: 40,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon
                name="arrow-back"
                size={30}
                color="#222"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="EditResident"
        component={EditResident}
        options={{
          title: 'Edit Resident credentials',
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginRight: 40,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon
                name="arrow-back"
                size={30}
                color="#222"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
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
    >
      <Tabs.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          // tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
