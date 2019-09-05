import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../contexts/LocationContext';

export const TrackForm = () => {
  const { state, startRecording, stopRecording } = useContext(LocationContext);
  const { recording } = state;

  return (
    <View>
      <Input containerStyle={styles.input} placeholder="Track Name" />
      {recording ? (
        <Button containerStyle={styles.button} title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button containerStyle={styles.button} title="Start Recording" onPress={startRecording} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10
  },
  button: {
    marginHorizontal: 10
  }
});
