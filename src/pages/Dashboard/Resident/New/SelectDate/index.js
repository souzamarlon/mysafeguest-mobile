import React, { useState, useRef, useMemo, useCallback } from 'react';

import { Alert, Platform } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { format, set } from 'date-fns';
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
  const endDateRef = useRef();

  const { id } = useSelector((state) => state.user.profile);

  const startDateFormatted = useMemo(
    () => format(startDate, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [startDate]
  );

  const endDateFormatted = useMemo(
    () => format(endDate, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [endDate]
  );

  const handleToggleDatePicker = useCallback(() => {
    setShowSelectDate((state) => !state);
  }, []);

  const onChangeStartDate = (event, selectedDate) => {
    // const currentDate = selectedDate || startDate;

    console.tron.log('test1');

    setStartDate(set(selectedDate, { hours: 0, minutes: 0 }));
  };

  const onChangeEndDate = (event, selectedDate) => {
    // const currentDate = selectedDate || startDate;
    console.tron.log('test2');

    setEndDate(set(selectedDate, { hours: 0, minutes: 0 }));
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
          <DateButton onPress={handleToggleDatePicker}>
            <Icon name="event" color="#222" size={20} />
            <DateText>{startDateFormatted}</DateText>
          </DateButton>
          {showSelectDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={startDate}
              mode="date"
              is24Hour
              display="calendar"
              onChange={onChangeStartDate}
            />
          )}
          <Title>Select expiration date:</Title>
          <DateButton onPress={handleToggleDatePicker}>
            <Icon name="event" color="#222" size={20} />
            <DateText>{endDateFormatted}</DateText>
          </DateButton>
          {showSelectExpirationDate && (
            <DateTimePicker
              testID="dateTimePicker2"
              value={endDate}
              mode="date"
              is24Hour
              display="calendar"
              onChange={onChangeEndDate}
            />
          )}
        </Calendar>

        {/* <FormInput
          icon="date-range"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Start date..."
          returnKeyType="next"
          ref={startDateRef}
          onSubmitEditing={() => endDateRef.current.focus()}
          value={startDate}
          onChangeText={setStartDate}
        />

        <FormInput
          icon="date-range"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="End date..."
          returnKeyType="next"
          ref={endDateRef}
          value={endDate}
          onChangeText={setEndDate}
        /> */}

        <SubmitButton onPress={handleSubmit} fontSize={19}>
          Confirm
        </SubmitButton>
      </Form>
    </Container>
  );
}
