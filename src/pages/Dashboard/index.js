import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Profile,
  NameTitle,
  OwnerName,
  List,
  ResidentInfo,
  Name,
} from './styles';

import api from '~/services/api';
import Background from '~/components/Background';

export default function Dashboard({ navigation }) {
  const [residents, setResidents] = useState([]);
  const [refreshList, setRefreshList] = useState(false);

  const { id, name } = useSelector((state) => state.user.profile);

  useEffect(() => {
    async function getResidents() {
      const response = await api.get(`/residents/${id}`);

      setResidents(response.data);
      setRefreshList(false);
    }

    getResidents();
  }, [refreshList, id]);

  async function loadPage() {
    setRefreshList(true);
  }

  return (
    <Container>
      <Profile>
        <NameTitle>Name:</NameTitle>
        <OwnerName>{name}</OwnerName>
      </Profile>
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
          </ResidentInfo>
        )}
      />
    </Container>
  );
}
