import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { residentSignInRequest } from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {
  Container,
  Content,
  Title,
  WelcomeText,
  Form,
  Email,
  FormInput,
  Password,
  SubmitButton,
} from './styles';

export default function Resident() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const passwordRef = useRef();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(residentSignInRequest(email, password));
  }

  return (
    <Background backgroundName="ResidentSignIn">
      <Container>
        <Content
          style={{
            height: responsiveHeight(85),
            width: responsiveWidth(86),
          }}
        >
          <Title>Welcome Resident,</Title>
          <WelcomeText>Login in to My Safe Guest</WelcomeText>
          <Form>
            <Email>Email:</Email>
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="exemplo@email.com"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <Password>Password:</Password>
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
            <SubmitButton
              loading={loading}
              onPress={handleSubmit}
              fontSize={19}
            >
              Log in
            </SubmitButton>
          </Form>
        </Content>
      </Container>
    </Background>
  );
}
