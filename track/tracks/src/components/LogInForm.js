import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Spacer } from './Spacer';

import { globalStyles } from '../styles';

export const LogInForm = ({ navigation, toDisplay }) => (
  <>
    <Text style={styles.header} h4>
      {toDisplay} for Tracker
    </Text>
    <Spacer />
    <Input label="Email" />
    <Spacer />
    <Input label="Password" />
    <Spacer />
    <Button style={styles.button} title={toDisplay} />
  </>
);

const styles = StyleSheet.create({
  button: {
    margin: 10
  },
  header: {
    marginHorizontal: 10
  }
});
