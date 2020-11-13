import React, { useState } from 'react';

import Camera from '~/components/Camera';

import { Container } from './styles';

export default function GuardCheckIn({ navigation }) {
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
