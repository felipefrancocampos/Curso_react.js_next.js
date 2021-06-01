import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsProvider'

export const Post = () => {
  const postsContext = useContext(postsContext);
  const { postsState, postsDispatch } = postsContext;

  return (
    <div>
      <h1>POSTS</h1>
      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  )
}
