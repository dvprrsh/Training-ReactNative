import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const ListScreen = () => {
  const friends = [
    { name: 'Dave', age: '20' },
    { name: 'Jeff', age: '22' },
    { name: 'Katie', age: '24' },
    { name: 'Alice', age: '28' }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      showsVerticalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age: {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 100
  }
});
