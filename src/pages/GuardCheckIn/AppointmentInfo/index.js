import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function AppointmentInfo({ route }) {
  const { data } = route.params;

  console.tron.log(data);

  return <View />;
}
