import React, { useState, useEffect } from 'react';

import Camera from '~/components/Camera';

import { Container } from './styles';

export default function GuardCheckIn({ navigation }) {
  function navigateTo(data) {
    navigation.navigate('AppointmentInfo', {
      data,
    });
  }

  const showAppointment = (data) => {
    navigateTo(data);
  };

  return (
    <Container>
      <Camera onChange={showAppointment} />
    </Container>
  );
}
