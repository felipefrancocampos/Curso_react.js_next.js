import * as typs from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCESS: {
      console.log(action.type);
      return { ...state, posts: action.payload };
    }
  }

  console.log('não encontrei a action', action.type);
  return { ...state };
};
