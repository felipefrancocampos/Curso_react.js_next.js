import { useEffect, useState } from 'react';

const useAsync = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
}

export const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() = {
    const fetchData = async () => {
      const daata = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const json = await data.json();
      setPosts(json);
      return json;
    };
  }, []);

  return <p>{JSON.stringfy(posts)}</p>;
};
