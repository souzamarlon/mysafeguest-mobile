import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

// import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Failure, something is wrong!');

    yield put(signFailure());
  }
}

export function* residentSignIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'residentsessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Failure, something is wrong!');

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const {
      name,
      email,
      password,
      street,
      number,
      city,
      state,
      postal_code,
    } = payload;

    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    if (response) {
      Alert.alert('Your account has been created successfully!');

      const { id } = response.data;

      yield call(api.post, 'addresses', {
        owner_id: id,
        street,
        number,
        city,
        state,
        postal_code,
      });

      // yield put(signUpSuccess(id));
      // history.push('/');
    }
  } catch (err) {
    Alert.alert(`Failure, something is wrong!`);

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_IN_RESIDENT_REQUEST', residentSignIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
