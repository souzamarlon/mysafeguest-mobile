import styled from 'styled-components/native';

import BackgroundImage from '~/assets/guardBackground.jpg';

import Button from '~/components/Button';

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
  justify-content: center;
`;

export const Content = styled.View`
  align-self: stretch;
  /* margin-top: 55px; */
  background: rgba(255, 255, 255, 0.7);
  align-items: center;
  border-radius: 10px;
  padding-top: 20px;
  margin-top: 20px;
`;

export const Title = styled.View`
  background: ${(props) => props.backgroundColor};
  border-radius: 25px;
  margin-top: 15px;
`;
export const TitleText = styled.Text`
  color: #444;
  font-size: 24px;
  font-weight: bold;
  margin-right: 2px;
  padding: 0 10px;
  border-radius: 4px;
`;

export const Name = styled.Text`
  color: #222;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  padding: 0 10px;
  border-radius: 4px;
  /* margin-bottom: 10px; */
`;

export const Date = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const DateText = styled.Text`
  color: #555;
  font-size: 22px;
  padding: 0 5px;
  border-radius: 4px;
  align-items: center;
`;

export const ResidentName = styled.Text`
  color: #222;
  font-size: 22px;
  font-weight: bold;
  margin-right: 2px;
  padding: 0 10px;
  border-radius: 4px;
  /* margin-bottom: 10px; */
`;

export const BackButton = styled(Button)`
  height: 45px;
  margin-top: 25px;
  background: rgba(222, 25, 109, 1);
  margin-bottom: 5px;
  border-radius: 25px;
`;
