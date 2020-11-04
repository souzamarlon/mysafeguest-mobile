import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { format, parseISO, isBefore } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  AppointmentTitle,
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
  const [refreshList, setRefreshList] = useState(false);

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
        setRefreshList(false);
      } catch (err) {
        Alert.alert('Unable to get the appointments!');
      }
    }

    getAppointments();
  }, [id, refreshList]);

  async function loadPage() {
    setRefreshList(true);
  }

  async function handleDelete({ appointment_id, guest_name }) {
    Alert.alert(
      `You are going to remove the ${guest_name} appointment`,
      `Are you sure to remove the ${guest_name} appointment?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await api.delete(`/appointments/${appointment_id}`);
            setRefreshList(true);
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Container>
      <AppointmentTitle>My Appointments:</AppointmentTitle>
      <List
        data={appointments}
        refreshing={refreshList}
        onRefresh={loadPage}
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
                    appointment_id: data.id,
                    guest_name: data.name,
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
