import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SearchBar } from '../components/SearchBar';

export const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log('log', searchTerm);

  return (
    <View>
      <SearchBar value={searchTerm} onInputChange={term => setSearchTerm(term)} />
      <Text>{searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
