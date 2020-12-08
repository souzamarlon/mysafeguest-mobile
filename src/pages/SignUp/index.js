import React, { useEffect, useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Background from '~/components/Background';

import { Container, Form, FormInput, Title, SubmitButton } from './styles';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background backgroundName="ResidentImage">
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
            maxLength={30}
            // autoCapitalize
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
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
