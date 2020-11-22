import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { useIsFocused } from '@react-navigation/native';

import { format, parseISO, isBefore, isToday } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Profile,
  AlignTitleAndName,
  ResidentName,
  ResidentEmail,
  LogoutButton,
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
  const { id, name, email } = useSelector((state) => state.user.profile);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setRefreshList(true);
    }
  }, [isFocused]);

  useEffect(() => {
    async function getAppointments() {
      try {
        const response = await api.get(`/appointments/${id}`);

        const dataFormat = response.data.map((item) => ({
          ...item,
          start_date: format(parseISO(item.start_date), "MMMM d',' yyyy"),
          end_date: format(parseISO(item.end_date), "MMMM d',' yyyy"),
          start_date_WF: item.start_date,
          end_date_WF: item.end_date,
          isActiveDate:
            isBefore(new Date(), parseISO(item.end_date)) ||
            isToday(parseISO(item.end_date)),
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

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Profile>
        <AlignTitleAndName>
          <ResidentName>{name}</ResidentName>
          <ResidentEmail>{email}</ResidentEmail>
        </AlignTitleAndName>
        <LogoutButton>
          <Icon
            name="exit-to-app"
            size={24}
            color="#E74040"
            onPress={handleLogout}
          />
        </LogoutButton>
      </Profile>
      <AppointmentTitle>My Appointments:</AppointmentTitle>
      <List
        data={appointments}
        refreshing={refreshList}
        onRefresh={loadPage}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: data }) => (
          <AppointmentInfo isActiveDate={data.isActiveDate}>
            <Name numberOfLines={1}>{data.name}</Name>
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
                  navigation.navigate('EditAppointment', { data });
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

Resident.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
