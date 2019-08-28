import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const PasswordScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 6 ? <Text>Password must be longer than five characters</Text> : null}
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
