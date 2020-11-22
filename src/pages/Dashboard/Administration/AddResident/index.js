import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import {
  Container,
  Form,
  FormInput,
  AddressField,
  SubmitButton,
} from './styles';

import api from '~/services/api';

export default function AddResident() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal_code, setPostal_code] = useState('');
  const [password, setPassword] = useState('');

  const { id } = useSelector((selectUser) => selectUser.user.profile);

  const emailRef = useRef();
  const mobileRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const postalCodeRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit() {
    try {
      const response = await api.post('residents', {
        name,
        email,
        mobile,
        owner_id: id,
        street,
        number,
        city,
        state,
        postal_code,
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
        <FormInput
          icon="phone"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={15}
          keyboardType="phone-pad"
          placeholder="Phone"
          returnKeyType="next"
          ref={mobileRef}
          onSubmitEditing={() => streetRef.current.focus()}
          value={mobile}
          onChangeText={setMobile}
        />

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
            placeholder="State"
            maxLength={10}
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
          placeholder="Postal code"
          maxLength={15}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          ref={postalCodeRef}
          value={postal_code}
          onChangeText={setPostal_code}
        />
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
