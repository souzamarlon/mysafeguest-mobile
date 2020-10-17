import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

export const Container = styled.View`
  margin: 0 auto;
  /* background: rgba(11, 222, 0, 0.1); */
  background: rgba(255, 255, 255, 0.4);
  flex: 1;
  width: 100%;
`;

export const Profile = styled.View`
  height: 65px;
  background: rgba(230, 242, 255, 0.2);
  /* background: #f0efeb; */
  /* border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px; */
  border-radius: 28px;
  margin: 5px;

  border: 3px solid #fff;
  flex-direction: row;
  /* justify-content: space-between; */
`;

export const AlignTitleAndName = styled.View`
  flex-direction: column;
`;

export const WelcomeTitle = styled.Text`
  color: #888;
  font-size: 16px;
  font-weight: bold;
  padding-top: 5px;
  padding-left: 20px;
`;

export const OwnerName = styled.Text`
  color: #666;
  font-size: 18px;
  font-weight: bold;
  padding-left: 25px;
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

export const AddButton = styled(RectButton)`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  align-items: center;
  background: rgba(144, 190, 109, 1);
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
  height: 180px;
  padding: 2px 20px;
  border: 1px solid #fff;
  border-radius: 4px;
`;

export const ResidentName = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* width: 120px; */
  margin-top: 5px;
  background: rgba(254, 95, 85, 0.9);
  /* border: 1px solid #495867; */
  /* background: rgba(111, 111, 222, 0.3); */
  border-radius: 25px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 16px;
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
  margin-top: 5px;
`;

export const Delete = styled(Button)`
  margin-top: 10px;
  background: rgba(254, 95, 85, 0.9);
  width: 40%;
  height: 60%;
  align-items: center;
`;

export const Edit = styled(Button)`
  margin-top: 10px;
  background: rgba(87, 115, 153, 0.9);
  width: 40%;
  height: 60%;
  align-items: center;
`;

export const Appointment = styled(Button)`
  margin-top: 16px;
  background: rgba(11, 22, 22, 0.9);
  width: 100%;
  height: 20%;
  align-items: center;
`;
