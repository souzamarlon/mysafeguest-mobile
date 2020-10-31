import React, { useState, useRef, useMemo, useCallback } from 'react';

import { Alert, Platform } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { format } from 'date-fns';
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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const [show, setShow] = useState(false);

  const startDateRef = useRef();
  const endDateRef = useRef();

  const { id } = useSelector((state) => state.user.profile);

  const date = new Date();

  const dateFormatted = useMemo(
    () => format(startDate, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  const handleToggleDatePicker = useCallback(() => {
    setShow((state) => !state);
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  async function handleSubmit() {
    await api.post('appointments', {
      name,
      resident_id: id,
      start_date: startDate,
      end_date: endDate,
    });

    Alert.alert('Resident was created successfully.');
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

        <Calendar>
          <Title>Select the date:</Title>
          <DateButton onPress={handleToggleDatePicker}>
            <Icon name="event" color="#222" size={20} />
            <DateText>{dateFormatted}</DateText>
          </DateButton>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={startDate}
              mode="date"
              is24Hour
              display="calendar"
              onChange={onChange}
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
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
}
