import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const ComponentsScreen = () => {
  const name = 'David';

  return (
    <View>
      <Text style={styles.greetingText}>Getting started with react native!</Text>
      <Text style={styles.detailText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingText: {
    fontSize: 45
  },
  detailText: {
    fontSize: 20
  }
});
