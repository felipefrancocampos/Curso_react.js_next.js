import P from 'prop-types'
import { useEffect } from 'react';
import './App.css';

const Post = () => {
  return (
    <div key={post.id} className="posts">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);

  console.log('Pai, renderizou!');

  //component did mount
  useEffect(() => {
    setTimeout(() => {
      fetch('https:jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r))
    }, 5000);
  }, []);

  return (
    <div className="App">
      {post.length > 0 && posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
      {posts.length <= 0 && <p>Ainda não existem posts</p>}
    </div>
  );
}

export default App;
