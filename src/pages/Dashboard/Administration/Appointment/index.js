import React, { useEffect, useState } from 'react';

import { format, parseISO, isBefore } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  List,
  AppointmentInfo,
  Name,
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
        isActiveDate: isBefore(new Date(), parseISO(item.end_date)),
      }));
      console.tron.log(dataFormat);

      setAppointments(dataFormat);
      setRefreshList(false);
    }

    getAppointments();
  }, [refreshList]);

  async function loadPage() {
    setRefreshList(true);
  }

  return (
    <Container>
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
            <DateField>
              <StartDate>
                <Icon name="clock-in" size={25} color="#06D6A0" />
                {data.start_date}
              </StartDate>
              <EndDate>
                <Icon name="clock-out" size={25} color="#EF476F" />
                {data.end_date}
              </EndDate>
            </DateField>
          </AppointmentInfo>
        )}
      />
    </Container>
  );
}
