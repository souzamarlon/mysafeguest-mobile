import React, { useState } from 'react';
import { View } from 'react-native';

import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';

import { useDispatch } from 'react-redux';

import { Container } from './styles';
import Background from '~/components/Background';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function Payment({ route }) {
  const [cardValue, setCardValue] = useState({});

  if (route.params) {
    const {
      name,
      email,
      password,
      street,
      number,
      city,
      state,
      postal_code,
    } = route.params;
  }

  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(
      signUpRequest(
        name,
        email,
        password,
        street,
        number,
        city,
        state,
        postal_code
      )
    );
  }

  return (
    <Background backgroundName="ProfileBackground">
      <Container>
        <CreditCardInput onChange={() => {}} />
      </Container>
    </Background>
  );
}
