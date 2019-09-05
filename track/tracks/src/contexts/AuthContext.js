import { AsyncStorage } from 'react-native';
import { navigate } from '../services';
import createDataContext from './createDataContext';
import trackerApi from '../apis/trackerApi';

const EMPTY_STATE = { errorMessage: '', token: '' };

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'sign_in':
      return { errorMessage: '', token: action.payload };
    case 'sign_out':
      return EMPTY_STATE;
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_in', payload: response.data.token });
    navigate('TrackList');
  } catch (e) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
};

const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_in', payload: response.data.token });
    navigate('TrackList');
  } catch (e) {
    console.log(e);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const signOut = dispatch => async () => {
  await AsyncStorage.removeItem('token');

  dispatch({ type: 'sign_out' });
  navigate('logInFlow');
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signIn', payload: token });
    navigate('mainFlow');
  } else {
    navigate('logInFlow');
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { clearErrorMessage, signIn, signOut, signUp, tryLocalSignIn },
  { token: null, errorMessage: '' }
);
