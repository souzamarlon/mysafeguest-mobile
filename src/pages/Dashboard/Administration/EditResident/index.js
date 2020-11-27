import React, { useState, useRef, useEffect } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Picker } from '@react-native-picker/picker';

import {
  Container,
  Form,
  FieldTitle,
  FormInput,
  SelectLayout,
  SubmitButton,
} from './styles';

import api from '~/services/api';

export default function EditResident({ route }) {
  const { data } = route.params;

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [mobile, setMobile] = useState(data.mobile);
  const [number, setNumber] = useState(data.number.toString());
  const [address, setAddress] = useState([]);
  const [address_id, setAddress_id] = useState(data.address_id);
  // const [password, setPassword] = useState('');

  const emailRef = useRef();
  const mobileRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();
  // const passwordRef = useRef();

  useEffect(() => {
    async function getAddresses() {
      const response = await api.get(`addresses/${data.owner_id}`);

      setAddress(response.data);
    }

    getAddresses();
  }, []);

  async function handleUpdate() {
    try {
      const response = await api.put(`residents/${data.id}`, {
        name,
        email,
        mobile,
        number,
        address_id,
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
          onSubmitEditing={() => streetRef.current.focus()}
          value={mobile}
          onChangeText={setMobile}
        />
        <FieldTitle>Address</FieldTitle>

        <SelectLayout>
          <Picker
            selectedValue={address_id}
            style={{ height: 50, width: 250, color: '#222' }}
            onValueChange={(itemValue) => setAddress_id(itemValue)}
          >
            {address.length ? (
              address.map((item) => {
                return (
                  <Picker.Item
                    key={item.id}
                    label={`${item.street}, ${item.city}, ${item.state}, ${item.postal_code}`}
                    value={item.id}
                  />
                );
              })
            ) : (
              <Picker.Item label="Not found." />
            )}
          </Picker>
        </SelectLayout>

        <FieldTitle>House Number</FieldTitle>
        <FormInput
          // icon="add-location"
          autoCorrect={false}
          keyboardType="numeric"
          placeholder="Number"
          maxLength={8}
          returnKeyType="send"
          onSubmitEditing={handleUpdate}
          ref={numberRef}
          value={number}
          onChangeText={setNumber}
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
        number: PropTypes.number,
        owner_id: PropTypes.number,
        address_id: PropTypes.number,
      }),
    }),
  }).isRequired,
};
