import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Form, FormInput, SubmitButton } from './styles';

import api from '~/services/api';

export default function AddResident() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');

  const { id } = useSelector((selectUser) => selectUser.user.profile);

  const emailRef = useRef();
  const mobileRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit() {
    await api.post('residents', {
      name,
      email,
      mobile,
      owner_id: id,
      street,
      number,
      city,
      state,
      password,
    });

    Alert.alert('Resident was created successfully.');
  }

  return (
    <Container>
      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          // autoCapitalize
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
          placeholder="Phone"
          returnKeyType="next"
          ref={mobileRef}
          onSubmitEditing={() => streetRef.current.focus()}
          value={mobile}
          onChangeText={setMobile}
        />

        <FormInput
          icon="add-location"
          autoCorrect={false}
          placeholder="Street"
          returnKeyType="next"
          onSubmitEditing={() => numberRef.current.focus()}
          ref={streetRef}
          value={street}
          onChangeText={setStreet}
        />
        <FormInput
          icon="add-location"
          autoCorrect={false}
          placeholder="Number"
          returnKeyType="next"
          onSubmitEditing={() => cityRef.current.focus()}
          ref={numberRef}
          value={number}
          onChangeText={setNumber}
        />
        <FormInput
          icon="location-city"
          autoCorrect={false}
          placeholder="City"
          returnKeyType="next"
          onSubmitEditing={() => stateRef.current.focus()}
          ref={cityRef}
          value={city}
          onChangeText={setCity}
        />
        <FormInput
          icon="location-city"
          autoCorrect={false}
          placeholder="State"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          ref={stateRef}
          value={state}
          onChangeText={setState}
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
