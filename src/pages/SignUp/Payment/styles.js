import styled from 'styled-components/native';

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
