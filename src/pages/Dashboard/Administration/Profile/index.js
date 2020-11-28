import React, { useState, useRef, useEffect } from 'react';
import { Alert } from 'react-native';

import { useSelector } from 'react-redux';

import {
  Container,
  OwnerInfo,
  OwnerView,
  Form,
  FieldTitle,
  FormInput,
  AddressField,
  SubmitButton,
} from './styles';

import api from '~/services/api';

import Background from '~/components/Background';

export default function Profile() {
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal_code, setPostal_code] = useState('');
  const [address_id, setAddress_id] = useState();

  const streetRef = useRef();
  const numberRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const postalCodeRef = useRef();

  const { id, name, email } = useSelector(
    (selectUser) => selectUser.user.profile
  );

  useEffect(() => {
    async function getAddress() {
      const response = await api.get(`addresses/${id}`);

      setAddress_id(response.data[0].id);
      setStreet(response.data[0].street);
      setNumber(response.data[0].number.toString());
      setCity(response.data[0].city);
      setState(response.data[0].state);
      setPostal_code(response.data[0].postal_code);
    }

    getAddress();
  }, [id]);

  async function handleUpdate() {
    try {
      const response = await api.put(`addresses/${address_id}`, {
        street,
        number,
        city,
        state,
        postal_code,
      });

      if (response.data) {
        Alert.alert('The address has been updated successfully.');
      }
    } catch (err) {
      // Alert.alert('The resident could not be created.');
    }
  }

  return (
    <Background backgroundName="ProfileBackground">
      <Container>
        <FieldTitle>Name</FieldTitle>
        <OwnerView>
          <OwnerInfo>{name}</OwnerInfo>
        </OwnerView>
        <FieldTitle>Email</FieldTitle>
        <OwnerView>
          <OwnerInfo>{email}</OwnerInfo>
        </OwnerView>
        <Form>
          <FieldTitle>Address</FieldTitle>
          <AddressField>
            <FormInput
              icon="add-location"
              autoCorrect={false}
              placeholder="Street"
              maxLength={15}
              returnKeyType="next"
              onSubmitEditing={() => numberRef.current.focus()}
              ref={streetRef}
              value={street}
              onChangeText={setStreet}
              style={{ width: '50%', marginRight: 2 }}
            />
            <FormInput
              // icon="add-location"
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Number"
              maxLength={8}
              returnKeyType="next"
              onSubmitEditing={() => cityRef.current.focus()}
              ref={numberRef}
              value={number}
              onChangeText={setNumber}
              style={{ width: '50%' }}
            />
          </AddressField>
          <AddressField>
            <FormInput
              icon="location-city"
              autoCorrect={false}
              placeholder="City"
              maxLength={10}
              returnKeyType="next"
              onSubmitEditing={() => stateRef.current.focus()}
              ref={cityRef}
              value={city}
              onChangeText={setCity}
              style={{ width: '50%', marginRight: 2 }}
            />
            <FormInput
              // icon="location-city"
              autoCorrect={false}
              maxLength={10}
              placeholder="State"
              returnKeyType="next"
              onSubmitEditing={() => postalCodeRef.current.focus()}
              ref={stateRef}
              value={state}
              onChangeText={setState}
              style={{ width: '50%' }}
            />
          </AddressField>
          <FormInput
            icon="local-post-office"
            autoCorrect={false}
            maxLength={15}
            placeholder="Postal code"
            returnKeyType="next"
            // onSubmitEditing={() => passwordRef.current.focus()}
            ref={postalCodeRef}
            value={postal_code}
            onChangeText={setPostal_code}
          />

          <SubmitButton onPress={handleUpdate} fontSize={19}>
            Update
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
