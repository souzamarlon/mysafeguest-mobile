import React, { useState, useRef } from 'react';

import { Alert } from 'react-native';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  Title,
  AddressField,
  SubmitButton,
} from './styles';

import api from '~/services/api';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal_code, setPostal_code] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const streetRef = useRef();
  const numberRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const postalCodeRef = useRef();

  async function handleSubmit() {
    try {
      const response = await api.post('users', {
        name,
        email,
        password,
      });

      if (response) {
        const { id } = response.data;

        const addressResponse = await api.post('addresses', {
          owner_id: id,
          street,
          number,
          city,
          state,
          postal_code,
        });

        if (addressResponse) {
          Alert.alert(
            'Be happy!',
            'Your account has been created successfully!'
          );

          // navigation.navigate('Payment', {
          //   name,
          //   email,
          //   password,
          //   street,
          //   number,
          //   city,
          //   state,
          //   postal_code,
          // });
        }
      }
    } catch (err) {
      // Alert.alert('Failure');
    }
  }

  return (
    <Background backgroundName="SignInDashboardImage">
      <Container>
        <Form>
          <Title>Name</Title>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            maxLength={30}
            // autoCapitalize
            placeholder="Name"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <Title>Email</Title>
          <FormInput
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            maxLength={30}
            // autoCapitalize
            keyboardType="email-address"
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => streetRef.current.focus()}
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
          />

          <Title>Address</Title>
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
              style={{ width: '49%', marginRight: 2 }}
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
              style={{ width: '49%', marginRight: 2 }}
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
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={postalCodeRef}
            value={postal_code}
            onChangeText={setPostal_code}
          />
          <Title>Password:</Title>
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
            Confirm
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
