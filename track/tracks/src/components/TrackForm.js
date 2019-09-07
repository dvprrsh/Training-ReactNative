import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../contexts/LocationContext';
import { Spacer } from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';

export const TrackForm = () => {
  const {
    state: { locations, name, recording },
    changeName,
    startRecording,
    stopRecording
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Input
        containerStyle={styles.input}
        onChangeText={changeName}
        placeholder="Track Name"
        value={name}
      />
      {recording ? (
        <Button containerStyle={styles.button} title="Stop" onPress={stopRecording} />
      ) : (
        <Button containerStyle={styles.button} title="Start Recording" onPress={startRecording} />
      )}
      <Spacer />
      {!recording && locations.length ? (
        <Button containerStyle={styles.button} title="Save Recording" onPress={saveTrack} />
      ) : null}
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
