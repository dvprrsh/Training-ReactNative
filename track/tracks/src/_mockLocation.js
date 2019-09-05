/* eslint-disable no-underscore-dangle */
/* eslint-disable no-mixed-operators */
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => ({
  timestamp: 10000000,
  coords: {
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitudeAccuracy: 5,
    altitude: 5,
    latitude: 51.50853 + increment * tenMetersWithDegrees,
    longitude: -0.12574 + increment * tenMetersWithDegrees
  }
});

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
