import React, { useContext, useState } from 'react';

import { Context as BlogContext } from '../context/BlogContext';
import { PostForm } from '../components/PostForm';

export const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);
  return (
    <PostForm
      onSubmit={(postTitle, postContent) =>
        addBlogPost(postTitle, postContent, () => navigation.navigate('Index'))
      }
    />
  );
};

CreateScreen.navigationOptions = {
  title: 'Create Post'
};
