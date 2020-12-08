import React, { useEffect, useState } from 'react';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, parseISO } from 'date-fns';

import PropTypes from 'prop-types';

import pt from 'date-fns/locale/pt';
import Error from '~/components/Error';
import Background from '~/components/Background';

import {
  Container,
  Content,
  Title,
  TitleText,
  Name,
  Date,
  ResidentView,
  ResidentText,
  DateText,
  BackButton,
} from './styles';

import api from '~/services/api';

export default function AppointmentInfo({ route, navigation }) {
  const [appointment, setAppointment] = useState({});
  const [startDateFormatted, setStartDateFormatted] = useState([]);
  const [endDateFormatted, setEndDateFormatted] = useState([]);

  const { data } = route.params;

  useEffect(() => {
    async function getAppointment() {
      try {
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
      } catch (err) {
        // const { error } = err.response.data;
      }
    }
    getAppointment();
  }, []);

  return (
    <Background backgroundName="GuardImage">
      <Container>
        {Object.keys(appointment).length >= 1 ? (
          <Content
            style={{
              height: responsiveScreenHeight(65),
            }}
          >
            <Title backgroundColor="rgba(239, 71, 111, 0.7)">
              <TitleText>Guest Information:</TitleText>
            </Title>
            <Name>{data.name}</Name>
            <Date>
              <Icon name="date-range" size={20} color="#06D6A0" />
              <DateText>{startDateFormatted}</DateText>
            </Date>
            <Date>
              <Icon name="date-range" size={20} color="#EF476F" />
              <DateText>{endDateFormatted}</DateText>
            </Date>
            <Title backgroundColor="rgba(6, 214, 160, 0.7)">
              <TitleText>Resident Information:</TitleText>
            </Title>
            <ResidentView style={{ justifyContent: 'center' }}>
              <Icon name="house-siding" size={22} color="#48cae4" />
              <ResidentText>
                {Object.keys(appointment).length >= 1
                  ? appointment.Resident.name
                  : '0'}
              </ResidentText>
            </ResidentView>
            <ResidentView>
              <Icon name="mobile-friendly" size={20} color="#e07a5f" />
              <ResidentText>
                {Object.keys(appointment).length >= 1
                  ? appointment.Resident.mobile
                  : '0'}
              </ResidentText>
            </ResidentView>
            <ResidentView>
              <Icon name="location-on" size={20} color="#ffba08" />
              <ResidentText>
                {Object.keys(appointment).length >= 1
                  ? appointment.Resident.Address.street
                  : '0'}
                ,
              </ResidentText>
              <ResidentText>
                {Object.keys(appointment).length >= 1
                  ? appointment.Resident.number
                  : '0'}
                ,
              </ResidentText>
              <ResidentText>
                {Object.keys(appointment).length >= 1
                  ? appointment.Resident.Address.city
                  : '0'}
                .
              </ResidentText>
            </ResidentView>

            <ResidentView>
              <Icon name="local-post-office" size={22} color="#4a4e69" />
              <ResidentText>
                {Object.keys(appointment).length >= 1
                  ? appointment.Resident.Address.postal_code
                  : '0'}
              </ResidentText>
            </ResidentView>
          </Content>
        ) : (
          <Error />
        )}

        <BackButton fontSize={19} onPress={() => navigation.goBack()}>
          GO BACK
        </BackButton>
      </Container>
    </Background>
  );
}

AppointmentInfo.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
