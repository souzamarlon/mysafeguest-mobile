import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  display: flex;
  padding: 0 20px;
  width: 100%;
  flex: 1;
  margin-top: 70px;
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
  color: #999;
`;

export const FormInput = styled(Input)`
  margin-top: 2px;
  background: rgba(251, 255, 255, 0.8);
`;

export const AddressField = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled(Button)`
  height: 40px;
  margin-top: 15px;
  background: rgba(42, 157, 143, 0.8);
  border-radius: 25px;
  margin-bottom: 5px;
`;
