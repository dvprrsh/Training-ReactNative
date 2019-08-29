import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const PostForm = ({ initialValues = { title: '', content: '' }, onSubmit }) => {
  const [postTitle, setPostTitle] = useState(initialValues.title);
  const [postContent, setPostContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <Text>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={postTitle}
        onChangeText={text => setPostTitle(text)}
        placeholder="Title"
      />
      <Text>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={postContent}
        onChangeText={text => setPostContent(text)}
        placeholder="Content"
      />
      <TouchableOpacity style={styles.button} onPress={() => onSubmit(postTitle, postContent)}>
        <Text>Save Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 100,
    padding: 10,
    margin: 10
  },
  input: {
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 2
  }
});
