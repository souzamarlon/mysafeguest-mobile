import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

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
  CancelEdit,
  Delete,
  Edit,
} from './styles';

import api from '~/services/api';

export default function Resident({ navigation }) {
  const [appointments, setAppointments] = useState([]);

  const dispatch = useDispatch();
  const { id, name } = useSelector((state) => state.user.profile);

  useEffect(() => {
    async function getAppointments() {
      try {
        const response = await api.get(`/appointments/${id}`);

        const dataFormat = response.data.map((item) => ({
          ...item,
          start_date: format(parseISO(item.start_date), "MMMM d',' yyyy"),
          end_date: format(parseISO(item.end_date), "MMMM d',' yyyy"),
          isActiveDate: isBefore(new Date(), parseISO(item.end_date)),
        }));

        setAppointments(dataFormat);
        // setRefreshList(false);
      } catch (err) {
        Alert.alert('Unable to get the appointments!');
      }
    }

    getAppointments();
  }, [id]);

  console.tron.log(appointments);

  return (
    <Container>
      <List
        data={appointments}
        // refreshing={refreshList}
        // onRefresh={loadPage}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: data }) => (
          <AppointmentInfo
            onPress={() => {
              navigation.navigate('Appointments', { data });
            }}
          >
            <Name>{data.name}</Name>
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
            <CancelEdit>
              <Delete
                onPress={() =>
                  handleDelete({
                    resident_id: data.id,
                    resident_name: data.name,
                  })
                }
              >
                Delete
              </Delete>
              <Edit
                onPress={() => {
                  navigation.navigate('EditResident', { data });
                }}
              >
                Edit
              </Edit>
            </CancelEdit>
          </AppointmentInfo>
        )}
      />
    </Container>
  );
}
