import './styles.css';

import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts'
import { CounterProvider } from '../../contexts/CounterProvider'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useEffect } from 'react';

export function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
