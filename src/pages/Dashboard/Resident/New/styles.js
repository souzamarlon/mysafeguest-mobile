import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  display: flex;
  align-self: center;
  padding: 0 30px;
  width: 100%;
  margin-top: 50px;
  /* margin-bottom: 20px; */
  border: 0;
  border-radius: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 5px;
`;

export const FormInput = styled(Input)`
  margin-top: 2px;
  background: rgba(251, 255, 255, 0.6);
  border: 1px solid #fff;
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-size: 14px;
  color: #222;
  padding: 0 5px;
`;

export const DateButton = styled.TouchableOpacity`
  height: 46px;
  margin-top: 2px;
  padding: 0 5px;
  background: rgba(251, 255, 255, 0.6);
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
  height: 35px;
  margin-top: 15px;
  background: rgba(144, 190, 109, 1);
  margin-bottom: 5px;
`;
