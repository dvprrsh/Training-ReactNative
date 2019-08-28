import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

export const SearchBar = ({ value, onInputChange }) => {
  console.log(value);

  return (
    <View style={styles.background}>
      <Feather
        name="search"
        style={styles.icon}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={newValue => onInputChange(newValue)}
      />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

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
