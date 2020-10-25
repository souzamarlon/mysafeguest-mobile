import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

// import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password, isAdmin } = payload;

    if (isAdmin) {
      const response = yield call(api.post, 'sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      yield put(signInSuccess(token, user, isAdmin));
    }

    if (!isAdmin) {
      const response = yield call(api.post, 'residentsessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      yield put(signInSuccess(token, user, isAdmin));
    }

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Failure, something is wrong!');

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
]);
