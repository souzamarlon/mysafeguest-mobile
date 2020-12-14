import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

export const Container = styled.View`
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

export const InfoButton = styled(RectButton)`
  position: absolute;
  top: 0;
  display: flex;
  right: 0;
  margin: 5px;
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

export const SignTexts = styled.Text`
  color: #fff;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const SignInButtons = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* background: rgba(2, 2, 2, 0.4); */
  margin-top: 15px;
`;

export const SignUpButton = styled(Button)`
  width: 210px;
  height: 30px;
  align-items: center;
  border-radius: 8px;
  background: rgba(14, 190, 109, 0.8);
  margin-top: 10px;
`;

export const Admin = styled(Button)`
  width: 210px;
  height: 50px;
  align-items: center;
  border-radius: 8px;
  background: rgba(32, 32, 32, 0.8);
`;

export const Resident = styled(Button)`
  width: 210px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  background: rgba(0, 187, 249, 0.8);
  margin-top: 10px;
`;

export const GuardButton = styled(Button)`
  width: 210px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  background: rgba(230, 57, 70, 0.8);
  margin-top: 10px;
`;
