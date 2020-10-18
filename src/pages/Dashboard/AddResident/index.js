import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function AddResident() {
  return (
    <Container>
      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Name"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="mail-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="phone"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Phone"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="people-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Select owner"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="add-location"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Street"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="add-location"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Number"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="location-city"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="City"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="location-city"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="State"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          // value={name}
          // onChangeText={setName}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="**********"
          returnKeyType="send"
          // ref={passwordRef}
          // onSubmitEditing={handleSubmit}
          // value={password}
          // onChangeText={setPassword}
        />
        <SubmitButton
          // loading={loading}
          // onPress={handleSubmit}
          fontSize={19}
        >
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
}
