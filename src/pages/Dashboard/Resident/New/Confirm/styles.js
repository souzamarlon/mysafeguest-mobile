import styled from 'styled-components/native';

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
