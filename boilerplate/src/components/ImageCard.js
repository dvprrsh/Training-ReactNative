import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const ImageCard = ({ imageText, imageSource, imageScore }) => (
  <View>
    <Text>{imageText}</Text>
    <Image source={imageSource} />
    <Text>Image Score - {imageScore}</Text>
  </View>
);

const styles = StyleSheet.create({});
