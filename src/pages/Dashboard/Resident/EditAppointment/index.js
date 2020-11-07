import React, { useState, useRef, useMemo } from 'react';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import { format, parseISO, set, isAfter } from 'date-fns';
import pt from 'date-fns/locale/pt';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  Container,
  Form,
  FormInput,
  Content,
  Title,
  DateButton,
  DateText,
  AlignButtons,
  SubmitButton,
} from './styles';

import api from '~/services/api';

import QrCodeView from '~/components/QrCodeView';

export default function EditAppointment({ route, navigation }) {
  const { data } = route.params;

  const [name, setName] = useState(data.name);
  const [startDate, setStartDate] = useState(parseISO(data.start_date_WF));
  const [endDate, setEndDate] = useState(parseISO(data.end_date_WF));

  const [showSelectDate, setShowSelectDate] = useState(false);
  const [showSelectExpirationDate, setShowSelectExpirationDate] = useState(
    false
  );

  const viewRef = useRef();
  const startDateRef = useRef();

  const startDateFormatted = useMemo(
    () =>
      format(startDate, "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    [startDate]
  );

  const endDateFormatted = useMemo(
    () => format(endDate, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [endDate]
  );

  const handleToggleDatePicker = (isWhichButton) => {
    if (isWhichButton === 'button1') {
      setShowSelectDate(true);
    }

    if (isWhichButton === 'button2') {
      setShowSelectExpirationDate(true);
    }
  };

  const onChange = (event, selectedDate) => {
    if (showSelectDate) {
      const currentDate = selectedDate || startDate;
      setShowSelectDate(false);
      setStartDate(set(currentDate, { hours: 0, minutes: 0 }));

      if (isAfter(currentDate, endDate)) {
        setEndDate(set(currentDate, { hours: 0, minutes: 0 }));
      }
    }

    if (showSelectExpirationDate) {
      const currentDate = selectedDate || endDate;
      setShowSelectExpirationDate(false);
      setEndDate(set(currentDate, { hours: 0, minutes: 0 }));
    }
  };

  async function handleUpdate() {
    await api.put(`appointments/${data.id}`, {
      name,
      start_date: startDate,
      end_date: endDate,
    });

    Alert.alert('The appointment has been successfully updated.');
  }

  function shareQrCode() {
    navigation.navigate('QrCodeView', {
      name,
      id: data.id,
      resident_id: data.resident_id,
      start_date: startDateFormatted,
      end_date: endDateFormatted,
    });
  }

  return (
    <Container>
      <Form
        style={{
          height: responsiveHeight(80),
          width: responsiveWidth(90),
        }}
      >
        <Content>
          <QRCode
            size={155}
            value={`${data.id}:${name}:${data.resident_id}` || 'hey'}
          />
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            // autoCapitalize
            placeholder="Guest name"
            returnKeyType="next"
            onSubmitEditing={() => startDateRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <Title>Select the date:</Title>
          <DateButton onPress={() => handleToggleDatePicker('button1')}>
            <Icon name="event" color="#222" size={20} />
            <DateText ref={startDateRef}>{startDateFormatted}</DateText>
          </DateButton>

          <Title>Select expiration date:</Title>
          <DateButton onPress={() => handleToggleDatePicker('button2')}>
            <Icon name="event" color="#222" size={20} />
            <DateText>{endDateFormatted}</DateText>
          </DateButton>

          {(showSelectDate || showSelectExpirationDate) && (
            <DateTimePicker
              testID="dateTimePicker"
              value={showSelectDate ? startDate : endDate}
              mode="date"
              // is24Hour
              display="calendar"
              onChange={onChange}
              minimumDate={showSelectExpirationDate ? startDate : new Date()}
            />
          )}
        </Content>

        <AlignButtons>
          <SubmitButton onPress={handleUpdate} fontSize={19}>
            Update
          </SubmitButton>

          <SubmitButton onPress={shareQrCode} fontSize={19}>
            Share
          </SubmitButton>
        </AlignButtons>
      </Form>
    </Container>
  );
}
