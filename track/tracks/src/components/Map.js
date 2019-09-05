/* eslint-disable no-mixed-operators */
import React, { useContext } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../contexts/LocationContext';

export const Map = () => {
  const { state } = useContext(LocationContext);
  const { currentLocation } = state;

  return currentLocation ? (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: currentLocation.coords.latitude,
        latitudeDelta: 0.01,
        longitude: currentLocation.coords.longitude,
        longitudeDelta: 0.01
      }}
      region={{
        latitude: currentLocation.coords.latitude,
        latitudeDelta: 0.01,
        longitude: currentLocation.coords.longitude,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={20}
        fillColor="rgba(66, 133, 244, 0.4)"
        strokeColor="rgba(66, 133, 244, 1.0)"
      />
    </MapView>
  ) : (
    <View style={styles.spinnerView}>
      <ActivityIndicator size="large" style={styles.spinnerIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400
  },
  spinnerIcon: {
    flex: 1,
    alignSelf: 'center'
  },
  spinnerView: {
    height: 400,
    flexDirection: 'row'
  }
});
