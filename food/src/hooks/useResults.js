import { useState, useEffect } from 'react';
import yelp from '../apis/yelp';

export const useResults = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    searchApi('');
  }, []);

  const searchApi = async term => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'Liverpool'
        }
      });
      setResults(response.data.businesses);
    } catch (e) {
      setError('Something went wrong!');
    }
  };

  return [searchApi, results, error];
};
