import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const TextScreen = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={newValue => setText(newValue)}
      />
      {text.length > 0 ? <Text>My name is {text}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});
