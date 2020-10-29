import styled from 'styled-components/native';

import Button from '~/components/Button';

import BackgroundImage from '~/assets/residentBackground.jpg';

export const Container = styled.ImageBackground.attrs({
  source: BackgroundImage,
})`
  margin: 0 auto;
  /* background: rgba(11, 222, 0, 0.1); */
  /* background: rgba(255, 255, 255, 0.4); */
  flex: 1;
  width: 100%;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 20,
  },
})``;

export const AppointmentInfo = styled.View`
  background: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
  height: 120px;
  padding: 2px 20px;
  /* border: 1px solid #222; */
  border-radius: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 5px;
  text-align: center;
`;

export const DateField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* margin-top: 1px; */
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
`;

export const StartDate = styled.Text`
  color: #555;
  font-size: 16px;
  margin-right: 2px;
  padding: 0 10px;
  border-radius: 4px;
`;

export const EndDate = styled.Text`
  color: #555;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 4px;
`;

export const CancelEdit = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
`;

export const Delete = styled(Button)`
  background: rgba(254, 95, 85, 0.9);
  width: 30%;
  height: 25px;
  align-items: center;
`;

export const Edit = styled(Button)`
  background: rgba(87, 115, 153, 0.9);
  width: 30%;
  height: 25px;
  align-items: center;
`;
