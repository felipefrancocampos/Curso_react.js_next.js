import * as types from './types';

export const loadPosts = aync(dispatch) => {
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com')
  const posts = await postsRaw.json();
  dispatch({ type: types.POSTS_SUCCESS, payload: posts })
};
