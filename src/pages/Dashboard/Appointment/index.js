import React, { useEffect, useState } from 'react';

import { format, parseISO, isBefore } from 'date-fns';

import {
  Container,
  List,
  AppointmentInfo,
  Name,
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
  }, []);

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
            <Name>{data.name}</Name>
            <StartDate>{data.start_date}</StartDate>
            <EndDate>{data.end_date}</EndDate>
          </AppointmentInfo>
        )}
      />
    </Container>
  );
}
