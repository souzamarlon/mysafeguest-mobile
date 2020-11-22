import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Form,
  FormInput,
  AddressField,
  SubmitButton,
} from './styles';

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
  const [postal_code, setPostal_code] = useState(data.postal_code);
  // const [password, setPassword] = useState('');

  const emailRef = useRef();
  const mobileRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const postalCodeRef = useRef();
  // const passwordRef = useRef();

  async function handleUpdate() {
    try {
      const response = await api.put(`residents/${data.id}`, {
        name,
        email,
        mobile,
        street,
        number,
        city,
        state,
        postal_code,
      });

      if (response.data) {
        Alert.alert('The resident has been updated successfully.');
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
            icon="add-location"
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
            icon="location-city"
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

EditResident.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        mobile: PropTypes.string,
        street: PropTypes.string,
        number: PropTypes.number,
        city: PropTypes.string,
        state: PropTypes.string,
        postal_code: PropTypes.string,
      }),
    }),
  }).isRequired,
};
