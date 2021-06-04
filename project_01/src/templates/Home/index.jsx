import { useState } from 'react';

export const Home = () => {
  const [posts, setPosts] = useState(null);

  return <p>{JSON.stringfy(posts)}</p>
}
