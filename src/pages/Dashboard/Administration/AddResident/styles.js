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

export const FormInput = styled(Input)`
  margin-top: 2px;
  background: rgba(251, 255, 255, 0.6);
  border: 1px solid #fff;
`;

export const AddressField = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled(Button)`
  height: 35px;
  margin-top: 15px;
  background: rgba(144, 190, 109, 1);
  margin-bottom: 5px;
`;
