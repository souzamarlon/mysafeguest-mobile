import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

import adminHeader from '~/assets/adminHeader.jpg';

export const Container = styled.View`
  margin: 0 auto;
  /* background: rgba(11, 222, 0, 0.1); */
  background: rgba(255, 255, 255, 0.4);
  flex: 1;
  width: 100%;
`;

export const Profile = styled.ImageBackground.attrs({
  source: adminHeader,
  opacity: 1,
  // borderBottomLeftRadius: 5,
  // borderBottomRightRadius: 5,
})`
  height: 130px;
  /* background: rgba(0, 40, 40, 1); */
  /* background: #f0efeb; */
  /* border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px; */
  flex-direction: row;
  justify-content: space-evenly;
  /* border: 1px solid #eee; */
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

export const WelcomeTitle = styled.Text`
  color: #fff;
  opacity: 0.8;
  font-size: 22px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
`;

export const OwnerName = styled.Text`
  color: #fff;
  opacity: 0.8;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px;
  font-size: 22px;
  margin-top: 5px;
`;

export const AddField = styled.View`
  background: rgba(555, 555, 555, 0.3);
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  flex-direction: row;
  /* width: 100%; */
  height: 40px;
  border: 1px solid #fff;
`;

export const ResidentsTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  color: #43aa8b;
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

export const ResidentInfo = styled.View`
  background: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  height: 150px;
  padding: 2px 20px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 22px;
  font-weight: bold;
  margin-left: 5px;
  text-align: center;
`;

export const MoreInfo = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin-top: 5px;
`;

export const Email = styled.Text`
  color: #495867;
  font-size: 16px;
`;

export const AddressInfo = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  margin-top: 5px;
`;

export const Address = styled.Text`
  color: #495867;
  font-size: 16px;
`;

export const CancelEdit = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
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

export const Appointment = styled(Button)`
  background: rgba(6, 214, 160, 0.9);
  /* background: rgba(11, 22, 22, 0.9); */
  width: 35%;
  height: 25px;
  align-items: center;
`;
