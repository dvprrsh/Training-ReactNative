import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { globalStyles } from '../styles';

export const TrackListScreen = ({ navigation }) => (
  <View>
    <Text>TrackListScreen</Text>
    <TouchableOpacity
      style={globalStyles.button}
      onPress={() => navigation.navigate('TrackDetail')}
    >
      <Text>Go to Track Detail</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({});
