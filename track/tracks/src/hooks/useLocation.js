import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
  const [permissionError, setPermissionError] = useState(null);
  const [subsciber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const tempSubscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      );
      setSubscriber(tempSubscriber);
    } catch (e) {
      setPermissionError(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subsciber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [permissionError];
};
