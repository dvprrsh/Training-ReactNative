import { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../contexts/AuthContext';

export const LoadingScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return null;
};
