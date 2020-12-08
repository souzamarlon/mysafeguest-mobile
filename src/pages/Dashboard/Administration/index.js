import React, { useState, useEffect } from 'react';
import { Alert, LogBox } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {
  Container,
  Profile,
  AlignTitleAndName,
  LogoutButton,
  WelcomeTitle,
  ResidentView,
  ResidentsTitle,
  List,
  ResidentInfo,
  Name,
  MoreInfo,
  ContactView,
  Contact,
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
        Alert.alert('Failure!', 'Unable to get the residents!');
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
    <Background backgroundName="AddResidentBackground">
      <Container>
        <Profile>
          <AlignTitleAndName>
            <WelcomeTitle>Welcome, &shy;{name}</WelcomeTitle>
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
        <ResidentView>
          <ResidentsTitle>
            <Icon name="emoji-people" size={10} color="#43AA8B" />
            MANAGE YOUR RESIDENTS
            <Icon name="emoji-people" size={10} color="#43AA8B" />
          </ResidentsTitle>
        </ResidentView>

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
              <Name numberOfLines={1}>{data.name}</Name>
              <MoreInfo>
                <ContactView>
                  <Icon name="email" size={20} color="#444" />
                  <Contact dataDetectorType="email" numberOfLines={2}>
                    {data.email}
                  </Contact>
                </ContactView>
                <ContactView>
                  <Icon name="phone" size={20} color="#444" />
                  <Contact dataDetectorType="phoneNumber">
                    {data.mobile}
                  </Contact>
                </ContactView>
              </MoreInfo>

              <AddressInfo>
                <Icon name="location-on" size={20} color="#444" />
                <Address>{data.Address.street},</Address>
                <Address>{data.number}.</Address>
              </AddressInfo>
              <AddressInfo>
                <Icon name="location-city" size={20} color="#444" />
                <Address numberOfLines={1}>{data.Address.city},</Address>
                <Address numberOfLines={1}>{data.Address.state},</Address>
                <Address numberOfLines={1}>{data.Address.postal_code}.</Address>
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
                    navigation.navigate('Appointment', {
                      resident_id: data.id,
                    });
                  }}
                >
                  Appointments
                </Appointment>
              </CancelEdit>
            </ResidentInfo>
          )}
        />
      </Container>
    </Background>
  );
}

Administration.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
