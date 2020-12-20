import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
<<<<<<< HEAD
  const tron = Reactotron.configure({ host: '192.168.68.105' })
    // const tron = Reactotron.configure({ host: '192.168.25.32' })
=======
  // const tron = Reactotron.configure({ host: '7.212.4.61' })
  const tron = Reactotron.configure({ host: '192.168.1.77' })
>>>>>>> staging
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
