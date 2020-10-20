import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Form,
  FormInput,
  PickerFields,
  SubmitButton,
} from './styles';

import api from '~/services/api';

export default function AddResident() {
  const [owner, setOwner] = useState([]);
  const [resident, setResident] = useState([
    {
      owner_id: 1,
      name: '',
    },
  ]);

  useEffect(() => {
    async function getOwner() {
      const response = await api.get('users');

      setOwner(response.data);
    }
    getOwner();
  }, []);

  console.tron.log(resident);

  return (
    <Container>
      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Name"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="mail-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="phone"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Phone"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />

        <PickerFields>
          <Icon name="people-outline" size={20} color="#222" />
          <Picker
            selectedValue={resident.owner_id}
            style={{
              height: 50,
              width: 250,
              color: '#222',
            }}
            onValueChange={(itemValue) =>
              setResident({
                owner_id: itemValue,
              })
            }
          >
            {owner.length ? (
              owner.map((data) => {
                return (
                  <Picker.Item
                    key={data.id}
                    label={data.name}
                    value={data.id}
                  />
                );
              })
            ) : (
              <Picker.Item label="Not found." />
            )}
          </Picker>
        </PickerFields>
        <FormInput
          icon="add-location"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Street"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="add-location"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Number"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="location-city"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="City"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="location-city"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="State"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="**********"
          returnKeyType="send"
          // ref={passwordRef}
          // onSubmitEditing={handleSubmit}
          // value={password}
          // onChangeText={setPassword}
        />
        <SubmitButton
          // loading={loading}
          // onPress={handleSubmit}
          fontSize={19}
        >
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
}
