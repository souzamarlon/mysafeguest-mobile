import axios from 'axios';
import { Alert } from 'react-native';
import { signOut } from '../store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://192.168.68.105:3333',
  // baseURL: 'http://localhost:3333',
  // baseURL: 'http://192.168.25.32:3333',
});

api.registerInterceptWithStore = (store) => {
  api.interceptors.response.use(
    (response) => response,

    async (err) => {
      if (err.response.status === 401) {
        const { error } = err.response.data;
        Alert.alert(`Authentication failure!`, `${error}`);

        await store.dispatch(signOut());

        // history.go('/');
      }
      if (err.response.status === 400) {
        const { error } = err.response.data;

        Alert.alert(`Failure!`, `${error}`);
      }
      if (err.response.status === 404 || err.response.status === 403) {
        const { error } = err.response.data;

        Alert.alert(`Failure!`, `${error}`);
      }
    }
  );
};

export default api;
