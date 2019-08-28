import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';

export const ColourScreen = () => {
  const [colours, setColours] = useState([]);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setColours([...colours, randomRgb()])}>
        <Text>Add a Colour</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={colour => colour}
        showsVerticalScrollIndicator={false}
        data={colours}
        renderItem={({ item }) => (
          <View
            key={item}
            style={{ height: 100, width: 100, alignContent: 'center', backgroundColor: item }}
          />
        )}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10
  }
});
