import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import Camera from '~/components/Camera';

import { Container } from './styles';

export default function GuardCheckIn({ navigation }) {
  const [qrCodeData, setQrCodeData] = useState(false);

  const showAppointment = (data) => {
    navigation.navigate('AppointmentInfo', {
      data,
    });
  };

  return (
    <Container>
      <Camera onChange={showAppointment} />
    </Container>
  );
}
