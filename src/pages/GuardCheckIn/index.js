import React, { useState } from 'react';
import { View } from 'react-native';

import Camera from '~/components/Camera';

import { Container } from './styles';

const GuardCheckIn = () => {
  const [qrCodeData, setQrCodeData] = useState(false);

  return (
    <Container>
      <Camera onChange={setQrCodeData} />
    </Container>
  );
};

export default GuardCheckIn;
