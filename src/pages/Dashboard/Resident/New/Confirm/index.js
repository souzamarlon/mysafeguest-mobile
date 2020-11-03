import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { Container } from './styles';

export default function Confirm({ route }) {
  const { data } = route.params;

  console.tron.log(data);
  return (
    <Container>
      <QRCode value="http://awesome.link.qr" />
    </Container>
  );
}
