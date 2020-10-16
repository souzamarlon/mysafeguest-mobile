import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  margin: 0 auto;
  /* background: rgba(11, 222, 0, 0.1); */
  background: rgba(255, 255, 255, 0.4);
  flex: 1;
  width: 100%;
`;

export const Profile = styled.View`
  height: 55px;
  background: rgba(255, 255, 255, 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid #fff;
  flex-direction: row;
  /* justify-content: space-between; */
`;

export const AlignTitleAndName = styled.View``;

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

export const ResidentsTitle = styled.Text`
  background: rgba(555, 555, 555, 0.3);
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  text-align: center;
  padding-top: 5px;
  width: 100%;
  height: 30px;
  border: 1px solid #fff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
})``;

export const ResidentInfo = styled.View`
  background: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  height: 150px;
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
`;

export const Name = styled.Text`
  color: #222;
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
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
  color: #222;
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
  color: #222;
  font-size: 16px;
`;

export const Appointment = styled(Button)`
  margin-top: 16px;
  background: rgba(11, 22, 22, 0.9);
  width: 100%;
  height: 25%;
  align-items: center;
`;
