import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

import BackgroundImage from '~/assets/adminSignIn.jpg';

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
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 0 20px;
  width: 80%;
  height: 400px;
  border: 0;
  border-radius: 10px;
`;

export const Title = styled.Text`
  display: flex;
  flex-direction: row;
  text-align: left;
  color: #222;
  width: 100%;
  padding-bottom: 5px;
  font-size: 40px;
  font-weight: bold;
`;

export const WelcomeText = styled.Text`
  color: #222;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const Email = styled.Text`
  color: #222;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 4px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.8);
`;

export const Password = styled.Text`
  color: #222;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 40px;
`;
