import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Spacer } from './Spacer';

import { Context as AuthContext } from '../contexts/AuthContext';

export const LogInForm = ({ textToDisplay, navigationCallback }) => {
  const { state, signUp, signIn } = useContext(AuthContext);
  const { errorMessage } = state;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = textToDisplay === 'Sign Up' ? signUp : signIn;

  return (
    <View style={styles.container}>
      <Text style={styles.header} h4>
        {textToDisplay} for Tracker
      </Text>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? (
        <>
          <Spacer />
          <Text style={styles.error}>{errorMessage}</Text>
        </>
      ) : null}
      <Spacer />
      <Button
        containerStyle={styles.button}
        title={textToDisplay}
        raised
        onPress={() => onSubmit({ email, password })}
      />
      <Spacer />
      <TouchableOpacity style={{ alignSelf: 'center' }} onPress={navigationCallback}>
        <Text style={{ color: 'blue' }}>
          {textToDisplay === 'Sign Up'
            ? 'Have an account already? Go to Sign In'
            : "Don't have an account? Go to Sign Up "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    marginBottom: 200
  },
  button: {
    marginHorizontal: 10
  },
  header: {
    marginHorizontal: 10
  },
  error: {
    color: 'red',
    alignSelf: 'center'
  },
  touchableText: {
    justifyContent: 'center'
  }
});
