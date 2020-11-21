import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { format, parseISO, isBefore, isToday } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Error from '~/components/Error';

import {
  Container,
  List,
  AppointmentInfo,
  Name,
  DateTitle,
  DateField,
  StartDate,
  EndDate,
} from './styles';

import api from '~/services/api';

export default function Appointment({ route }) {
  const [appointments, setAppointments] = useState([]);
  const [refreshList, setRefreshList] = useState(false);

  const { resident_id } = route.params;

  useEffect(() => {
    async function getAppointments() {
      const response = await api.get(`appointments/${resident_id}`);

      const dataFormat = response.data.map((item) => ({
        ...item,
        start_date: format(parseISO(item.start_date), "MMMM d',' yyyy"),
        end_date: format(parseISO(item.end_date), "MMMM d',' yyyy"),
        isActiveDate:
          isBefore(new Date(), parseISO(item.end_date)) ||
          isToday(parseISO(item.end_date)),
      }));

      setAppointments(dataFormat);
      setRefreshList(false);
    }

    getAppointments();
  }, [refreshList]);

  async function loadPage() {
    setRefreshList(true);
  }

  console.tron.log(!!appointments.length);

  return (
    <Container>
      {appointments.length ? (
        <List
          data={appointments}
          refreshing={refreshList}
          onRefresh={loadPage}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: data }) => (
            <AppointmentInfo isActiveDate={data.isActiveDate}>
              <Name>
                {/* <Icon name="person" size={25} color="#06D6A0" /> */}
                {data.name}
              </Name>
              <DateTitle>Schedule:</DateTitle>
              <DateField>
                <StartDate>
                  <Icon name="calendar-range" size={20} color="#06D6A0" />
                  {data.start_date}
                </StartDate>
                <EndDate>
                  <Icon name="calendar" size={20} color="#EF476F" />
                  {data.end_date}
                </EndDate>
              </DateField>
            </AppointmentInfo>
          )}
        />
      ) : (
        <Error />
      )}
    </Container>
  );
}

Appointment.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      resident_id: PropTypes.number,
    }),
  }).isRequired,
};
