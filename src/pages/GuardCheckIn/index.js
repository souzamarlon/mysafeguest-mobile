import React, { useState, useEffect } from 'react';

import Camera from '~/components/Camera';

import { Container } from './styles';

export default function GuardCheckIn({ navigation }) {
  function navigateTo(data) {
    console.tron.log('read 2', data);

    navigation.navigate('AppointmentInfo', {
      data,
    });
  }
  const showAppointment = (data) => {
    console.tron.log('!read', data);

    navigateTo(data);
  };

  return (
    <Container>
      <Camera onChange={showAppointment} />
    </Container>
  );
}
