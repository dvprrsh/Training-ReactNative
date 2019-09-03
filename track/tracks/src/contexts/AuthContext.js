import { AsyncStorage } from 'react-native';
import { navigate } from '../services';
import createDataContext from './createDataContext';
import trackerApi from '../apis/trackerApi';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };

    case 'sign_in':
      return { errorMessage: '', token: action.payload };
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
    await AsyncStorage.setItem('token', response.data);
    dispatch({ type: 'sign_in', payload: response.data });
    navigate('TrackList');
  } catch (e) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
};

const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data);
    dispatch({ type: 'sign_in', payload: response.data });
    navigate('TrackList');
  } catch (e) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const signOut = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signout', { email, password });
    dispatch({ type: 'sign_out', payload: response.data });
  } catch (e) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { token: null, errorMessage: '' }
);
