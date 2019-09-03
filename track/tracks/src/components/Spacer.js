import React from 'react';
import { View, StyleSheet } from 'react-native';

// eslint-disable-next-line no-confusing-arrow
export const Spacer = ({ children }) =>
  !children ? <View style={styles.spacer} /> : <View style={styles.spacer}> {children} </View>;

const styles = StyleSheet.create({
  spacer: {
    margin: 10
  }
});
