import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Button from '~/components/Button';

import BackgroundImage from '~/assets/signIn.jpg';

export const Container = styled.ImageBackground.attrs({
  source: BackgroundImage,
})`
  justify-content: center;
  align-self: center;
  margin: auto;
  flex-direction: column;
  display: flex;
  width: 100%;
  flex: 1;
`;

export const Content = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
  keyboardVerticalOffset: 20,
})`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  border: 0;
`;

export const Title = styled.Text`
  display: flex;
  text-align: center;
  color: #fff;
  width: 100%;
  /* margin-bottom: 25px; */
  font-size: 50px;
  font-weight: bold;
`;

export const WelcomeText = styled.Text`
  color: #fff;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  /* margin-bottom: 15px; */
`;

export const SignInButtons = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* background: rgba(2, 2, 2, 0.4); */
  margin-top: 15px;
`;

export const Admin = styled(Button)`
  width: 210px;
  height: 50px;
  align-items: center;
  border-radius: 8px;
  background: rgba(14, 190, 109, 1);
`;

export const Resident = styled(Button)`
  width: 210px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  background: rgba(0, 187, 249, 1);
  margin-top: 10px;
`;

export const GuardButton = styled(Button)`
  width: 210px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  background: rgba(230, 57, 70, 1);
  margin-top: 10px;
`;
