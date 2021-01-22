import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import Button from '~/components/Button';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  display: flex;
  padding: 0 20px;
  width: 100%;
  flex: 1;
  margin-top: 70px;
  /* margin-bottom: 20px; */
  border: 0;
  border-radius: 10px;
`;

export const LogoutButton = styled(RectButton)`
  background: transparent;
  align-self: center;
  position: absolute;
  right: 0;
  /* margin: 0 auto; */
`;

export const HeadTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  padding: 0 5px;
  margin-top: 55px;
  text-align: center;
`;

export const Content = styled.View`
  margin-top: 5px;
  background: rgba(249, 65, 68, 0.6);
  border-radius: 25px;
  padding: 10px;
`;

export const ContentText = styled.Text`
  font-size: 18px;
  color: #fff;
  padding: 0 5px;
  margin-top: 15px;
  text-align: center;
`;

export const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: rgba(144, 190, 109, 1);
  margin-top: 20px;
  text-align: center;
`;

export const SubscriptionsButton = styled(Button)`
  width: 90%;
  height: 40px;
  border-radius: 15px;
  background: rgba(144, 190, 109, 0.9);
  margin: 10px auto;
`;

export const Info = styled.Text`
  font-size: 14px;
  text-align: center;
`;

export const PurchaseButton = styled(Button)``;
