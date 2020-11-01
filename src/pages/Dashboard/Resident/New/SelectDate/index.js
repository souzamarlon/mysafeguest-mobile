import React, { useState, useRef, useMemo, useCallback } from 'react';

import { Alert, Platform } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { format, set, isAfter } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import api from '~/services/api';

import {
  Container,
  Form,
  FormInput,
  Calendar,
  DateButton,
  DateText,
  Title,
  SubmitButton,
} from './styles';

export default function New() {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(
    set(new Date(), { hours: 0, minutes: 0 })
  );
  const [endDate, setEndDate] = useState(
    set(new Date(), { hours: 0, minutes: 0 })
  );
  const [showSelectDate, setShowSelectDate] = useState(false);
  const [showSelectExpirationDate, setShowSelectExpirationDate] = useState(
    false
  );

  const startDateRef = useRef();

  const { id } = useSelector((state) => state.user.profile);

  const startDateFormatted = useMemo(
    () => format(startDate, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
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

  async function handleSubmit() {
    await api.post('appointments', {
      name,
      resident_id: id,
      start_date: startDate,
      end_date: endDate,
    });

    Alert.alert('Appointment was created successfully.');
  }

  return (
    <Container>
      <Form>
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

        <Calendar>
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
        </Calendar>

        <SubmitButton onPress={handleSubmit} fontSize={19}>
          Confirm
        </SubmitButton>
      </Form>
    </Container>
  );
}
