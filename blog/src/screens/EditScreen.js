import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';
import { PostForm } from '../components/PostForm';

export const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find(post => post.id === navigation.getParam('id'));
  const id = navigation.getParam('id');
  return (
    <PostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => editBlogPost(id, title, content, () => navigation.pop())}
    />
  );
};

EditScreen.navigationOptions = ({ navigation }) => ({
  title: `Edit: '${navigation.getParam('title')}'`
});
