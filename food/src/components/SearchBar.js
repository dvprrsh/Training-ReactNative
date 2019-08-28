import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

export const SearchBar = ({ value, onInputChange, onSubmit }) => (
  <View style={styles.background}>
    <Feather name="search" style={styles.icon} />
    <TextInput
      style={styles.input}
      placeholder="Search"
      value={value}
      onChangeText={onInputChange}
      autoCapitalize="none"
      autoCorrect={false}
      onEndEditing={onSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 4,
    margin: 10,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 32,
    alignSelf: 'center',

    marginHorizontal: 10
  }
});
