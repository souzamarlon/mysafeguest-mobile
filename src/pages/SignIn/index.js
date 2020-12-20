import React from 'react';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import Background from '~/components/Background';

import {
  Container,
  InfoButton,
  Title,
  Content,
  SignTexts,
  SignInButtons,
  Admin,
  Resident,
  GuardButton,
  SignUpButton,
} from './styles';

export default function SignIn({ navigation }) {
  function getInfo() {
    Alert.alert(
      'Information',
      'The administration button is to manage residents. The resident button is to schedule visits to your home.'
    );
  }
  return (
    <Background backgroundName="SignInDashboardImage">
      <Container>
        <InfoButton onPress={() => getInfo()}>
          <Icon name="info" size={30} color="#444" />
        </InfoButton>
        <Title>My Safe Guest.</Title>
        <Content
          style={{
            height: responsiveHeight(35),
            width: responsiveWidth(100),
          }}
        >
          <SignInButtons>
            <SignTexts>Only for Administration:</SignTexts>
            <Admin
              icon="admin-panel-settings"
              fontSize={21}
              onPress={() => {
                navigation.navigate('AdminSignIn');
              }}
            >
              Administration
            </Admin>
            <SignUpButton
              fontSize={21}
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            >
              Sign Up
            </SignUpButton>

            <SignTexts>Only for Residents and Guards:</SignTexts>

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
