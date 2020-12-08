import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

export default function AddAddress({ route }) {
  const { data } = route.params;

  console.log(data);

  return <Container />;
}
