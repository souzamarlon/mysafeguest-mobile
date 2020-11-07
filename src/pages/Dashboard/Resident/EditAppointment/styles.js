import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import Input from '~/components/Input';

import Button from '~/components/Button';

import BackgroundImage from '~/assets/residentBackground.jpg';

export const Container = styled.ImageBackground.attrs({
  source: BackgroundImage,
})`
  display: flex;
  width: 100%;
  border: 0;
  border-radius: 10px;
  flex: 1;
`;

export const Form = styled.View`
  align-self: stretch;
  margin: 50px auto;
  height: 470px;
  background: rgba(255, 255, 255, 0.5);
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 20px;
`;

export const FormInput = styled(Input)`
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #fff;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #999;
  padding: 0 5px;
  margin-top: 10px;
  text-align: left;
`;

export const DateButton = styled(RectButton)`
  height: 46px;
  margin-top: 2px;
  padding: 0 5px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #222;
  padding: 0 5px;
  width: 95%;
`;

export const AlignButtons = styled.View`
  flex-direction: row;
`;

export const SubmitButton = styled(Button)`
  height: 35px;
  margin-top: 15px;
  background: rgba(2, 190, 109, 1);
  border-radius: 25px;
  width: 130px;
  margin-right: 10px;
`;
