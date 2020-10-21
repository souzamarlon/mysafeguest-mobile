import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 auto;
  /* background: rgba(11, 222, 0, 0.1); */
  background: rgba(255, 255, 255, 1);
  flex: 1;
  width: 100%;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 50,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 20,
  },
})``;

export const AppointmentInfo = styled.View.attrs({})`
  /* background-color: ${(props) =>
    props.isActiveDate
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.6)'}; */
  opacity: ${(props) => (props.isActiveDate ? 1 : 0.4)};
  margin-top: 5px;
  height: 70px;
  padding: 2px 5px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  /* background-color: rgba(255, 255, 255, 0.1); */
  padding: 3px 10px;
  border-radius: 2px;
  height: 30px;
  width: 100%;
  background-color: rgba(6, 214, 160, 0.9);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const DateField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* margin-top: 1px; */
  padding-top: 3px;
  padding-bottom: 5px;
  width: 100%;
  background-color: rgba(17, 138, 178, 0.1);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
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
