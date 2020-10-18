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

export const SubmitButton = styled(Button)`
  height: 35px;
  margin-top: 15px;
  background: rgba(144, 190, 109, 1);
  margin-bottom: 5px;
`;
