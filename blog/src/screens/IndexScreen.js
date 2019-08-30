import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';

export const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);
  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={{ marginTop: 10 }}>
      {!state.length ? (
        <Text style={{ alignSelf: 'center' }}>No Blog Posts Available</Text>
      ) : (
        <FlatList
          data={state}
          keyExtractor={blogPost => `${blogPost.id}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id, title: item.title })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <MaterialIcons style={styles.deleteIcon} name="delete" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Create')}>
      <MaterialIcons style={styles.addIcon} name="add-circle-outline" />
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  addIcon: {
    fontSize: 32
  },
  addButton: {
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 100,
    padding: 10,
    margin: 10
  },
  deleteIcon: {
    fontSize: 22
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 4
  },
  title: {
    fontSize: 18
  }
});
