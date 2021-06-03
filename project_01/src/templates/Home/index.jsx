
import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await new Promise(r => setTimeout(r, 3000));

      try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    }

    fetchData();
  }, [url, options]);

  return [result, loading]
};

export const Home = () => {
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      abc: '1',
    },
  });

  if (loading) {
    return <p>Loading...</p>
  }

  if (!loading && result) {
    console.log(result);
  }

  return <h1>Oi</h1>
};
