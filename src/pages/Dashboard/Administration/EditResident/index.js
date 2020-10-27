import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { Container, Form, FormInput, SubmitButton } from './styles';

import api from '~/services/api';

export default function EditResident({ route }) {
  const { data } = route.params;

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [mobile, setMobile] = useState(data.mobile);
  const [street, setStreet] = useState(data.street);
  const [number, setNumber] = useState(data.number.toString());
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  // const [password, setPassword] = useState('');

  const emailRef = useRef();
  const mobileRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const passwordRef = useRef();

  async function handleUpdate() {
    await api.put(`residents/${data.id}`, {
      name,
      email,
      mobile,
      street,
      number,
      city,
      state,
    });

    Alert.alert('The resident has been updated successfully.');
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
        {/* <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="**********"
          returnKeyType="send"
          ref={passwordRef}
          onSubmitEditing={handleUpdate}
          value={password}
          onChangeText={setPassword}
        /> */}
        <SubmitButton onPress={handleUpdate} fontSize={19}>
          Update
        </SubmitButton>
      </Form>
    </Container>
  );
}
