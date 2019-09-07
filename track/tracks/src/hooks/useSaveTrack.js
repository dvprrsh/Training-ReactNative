import { useContext } from 'react';
import { navigate } from '../services/navigationRef';
import { Context as LocationContext } from '../contexts/LocationContext';
import { Context as TrackContext } from '../contexts/TrackContext';

export default () => {
  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);
  const { createTrack } = useContext(TrackContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  return [saveTrack];
};
