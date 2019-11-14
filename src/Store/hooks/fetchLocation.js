import { useState, useEffect } from 'react';
import useDebounce from './use-debounce';
import { api } from '../../api';

const useFetchLocation = (value) => {
  // const [notification, setNotification] = useState('Enter Location to search');
  const [isFetching, setIsFetching] = useState(false);
  const [searchResults, setSearchResult] = useState([]);
  const [error, setError] = useState(null);
  const debouncedSearchTerm = useDebounce(value, 500);
  
  useEffect(() => {
    const fetchLocation = async(search) => {
      if (!search) return;
      setIsFetching(true);
      try {
        const query = `locations?query=${search}&count=${10}`;
        setTimeout(() => console.log('hi'), 2000)
        const { data } = await api.get(query);
        setSearchResult(data.location_suggestions)
      } catch(ex) {
        setIsFetching(false);
        setError(ex.message);
      }
    }
    if (debouncedSearchTerm)
      fetchLocation(debouncedSearchTerm);
    else
      setSearchResult([])
    fetchLocation();
    // return () => {source.cancel('Operation canceled by the user.');}
  }, [debouncedSearchTerm]);


  return {
    isFetching, searchResults, error, value
  }
}
 
export default useFetchLocation;
