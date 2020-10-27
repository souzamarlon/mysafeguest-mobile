import React from 'react';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {
  Container,
  Title,
  Content,
  WelcomeText,
  SignInButtons,
  Admin,
  Resident,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <Container>
      <Title>My Safe Guest.</Title>
      <Content
        style={{
          height: responsiveHeight(30),
          width: responsiveWidth(100),
        }}
      >
        <WelcomeText>
          The administration button is to manage residents. The resident button
          is to schedule visits to your home.
        </WelcomeText>

        <SignInButtons>
          <Admin
            fontSize={21}
            onPress={() => {
              navigation.navigate('AdminSignIn');
            }}
          >
            Administration
          </Admin>
          <Resident
            fontSize={21}
            onPress={() => {
              navigation.navigate('ResidentSignIn');
            }}
          >
            Resident
          </Resident>
        </SignInButtons>
      </Content>
    </Container>
  );
}
