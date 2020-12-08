import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  display: flex;
  padding: 0 30px;
  width: 100%;
  flex: 1;
  margin-top: 80px;
  /* margin-bottom: 20px; */
  border: 0;
  border-radius: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 5px;
`;

export const FieldTitle = styled.Text`
  font-size: 16px;
  margin: 5px 0 5px 5px;
  color: #eee;
`;

export const FormInput = styled(Input)`
  margin-top: 2px;
  background: rgba(251, 255, 255, 0.8);
`;

export const SelectLayout = styled.View`
  background-color: rgba(251, 255, 255, 0.8);
  height: 46px;
  border-radius: 4px;
  font-size: 11px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #fff;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  height: 40px;
  margin-top: 15px;
  background: rgba(144, 190, 109, 0.8);
  margin-bottom: 5px;
  border-radius: 25px;
`;
