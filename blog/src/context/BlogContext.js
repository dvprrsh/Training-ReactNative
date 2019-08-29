import createDataContext from './createDataContext';
import jsonServer from '../apis/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogPost':
      return state.map(blogPost => (blogPost.id === action.payload.id ? action.payload : blogPost));
    case 'get_blogPosts':
      return action.payload;
    default:
      return state;
  }
};

const getBlogPosts = dispatch => async () => {
  const response = await jsonServer.get('/blogposts');
  dispatch({ type: 'get_blogPosts', payload: response.data });
};

const addBlogPost = dispatch => async (title, content, callback) => {
  await jsonServer.post('/blogposts', { title, content });
  // dispatch({ type: 'add_blogPost', payload: { title, content } });
  callback();
};

const deleteBlogPost = dispatch => id => {
  dispatch({ type: 'delete_blogPost', payload: id });
};

const editBlogPost = dispatch => (id, title, content, callback) => {
  dispatch({ type: 'edit_blogPost', payload: { id, title, content } });
  callback();
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
