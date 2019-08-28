import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const BoxScreen = () => (
    <View style={styles.view0}>
      <View style={styles.view1} />
      <View style={styles.view2} />
      <View style={styles.view3} />
    </View>
  );

const styles = StyleSheet.create({
  view0: {
    borderWidth: 2,
    borderColor: 'black',
    height: 200,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  view1: {
    borderWidth: 1,
    backgroundColor: 'red',
    height: 80,
    width: 80
  },
  view2: {
    borderWidth: 1,
    backgroundColor: 'green',
    height: 80,
    width: 80,

    top: 80
  },
  view3: {
    borderWidth: 1,
    backgroundColor: 'blue',
    height: 80,
    width: 80
  }
});
