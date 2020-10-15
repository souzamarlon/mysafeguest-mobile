import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 auto;
  background: #d8f3dc;
  flex: 1;
  width: 100%;
`;

export const Profile = styled.View`
  width: 360px;
  height: 80px;
  background: #fdfffc;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 70px;
`;

export const NameTitle = styled.Text`
  color: #888;
  font-size: 16px;
  font-weight: bold;
  padding-top: 15px;
  padding-left: 20px;
`;

export const OwnerName = styled.Text`
  color: #666;
  font-size: 18px;
  font-weight: bold;
  padding-left: 20px;
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
  background: rgba(22, 22, 22, 0.8);
  margin-top: 10px;
  width: 340px;
  height: 50px;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
