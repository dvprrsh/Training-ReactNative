import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Spacer = ({ children }) => <View style={styles.spacer} />;

const styles = StyleSheet.create({
  spacer: {
    margin: 10
  }
});
