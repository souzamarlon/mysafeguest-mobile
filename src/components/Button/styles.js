import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  background: rgba(0, 22, 22, 0.9);
  border: 2px solid #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: #eee;
  font-size: 19px;
`;
