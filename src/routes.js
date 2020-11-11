import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './pages/SignIn';
import AdminSignIn from './pages/SignIn/Admin';
import ResidentSignIn from './pages/SignIn/Resident';

import GuardCheckIn from './pages/GuardCheckIn';

import AdminDashboard from './pages/Dashboard/Administration';
import AddResident from './pages/Dashboard/Administration/AddResident';
import EditResident from './pages/Dashboard/Administration/EditResident';
import Appointment from './pages/Dashboard/Administration/Appointment';

import ResidentDashboard from './pages/Dashboard/Resident';
import EditAppointment from './pages/Dashboard/Resident/EditAppointment';
import QrCodeView from './components/QrCodeView';
import SelectDate from './pages/Dashboard/Resident/New/SelectDate';

Icon.loadFont();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function SignInStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        headerLeftContainerStyle: {},
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AdminSignIn"
        component={AdminSignIn}
        options={{
          headerTitle: '',
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          },
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ResidentSignIn"
        component={ResidentSignIn}
        options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          },
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="GuardCheckIn"
        component={GuardCheckIn}
        options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          },
          headerLeft: () => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AdminDashboardStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#444',
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
        component={AdminDashboard}
        options={{ headerShown: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="AddResident"
        component={AddResident}
        options={{
          title: 'Create Resident credentials',
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
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
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
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
        name="Appointment"
        component={Appointment}
        options={{
          title: 'Appointments',
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
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

function ResidentDashboardStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        headerLeftContainerStyle: {},
      }}
    >
      <Stack.Screen
        name="ResidentDashboard"
        component={ResidentDashboard}
        options={{ headerShown: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="EditAppointment"
        component={EditAppointment}
        options={{
          title: 'Edit the appointment',
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ResidentDashboard');
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
        name="QrCodeView"
        component={QrCodeView}
        options={{
          title: 'Share the appointment',
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditAppointment');
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

function NewAppointmentStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        headerLeftContainerStyle: {},
      }}
    >
      <Stack.Screen
        name="SelectDate"
        component={SelectDate}
        options={{
          title: 'New appointment',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="QrCodeView"
        component={QrCodeView}
        options={{
          title: 'Share the appointment',
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectDate');
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

export default function createRouter(isSigned = false, isAdmin = false) {
  return !isSigned ? (
    <Tabs.Navigator>
      <Tabs.Screen
        name="SignInStack"
        component={SignInStack}
        options={{ tabBarVisible: false }}
      />
    </Tabs.Navigator>
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
        name={isAdmin ? 'AdminDashboardStack' : 'ResidentDashboardStack'}
        component={isAdmin ? AdminDashboardStack : ResidentDashboardStack}
        options={{
          // tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Add"
        component={isAdmin ? AdminDashboardStack : NewAppointmentStack}
        options={{
          // tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" size={30} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
