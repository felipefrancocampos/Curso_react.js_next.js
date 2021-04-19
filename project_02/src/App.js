import P from 'prop-types'
import { useEffect } from 'react';
import './App.css';


function App() {
  const [posts, setPosts] = useState([]);
  console.log('Pai, renderizou!');

  //component did mount
  useEffect(() => {
    fetch('https:jsonplaceholder.typicode.com/posts')
      .then(r => r.json())
      .then(r => setPosts(r))
  }, []);

  return (
    <div className="App">
      {posts.map(post => {
        return (
          div
        )
      })}
    </div>
  );
}

export default App;
