import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

export default function Confirm({ route }) {
  const { data } = route.params;

  console.tron.log(data);
  return <Container />;
}
