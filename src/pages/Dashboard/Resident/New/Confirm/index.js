import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Info,
  Date,
  Name,
  DateText,
  SubmitButton,
} from './styles';

export default function Confirm() {
  // const { data } = route.params;

  const { test1, test2, test3 } = { test1: 1, test2: 2, test3: 3 };

  console.tron.log({ test1, test2, test3 });

  return (
    <Container>
      <Content>
        <Name>Marlon da Silva Souza</Name>
        <QRCode size={128} value={`${test1}:${test2}:${test3}` || 'hey'} />
        <Info>
          <Date>
            <Icon name="date-range" size={25} color="#06D6A0" />
            <DateText>03 de novembro</DateText>
          </Date>
          <Date>
            <Icon name="date-range" size={25} color="#EF476F" />
            <DateText>03 de novembro</DateText>
          </Date>
        </Info>
      </Content>

      <SubmitButton onPress={() => {}} fontSize={19}>
        Share
      </SubmitButton>
    </Container>
  );
}
