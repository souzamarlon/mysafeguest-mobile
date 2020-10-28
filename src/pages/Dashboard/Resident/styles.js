import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 auto;
  /* background: rgba(11, 222, 0, 0.1); */
  background: rgba(255, 255, 255, 0.4);
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
