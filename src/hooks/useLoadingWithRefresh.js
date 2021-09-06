import axios from 'axios';
import { useEffect, useState } from 'react';
import { loginError, loginSuccess } from '../contexts/authContext/authActions';
import { useAuthData } from '../contexts/authContext/AuthContext';

export default function useLoadingWithRefresh() {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useAuthData();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:5500/api/users/refresh',
          {
            withCredentials: true,
          }
        );
        dispatch(loginSuccess(data.user));
        setLoading(false);
      } catch (err) {
        console.log(err);
        dispatch(loginError());
        setLoading(false);
      }
    })();
  }, [dispatch]);
  return { loading };
}
