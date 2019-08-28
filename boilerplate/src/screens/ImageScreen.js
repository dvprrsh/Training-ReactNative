import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ImageCard } from '../components/ImageCard';

export const ImageScreen = () => (
    <View>
      <ImageCard
        imageText="Forest"
        imageSource={require('../../assets/images/forest.jpg')}
        imageScore="8"
      />
      <ImageCard
        imageText="Beach"
        imageSource={require('../../assets/images/beach.jpg')}
        imageScore="10"
      />
    </View>
  );

const styles = StyleSheet.create({});
