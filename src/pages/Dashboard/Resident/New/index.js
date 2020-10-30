import React, { useState, useRef, useMemo } from 'react';

import { Alert, DatePickerAndroid } from 'react-native';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import api from '~/services/api';

import {
  Container,
  Form,
  FormInput,
  DateButton,
  DateText,
  SubmitButton,
} from './styles';

export default function New() {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const startDateRef = useRef();
  const endDateRef = useRef();

  const { id } = useSelector((state) => state.user.profile);

  const date = new Date();

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleSubmit() {
    await api.post('appointments', {
      name,
      resident_id: id,
      start_date: startDate,
      end_date: endDate,
    });

    Alert.alert('Resident was created successfully.');
  }

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });
    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);
    }
  }

  return (
    <Container>
      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          // autoCapitalize
          placeholder="Name"
          returnKeyType="next"
          onSubmitEditing={() => startDateRef.current.focus()}
          value={name}
          onChangeText={setName}
        />

        <DateButton onPress={handleOpenPicker}>
          <Icon name="event" color="#FFF" size={20} />
          <DateText>{dateFormatted}</DateText>
        </DateButton>

        <FormInput
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
        />

        <SubmitButton onPress={handleSubmit} fontSize={19}>
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
}
