import React from 'react';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import PropTypes from 'prop-types';

import Background from '~/components/Background';

import {
  Container,
  Title,
  Content,
  WelcomeText,
  SignInButtons,
  Admin,
  Resident,
  GuardButton,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background backgroundName="SignInDashboardImage">
      <Container>
        <Title>My Safe Guest.</Title>
        <Content
          style={{
            height: responsiveHeight(35),
            width: responsiveWidth(100),
          }}
        >
          <WelcomeText>
            The administration button is to manage residents. The resident
            button is to schedule visits to your home.
          </WelcomeText>

          <SignInButtons>
            <Admin
              icon="admin-panel-settings"
              fontSize={21}
              onPress={() => {
                navigation.navigate('AdminSignIn');
              }}
            >
              Administration
            </Admin>
            <Resident
              icon="people"
              fontSize={21}
              onPress={() => {
                navigation.navigate('ResidentSignIn');
              }}
            >
              Resident
            </Resident>
            <GuardButton
              icon="qr-code-scanner"
              fontSize={21}
              onPress={() => {
                navigation.navigate('GuardCheckIn');
              }}
            >
              Guard
            </GuardButton>
            <GuardButton
              fontSize={18}
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            >
              Create your Admin account
            </GuardButton>
          </SignInButtons>
        </Content>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
