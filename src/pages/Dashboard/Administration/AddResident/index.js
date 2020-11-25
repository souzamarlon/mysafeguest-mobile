import React, { useState, useRef, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { useIsFocused } from '@react-navigation/native';

import {
  Container,
  Form,
  FieldTitle,
  FormInput,
  AddressField,
  SelectLayout,
  SubmitButton,
} from './styles';

import api from '~/services/api';

export default function AddResident() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState([]);
  const [address_id, setAddress_id] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState('');
  const [refreshList, setRefreshList] = useState(false);

  const { id } = useSelector((selectUser) => selectUser.user.profile);

  const emailRef = useRef();
  const mobileRef = useRef();
  const numberRef = useRef();
  const passwordRef = useRef();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setRefreshList(true);
    }
  }, [isFocused]);

  useEffect(() => {
    async function getAddresses() {
      const response = await api.get(`addresses/${id}`);

      setAddress(response.data);
      setAddress_id(response.data[0].id);
      setRefreshList(false);
    }

    getAddresses();
  }, [refreshList]);

  async function handleSubmit() {
    try {
      const response = await api.post('residents', {
        name,
        email,
        mobile,
        owner_id: id,
        address_id,
        number,
        password,
      });

      if (response.data) {
        Alert.alert('Resident was created successfully.');
      }
    } catch (err) {
      // Alert.alert('The resident could not be created.');
    }
  }

  return (
    <Container>
      <Form>
        <FieldTitle>Name</FieldTitle>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          // autoCapitalize
          maxLength={30}
          placeholder="Name"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <FieldTitle>Email</FieldTitle>
        <FormInput
          icon="mail-outline"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          maxLength={50}
          placeholder="Email"
          returnKeyType="next"
          ref={emailRef}
          onSubmitEditing={() => mobileRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FieldTitle>Mobile Number</FieldTitle>
        <FormInput
          icon="phone"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={15}
          keyboardType="phone-pad"
          placeholder="Mobile Number"
          returnKeyType="next"
          ref={mobileRef}
          onSubmitEditing={() => numberRef.current.focus()}
          value={mobile}
          onChangeText={setMobile}
        />
        <FieldTitle>Address</FieldTitle>

        <AddressField>
          <SelectLayout>
            <Picker
              selectedValue={address_id}
              style={{ height: 50, width: 250, color: '#222' }}
              onValueChange={(itemValue) => setAddress_id(itemValue)}
            >
              {address.length ? (
                address.map((data) => {
                  return (
                    <Picker.Item
                      key={data.id}
                      label={`${data.street}, ${data.city}, ${data.state}, ${data.postal_code}`}
                      value={data.id}
                    />
                  );
                })
              ) : (
                <Picker.Item label="Not found." />
              )}
            </Picker>
          </SelectLayout>
        </AddressField>
        <FieldTitle>House Number</FieldTitle>
        <FormInput
          // icon="add-location"
          autoCorrect={false}
          keyboardType="numeric"
          placeholder="Number"
          maxLength={8}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          ref={numberRef}
          value={number}
          onChangeText={setNumber}
        />

        <FieldTitle>Password</FieldTitle>
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="**********"
          returnKeyType="send"
          ref={passwordRef}
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <SubmitButton onPress={handleSubmit} fontSize={19}>
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
}
