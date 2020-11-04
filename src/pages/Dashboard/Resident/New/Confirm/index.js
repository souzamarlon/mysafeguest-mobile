import React, { useRef, useMemo } from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';

import {
  Container,
  Content,
  Info,
  Date,
  Name,
  DateText,
  SubmitButton,
} from './styles';

export default function Confirm({ route }) {
  const { data } = route.params;

  const viewRef = useRef();

  const startDateFormatted = useMemo(
    () =>
      format(parseISO(data.start_date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    [data]
  );

  const endDateFormatted = useMemo(
    () =>
      format(parseISO(data.end_date), "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [data]
  );

  const shareImage = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });
      // console.log('uri', uri);
      await Share.open({ url: uri });
    } catch (error) {
      // console.log('error', error);
      Alert.alert(`${error}`);
    }
  };

  return (
    <Container>
      <Content ref={viewRef}>
        <Name>{data.name}</Name>
        <QRCode
          size={128}
          value={`${data.id}:${data.name}:${data.resident_id}` || 'hey'}
        />
        <Info>
          <Date>
            <Icon name="date-range" size={25} color="#06D6A0" />
            <DateText>{startDateFormatted}</DateText>
          </Date>
          <Date>
            <Icon name="date-range" size={25} color="#EF476F" />
            <DateText>{endDateFormatted}</DateText>
          </Date>
        </Info>
      </Content>

      <SubmitButton onPress={shareImage} fontSize={19}>
        Share
      </SubmitButton>
    </Container>
  );
}
