import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

import residentHeader from '~/assets/residentHeader.jpg';

export const Container = styled.View`
  margin: 0 auto;
  /* background: rgba(11, 222, 0, 0.1); */
  /* background: rgba(255, 255, 255, 0.4); */
  flex: 1;
  width: 100%;
`;

export const Profile = styled.ImageBackground.attrs({
  source: residentHeader,
  opacity: 1,
  // borderBottomLeftRadius: 5,
  // borderBottomRightRadius: 5,
})`
  height: 130px;
  /* border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px; */
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid #eee;
`;

export const AlignTitleAndName = styled.View`
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  width: 75%;
`;

export const LogoutButton = styled(RectButton)`
  background: transparent;
  align-self: center;
  margin: 0 auto;
`;

export const ResidentName = styled.Text`
  color: #fff;
  opacity: 0.8;
  font-size: 24px;
  background: rgba(255, 186, 8, 0.3);
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
`;

export const ResidentEmail = styled.Text`
  color: #111;
  opacity: 0.8;
  background: rgba(255, 186, 8, 0.3);
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  margin-top: 2px;

  /* font-weight: bold; */
  /* text-align: center; */
`;

export const AppointmentTitle = styled.Text`
  background: rgba(14, 190, 109, 0.7);
  margin-top: 20px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  color: #eee;
  border-radius: 5px;
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
  opacity: ${(props) => (props.isActiveDate ? 1 : 0.4)};
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
  margin: 0 10px;
  border-radius: 4px;
  text-align: center;
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
