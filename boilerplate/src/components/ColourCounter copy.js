import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ColourCounter = ({ colour, state, onIncrement, onDecrement }) => (
  <View key={colour} style={{ paddingTop: 10 }}>
    <Text style={{ marginLeft: 10 }}>{colour}</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        if (state < 255) onIncrement();
      }}
    >
      <Text>More {colour}</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        if (state > 0) onDecrement();
      }}
    >
      <Text>Less {colour}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginRight: 10,
    marginLeft: 10
  }
});
