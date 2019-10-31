import { useState, useEffect } from 'react';
import useDebounce from './use-debounce';
import { api, apiCancelToken, source, $axios } from '../../api';

const useFetchLocation = (value) => {
  const [notification, setNotification] = useState('Enter Location to search');
  const [searchResults, setSearchResult] = useState([]);
  const [error, setError] = useState(null);
  const debouncedSearchTerm = useDebounce(value, 500);

  
  useEffect(() => {
    const fetchLocation = async(search) => {
      if (!search) return;
      setNotification('Fetching locations ... ');
      try {
        const query = `locations?query=${search}&count=${10}`;
        const { data } = await api.get(query, { cancelToken: apiCancelToken });
        data.location_suggestions.length === 0 ? setNotification('No locations found') : setNotification('');
        
        setSearchResult(data.location_suggestions)
      } catch(ex) {
        if ($axios.isCancel(ex))  {
          console.log(ex.message)
        } else {
          setNotification('Error fetching location');
          setError(ex.message);
        }
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
    notification, searchResults, error, value
  }
}
 
export default useFetchLocation;
