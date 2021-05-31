import P from 'prop-types';
import { PostsContext } from ';/context';

export const PostsProvider = ({ children }) => {
  const [postState, postDispatch] = use

  return <PostsContext.Provider>{children}</PostsContext.Provider>
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
}
