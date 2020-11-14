import React, { useEffect, useState } from 'react';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, parseISO, isAfter } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Container,
  Content,
  Title,
  TitleText,
  ResidentName,
  Name,
  Date,
  DateText,
  BackButton,
} from './styles';

import api from '~/services/api';

export default function AppointmentInfo({ route }) {
  const [appointment, setAppointment] = useState({});
  const [startDateFormatted, setStartDateFormatted] = useState([]);
  const [endDateFormatted, setEndDateFormatted] = useState([]);

  const { data } = route.params;

  useEffect(() => {
    async function getAppointment() {
      const response = await api.get(`guardcheckin/${data.id}`);

      setStartDateFormatted(
        format(parseISO(response.data.start_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        })
      );

      setEndDateFormatted(
        format(parseISO(response.data.end_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        })
      );

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
        <Title backgroundColor="rgba(233, 196, 106, 0.8)">
          <TitleText>Guest Information:</TitleText>
        </Title>
        <Name>{data.name}</Name>
        <Date>
          <Icon name="date-range" size={25} color="#06D6A0" />
          <DateText>{startDateFormatted}</DateText>
        </Date>
        <Date>
          <Icon name="date-range" size={25} color="#EF476F" />
          <DateText>{endDateFormatted}</DateText>
        </Date>
        <Title backgroundColor="rgba(231, 111, 81, 0.8)">
          <TitleText>Resident Information:</TitleText>
        </Title>
        <Date>
          <Icon name="house-siding" size={25} color="#555" />
          <ResidentName>
            {Object.keys(appointment).length >= 1
              ? appointment.Resident.name
              : '0'}
          </ResidentName>
        </Date>
        <Date>
          <Icon name="mobile-friendly" size={25} color="#555" />
          <ResidentName>
            {Object.keys(appointment).length >= 1
              ? appointment.Resident.mobile
              : '0'}
          </ResidentName>
        </Date>
        <Date>
          <Icon name="location-on" size={25} color="#555" />
          <ResidentName>
            {Object.keys(appointment).length >= 1
              ? appointment.Resident.street
              : '0'}
          </ResidentName>
          <ResidentName>
            {Object.keys(appointment).length >= 1
              ? appointment.Resident.number
              : '0'}
          </ResidentName>
          <ResidentName>
            {Object.keys(appointment).length >= 1
              ? appointment.Resident.city
              : '0'}
          </ResidentName>
        </Date>
      </Content>
      <BackButton fontSize={19}>Come back</BackButton>
    </Container>
  );
}
