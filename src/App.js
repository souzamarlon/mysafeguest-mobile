import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const { signed, isAdmin } = useSelector((state) => state.auth);

  return createRouter(signed, isAdmin);
}
