import React, { useRef, useState, useEffect } from 'react';

import { ActivityIndicator, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsFocused } from '@react-navigation/native';

import { Container, Info, ScanIcon } from './styles';

export default function Camera({ onChange }) {
  const [loading, setLoading] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(false);

  const cameraRef = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setQrCodeData(false);
      setLoading(false);
    }
  }, [isFocused]);

  function barcodeRecognized({ barcodes }) {
    barcodes.forEach((barcode) => {
      if (barcode.type.toString() === 'QR_CODE') {
        setLoading(true);
        const dataSplit = barcode.data.split(':');
        if (!qrCodeData) {
          return setQrCodeData({
            id: parseInt(dataSplit[0], 10),
            name: dataSplit[1],
            resident_id: parseInt(dataSplit[2], 10),
          });
        }
      }
      return false;
    });
  }

  useEffect(() => {
    if (qrCodeData) {
      setLoading(false);
      onChange(qrCodeData);
    }
  }, [onChange, qrCodeData]);

  return (
    <Container>
      <RNCamera
        ref={cameraRef}
        style={{
          // top: 25,
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        onGoogleVisionBarcodesDetected={barcodeRecognized}
      />

      <Info>
        {loading ? (
          <>
            <Icon
              name="qrcode-scan"
              size={55}
              color="#FFF"
              style={{ alignSelf: 'center' }}
            />
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>
              The QR Code was sucessfully scanned!
            </Text>
          </>
        ) : (
          <ScanIcon>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>
              Try to scan the QR Code!
            </Text>
          </ScanIcon>
        )}
      </Info>
    </Container>
  );
}
