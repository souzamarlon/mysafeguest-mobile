import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

import BackgroundImage from '~/assets/residentBackground.jpg';

export const Container = styled.ImageBackground.attrs({
  source: BackgroundImage,
})`
  display: flex;
  align-self: center;
  padding: 0 30px;
  width: 100%;
  /* margin-bottom: 20px; */
  border: 0;
  border-radius: 10px;
  flex: 1;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 55px;
`;

export const FormInput = styled(Input)`
  margin-top: 2px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #fff;
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-size: 18px;
  color: #999;
  padding: 0 5px;
  margin-top: 15px;
  text-align: left;
`;

export const DateButton = styled.TouchableOpacity`
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
`;

export const Picker = styled.View`
  background: #fff;
  padding: 15px 30px;
  margin-top: 30px;
`;

export const SubmitButton = styled(Button)`
  height: 45px;
  margin-top: 25px;
  background: rgba(2, 190, 109, 1);
  margin-bottom: 5px;
  border-radius: 25px;
`;
