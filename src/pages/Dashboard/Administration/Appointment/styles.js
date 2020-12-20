import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 auto;
  /* background: rgba(11, 222, 0, 0.1); */
  /* background: rgba(10, 245, 212, 0.2); */
  flex: 1;
  width: 100%;
  padding-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 20,
  },
})``;

export const AppointmentInfo = styled.View.attrs({})`
  opacity: ${(props) => (props.isActiveDate ? 1 : 0.4)};
  margin-top: 5px;
  height: 120px;
  padding: 2px 5px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  color: #073b4c;
  font-size: 24px;
  font-weight: bold;
  /* background-color: rgba(255, 255, 255, 0.1); */
  padding: 3px 10px;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  background-color: rgba(241, 250, 238, 0.6);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const DateTitle = styled.Text`
  color: #eee;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  background-color: rgba(230, 57, 70, 0.6);
`;

export const DateField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* margin-top: 1px; */
  padding-top: 3px;
  padding-bottom: 5px;
  height: 45px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StartDate = styled.Text`
  color: #555;
  font-size: 16px;
  margin-right: 2px;
  padding: 0 10px;
  border-radius: 4px;
  align-items: center;
`;

export const EndDate = styled.Text`
  color: #555;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 4px;
`;
