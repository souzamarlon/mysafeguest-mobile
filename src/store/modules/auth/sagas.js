import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

// import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email } = payload;

    const response = yield call(api.get, 'guardsauth', { params: { email } });

    const { id, name } = response.data;

    // yield delay(100000);

    // eslint-disable-next-line prefer-object-spread
    const user = Object.assign({
      id,
      name,
      email,
    });

    yield put(signInSuccess(user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Failure, something is wrong!');

    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
