import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Map, TrackForm } from '../components';
import { Context as LocationContext } from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';

import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [permissionError] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View>
        <Text h4>Create Track</Text>
        <Map />
        {!permissionError ? <TrackForm /> : <Text>Please enable location services</Text>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
