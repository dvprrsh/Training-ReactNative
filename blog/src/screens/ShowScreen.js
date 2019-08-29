import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';

export const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find(post => post.id === navigation.getParam('id'));

  return (
    <View style={{ marginHorizontal: 10, marginTop: 10 }}>
      <Text style={styles.titleText}>{blogPost.title}</Text>
      <Text style={styles.contentText}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('title');
  return {
    title: `${title}`,
    headerRight: (
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Edit', { title, id: navigation.getParam('id') })}
      >
        <MaterialIcons style={styles.addIcon} name="edit" />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  addIcon: {
    fontSize: 32
  },
  addButton: {
    marginRight: 10
  },
  contentText: {
    fontSize: 18
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
