import React, { useEffect, useState } from 'react';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

import { Container, Content, Name, BackButton } from './styles';

import api from '~/services/api';

export default function AppointmentInfo({ route }) {
  const [appointment, setAppointment] = useState([]);

  const { data } = route.params;

  useEffect(() => {
    async function getAppointment() {
      const response = await api.get(`guardcheckin/${data.id}`);

      setAppointment(response.data);
    }

    getAppointment();
  }, []);

  console.tron.log(appointment);

  return (
    <Container>
      <Content
        style={{
          height: responsiveScreenHeight(65),
        }}
      >
        <Name>{data.name}</Name>
      </Content>
      <BackButton fontSize={19}>Come back</BackButton>
    </Container>
  );
}
