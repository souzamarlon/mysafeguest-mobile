import React, { useState, useEffect } from 'react';
import { Alert, LogBox } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Profile,
  AlignTitleAndName,
  LogoutButton,
  WelcomeTitle,
  OwnerName,
  AddField,
  AddButton,
  ResidentsTitle,
  List,
  ResidentInfo,
  Name,
  MoreInfo,
  Email,
  AddressInfo,
  Address,
  CancelEdit,
  Delete,
  Edit,
  Appointment,
} from './styles';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

export default function Administration({ navigation }) {
  const [residents, setResidents] = useState([]);
  const [refreshList, setRefreshList] = useState(false);

  const dispatch = useDispatch();
  const { id, name } = useSelector((state) => state.user.profile);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setRefreshList(true);
    }
  }, [isFocused]);

  useEffect(() => {
    async function getResidents() {
      try {
        const response = await api.get(`/residents/${id}`);

        setResidents(response.data);
        setRefreshList(false);
      } catch (err) {
        Alert.alert('Unable to get the residents!');
      }
    }

    getResidents();
  }, [refreshList, id]);

  // LogBox.ignoreLogs(['Warning:']);

  async function loadPage() {
    setRefreshList(true);
  }

  async function handleDelete({ resident_id, resident_name }) {
    Alert.alert(
      `You are going to remove the resident ${resident_name}`,
      `Are you sure to remove ${resident_name}?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await api.delete(`/residents/${resident_id}`);
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
          <WelcomeTitle>Welcome,</WelcomeTitle>
          <OwnerName>{name}</OwnerName>
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
      <AddField>
        <ResidentsTitle>
          <Icon name="emoji-people" size={10} color="#43AA8B" />
          MANAGE YOUR RESIDENTS
          <Icon name="emoji-people" size={10} color="#43AA8B" />
        </ResidentsTitle>
        <AddButton
          onPress={() => {
            navigation.navigate('AddResident', { id });
          }}
        >
          <Icon name="add" size={24} color="#222" />
        </AddButton>
      </AddField>

      <List
        data={residents}
        refreshing={refreshList}
        onRefresh={loadPage}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: data }) => (
          <ResidentInfo
            onPress={() => {
              navigation.navigate('Appointments', { data });
            }}
          >
            <Name>{data.name}</Name>
            <MoreInfo>
              <Icon name="email" size={20} color="#999" />
              <Email>{data.email}</Email>
              <Icon name="phone" size={20} color="#999" />
              <Email>{data.mobile}</Email>
            </MoreInfo>
            <AddressInfo>
              <Icon name="house" size={20} color="#999" />
              <Address>{data.street},</Address>
              <Address>{data.number},</Address>
              <Address>{data.city}.</Address>
            </AddressInfo>
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
              <Appointment
                onPress={() => {
                  navigation.navigate('Appointment', { resident_id: data.id });
                }}
              >
                Appointments
              </Appointment>
            </CancelEdit>
          </ResidentInfo>
        )}
      />
    </Container>
  );
}
