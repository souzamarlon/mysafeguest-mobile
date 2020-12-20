import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 5px;
  height: 46px;
  border: 1px solid #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.6)',
})`
  flex: 1;
  font-size: 15px;
  color: #222;
`;
