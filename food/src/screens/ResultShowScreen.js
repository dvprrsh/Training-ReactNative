import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

import yelp from '../apis/yelp';

export const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const paramId = navigation.getParam('id');

  useEffect(() => {
    getResult(paramId);
  }, []);

  const getResult = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  if (!result) return null;

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 300
  }
});
