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
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 10px;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
`;

export const Name = styled.Text`
  color: #222;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 0 5px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
  padding: 0 10px 0 10px;
  overflow: hidden;
`;

export const Date = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
  padding: 0 10px 0 10px;
  overflow: hidden;
`;

export const DateText = styled.Text`
  color: #555;
  font-size: 20px;
  padding: 0 5px;
  border-radius: 4px;
  align-items: center;
`;

export const ResidentView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
  padding: 0 20px 0 10px;
  overflow: hidden;
`;

export const ResidentText = styled.Text`
  color: #222;
  font-size: 20px;
  padding: 0 5px;
  border-radius: 4px;
  /* margin-bottom: 10px; */
  text-align: center;
`;

export const BackButton = styled(Button)`
  height: 40px;
  margin-top: 10px;
  background: rgba(222, 25, 109, 1);
  border-radius: 25px;
`;
