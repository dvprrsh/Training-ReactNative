import { AsyncStorage } from 'react-native';
import { navigate } from '../services';
import createDataContext from './createDataContext';
import trackerApi from '../apis/trackerApi';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const createTrack = dispatch => async (name, locations) => {
  try {
    await trackerApi.post('/tracks', { name, locations });
  } catch (e) {
    console.log(e);
  }
};

const fetchTracks = dispatch => async () => {
  try {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { createTrack, fetchTracks },
  {}
);
