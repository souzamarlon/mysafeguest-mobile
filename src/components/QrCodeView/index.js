import React, { useRef } from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';

import {
  responsiveWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

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

export default function QrCodeView({ route }) {
  const data = route.params;

  const viewRef = useRef();

  const shareImage = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.9,
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
      <Content
        ref={viewRef}
        style={{
          height: responsiveScreenHeight(46),
        }}
      >
        <Name>{data.name}</Name>
        <QRCode
          size={150}
          value={`${data.id}:${data.name}:${data.resident_id}` || 'hey'}
        />
        <Info>
          <Date>
            <Icon name="date-range" size={25} color="#06D6A0" />
            <DateText>{data.start_date}</DateText>
          </Date>
          <Date>
            <Icon name="date-range" size={25} color="#EF476F" />
            <DateText>{data.end_date}</DateText>
          </Date>
        </Info>
      </Content>

      <SubmitButton onPress={shareImage} fontSize={19}>
        Share
      </SubmitButton>
    </Container>
  );
}
