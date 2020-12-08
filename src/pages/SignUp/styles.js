import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
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

export const Title = styled.Text`
  font-size: 18px;
  color: #999;
  padding: 0 5px;
  margin-top: 15px;
  text-align: left;
`;

export const SubmitButton = styled(Button)`
  height: 45px;
  margin-top: 25px;
  background: rgba(2, 190, 109, 1);
  margin-bottom: 5px;
  border-radius: 25px;
`;
